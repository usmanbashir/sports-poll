"use strict";

var gulp = require("gulp");
var gutil = require("gulp-util");
var rename = require("gulp-rename");
var connect = require("gulp-connect");
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cleancss = require('gulp-cleancss');
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var del = require('del');

var config = {
  port: 9000,
  host: "0.0.0.0",
  paths: {
    src: {
      html:       "./frontend/*.html",
      js:         "./frontend/**/*.{js,jsx}",
      sass: {
        soruce:   "./frontend/stylesheets/**/*.{sass,scss}",
        main:     "./frontend/stylesheets/main.sass",
        libs:     ["./node_modules/materialize-css/sass/"]
      },
      fonts:      "./node_modules/materialize-css/font/**/*.{eot,ttf,woff,woff2,svg}",
      images:     "./frontend/images/**/*.{png,jpg}"
    },
    dest: {
      root:       "./public/",
      index:      "./public/index.html",
      assets:     "./public/assets/",
      fonts:      "./public/assets/fonts/",
      images:     "./public/assets/images/"
    }
  }
};


gulp.task("clean", function() {
  return del.sync([
    config.paths.dest.assets,
    config.paths.dest.index
  ]);
});


gulp.task("connect", function() {
  connect.server({
    root: [config.paths.dest.root],
    port: config.port,
    host: config.host,
    livereload: true
  });
});


gulp.task("html", function() {
  return gulp.src(config.paths.src.html)
             .pipe(gulp.dest(config.paths.dest.root))
             .pipe(connect.reload());
});


gulp.task("fonts", function() {
  return gulp.src(config.paths.src.fonts)
             .pipe(gulp.dest(config.paths.dest.fonts));
});


gulp.task("images", function(){
  return gulp.src(config.paths.src.images)
             .pipe(gulp.dest(config.paths.dest.images));
});


gulp.task("sass", function() {
  return buildSass("dev");
});

gulp.task("sass:production", function() {
  return buildSass("production");
});


// Watch for changes and compile assets.
gulp.task("watch", ["webpack:watch"], function() {
  gulp.watch(config.paths.src.html, ["html"]);
  gulp.watch(config.paths.src.sass.source, ["sass"]);
});


// Build production ready webpack based assets.
gulp.task("webpack:build:production", function(done) {
  var wpConfig = Object.create(webpackConfig);
  wpConfig.devtool = "source-map";
  wpConfig.plugins = wpConfig.plugins.concat(
      new webpack.DefinePlugin({
        "process.env": {
          // This has effect on the react lib size
          "NODE_ENV": JSON.stringify("production")
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin()
  );

  webpackBuild("webpack:build:production", wpConfig, "run", done);
});


// Build development versions of webpack based assets.
gulp.task("webpack:build:dev", function(done) {
  var wpConfig = Object.create(webpackConfig);
  wpConfig.devtool = "source-map";
  wpConfig.debug = true;
  wpConfig.pathInfo = true;

  webpackBuild("webpack:build:dev", wpConfig, "run", done);
});


// Have webpack watch for assets under it and rebuild changes.
gulp.task("webpack:watch", function() {
  var wpConfig = Object.create(webpackConfig);
  // Not the fastest build option, but it's a price worth paying for some comforts.
  wpConfig.devtool = "eval-source-map";
  wpConfig.debug = true;
  wpConfig.pathInfo = true;
  wpConfig.watch = true;

  webpackBuild("webpack:watch", wpConfig, "watch");
});


// By default, setup watch and run a dev server to serve all static assets.
gulp.task("default", 
  [
    "clean",
    "webpack:watch",
    "sass",
    "fonts",
    "images",
    "html",
    "connect",
    "watch"
  ]
);


// Build all assets as production ready.
//
// Note: A work in progress.
gulp.task("build", ["html", "sass:production", "fonts", "images", "webpack:build:production"]);


// Helpers

var buildSass = function(env) {
  var _sass = sass(config.paths.src.sass.main, {
             loadPath: config.paths.src.sass.libs,
             sourcemap: true,
             style: "expanded"
            })
            .on("error", sass.logError)
            .pipe(rename("styles.css"))
            .pipe(autoprefixer())
            .pipe(sourcemaps.write("."));

  if (env === "production") {
    _sass.pipe(cleancss())
         .pipe(rename("styles.css"));
  }

  return _sass.pipe(gulp.dest(config.paths.dest.assets))
              .pipe(connect.reload());
};


var webpackBuild = function(taskName, wpConfig, mode, done) {
  var wp = webpack(wpConfig);

  var _build = function(error, stats) {
    if (error) {
      throw new gutil.PluginError(taskName, error);
    } else {
      gutil.log(taskName, stats.toString({ colors: true }));
    }

    if (mode === "run") { done(error); }
  };

  if (mode === "run") {
    wp.run(_build);
  } else if (mode === "watch") {
    wp.watch({ poll: true }, _build);
  }
};
