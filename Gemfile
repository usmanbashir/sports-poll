source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# Use puma as the app server
gem 'puma'
gem 'foreman'

gem 'rails_12factor', group: :production
gem 'rack-timeout'

gem 'mongoid'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'

  gem 'rubocop', '~> 0.36.0', require: false

  gem 'rspec-rails'
  gem 'spring-commands-rspec'
  gem 'mongoid-rspec'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'

  gem 'guard', require: false
  gem 'guard-rspec', require: false

  gem 'bundler-audit'
end
