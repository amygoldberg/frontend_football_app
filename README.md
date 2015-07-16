## Pick Em Football App

## Objectives

  # Create football league app, using Ruby backend and AngularJS frontend
  # Planning: wireframes and user stories
  # Deploy application on Heroku

## Instructions

  # Create an account or login if existing user
  # Users can login and view/edit account details
  # If admin user, can create a new game week
  # If regular user, can copy a new game week each week and submit picks for the winning team of each game
  # Users can view total wins each week, and win percentage week over week.

## Overview

  I've create a functional full stack application, allowing users to log in with authentication. Depending on the type of user (admin vs regular) you can either create a new game week, or copy a master version game week. All users can submit picks for winner of each game each week, and later view total wins per game week, and total win percentage.

  1. Create user stores (football_app/user_stories.txt)

  2. Create wireframes using Balsamiq (link?)

  3. Start by creating Ruby backend. Create models for user, game week, game, and team. Define relationships and seed admin user and regular user with one game week (including games and teams for games). Start creating controllers for each model, and associating routes. Test in Postman.

  4. Start creating AngularJS frontend. Create a user Factory and a game week Factory. Connect the factories to associating Controllers and connect all to the app Routes. Create html view pages depending on the route url. Test that front and back end are connecting in localhost.

  5. Add authentication in back and front end - allow a returning user to login with stored credentials, and a new user to create an account and store their credentials.

  6. Continue creating routes in the backend (creating new game week, editing account details) and connect in the front end controllers and views.

  7. Style views with Bootstrap.

  8. Deploy application to Heroku (update URL's from localhost).
