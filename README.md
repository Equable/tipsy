# [Tipsy](https://thetipsymixologist.herokuapp.com/)

[![Codeship Status for Equable/tipsy](https://app.codeship.com/projects/da2542a0-0ad5-0137-2264-72acf08820cf/status?branch=master)](https://app.codeship.com/projects/326289)

## Install

1. Clone the repo and navigate via CLI to the cloned folder.
2. From the folder run the follow in order to install all dependencies:
```
bundle install
yarn install
```
3. Ensure a postgres server is running before running the following:
```
bundle exec rake db: create
```
4. Migrate and seed the server:
```
bundle exec rake db:migrate
bundle exec rake db:seed
```
5. Start the server. Open two terminals in the same directory using the CLI. The first window enter `rails s` and in the second `yarn run start`.
6. Navigate to the webpage at `localhost:3000`

## Run Tests

Tests can be run using `bundle exec rspec` or `yarn run test --single-run`. ** NOTE : There are currently no JS tests **

# Dependencies

## Ruby Version: 2.4.5

## Ruby Gems:
```
rails 
pg
puma
sass-rails
uglifier
jbuilder
jquery-rails
devise
foundation-rails
autoprefixer-rails
webpacker
active_model_serializers
google_places
```

## Node: 6.0.0
```
@fortawesome/fontawesome-svg-core
@fortawesome/free-regular-svg-icons
@fortawesome/free-solid-svg-icons
@fortawesome/react-fontawesome
@rails/webpacker
babel-preset-react
fetch-mock
prop-types
react
react-dom
react-google-maps
react-router
react-router-dom
react-stars
redbox-react
```

# Versions:

* 0.1 Created MVP/Proof of concept of webpage.
  * Will continue on styling. For public model
  * Future repo will be made for further features and actual product. The repo will be private but will later take over the heroku deployment