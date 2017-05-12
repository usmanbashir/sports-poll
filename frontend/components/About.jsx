import React from "react";

export default class About extends React.Component {
  render() {
    return (
      <div className="about row">
        <div className="col s12 m8 offset-m2 flow-text">
          <h3>About</h3>
          <div className="divider" />

          <p>
            I took the concept of a sports poll website and tried to build an easy to use and simple experience around the whole thing. My goals for the project, which were numerous, included building a simple, functional and effective polling web app that worked across various devices.
          </p>
          
          <p>
            And, while doing so. Learn and gain experience on new front-end tools and technologies like **ReactJS**, **Flux**, **ES6**, **Gulp.js**, **Webpack**, **Node.js** and friends. Which was a tall order from the get go, since until this project. I had only read about most of these but never actually used any of them before.
          </p>

          <p>
            Now admittedly, it was not easy to learn and pick up all these new tools simultaneously while developing a project. But, other than Webpack and Gulp.js, which were the most troublesome of the bunch. The rest, were relatively manageable.
          </p>
          
          <p>
            Thankfully, for the backend I decided to stick with what I know well and develop the API for the web app in Ruby on Rails 4 with MongoDB as the database server.
          </p>

          <p>
            Though, since this project was mostly about building a front-end web app interfacing with a few API endpoints. There really wasn't that much to do in the backend. So, I decided to keep the backend simple and minimal.
          </p>

          <p>
            I did get stuck on a few issues, which took some time to solve. But, they were all related to the Webpack and Gulp.js asset pipeline. Fortunately, there weren't any issues that caused too much trouble and stopped my progress while developing the web app, itself.
          </p>

          <p>
            There was a lot more that I wanted to do. But, had to skip and take some shortcuts because of time constrains. Things like unit tests, proper error handling on both the front and backend, progress indicators across the UI when loading data, better transitions between UI states, performance optimizations for database queries and loading assets among other things.
          </p>

          <p>
            Which, is fine. Since after all, this project was only meant to be a proof of concept and nothing more. And, it does its job admirably at that, and then some.
          </p>

          <p>
            Personally, working on this project was a blast. Having completed it using an unfamiliar tech stack was immensely exhilarating. Making it, worth all the hassle. In the end, it allowed me to learn so many new things and expand my toolset.
          </p>

          <div className="divider" />

          <p>
            Like what you see? Then why don't you say something? I'm listening and I'm on <a href="https://twitter.com/ubax">Twitter</a>.
          </p>

          <p>
            Want to see the guts of this app? Go right ahead, and check out its source code on [GitHub](https://github.com/usmanbashir/sports-poll)!
          </p>

          <blockquote>
            ― <a href="http://www.usmanbashir.com/">Usman Bashir</a>
          </blockquote>
        </div>
      </div>
    );
  }
}
