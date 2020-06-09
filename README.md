# Tempo - Workout Playlists

![](https://i.imgur.com/MJr8KLd.jpg)

### Project Description
A convenient way to make workout and user preference tailored playlists!

We're interested in making it easier and more enjoyable for people to work out. We find ourselves postponing our workouts to find/curate the ideal playlist, and it eats in to time we could be doing something else (like working out)! We made this app to be a convenient way to make workout/user preferenced tailored playlists!

This is the front end we used to pull in and display information to the User.

### Sample Screenshots/Mockups

#### Login 
![](https://media.giphy.com/media/Id6vt52G35Rkr2Oq62/giphy.gif)
#### User Profile 
![](https://media.giphy.com/media/h4IrY661rYPyfTGcgc/giphy.gif)
#### Some new playlist flow
![](https://media.giphy.com/media/RMk2vnXfgJVXUqxlxU/giphy.gif)

## Architecture

### Code Organization
**Front end**
1. ReactNative app
    * Pull songs to make playlists from spotify API
    * Gathers Spotify Login for auth data and uses Spotify API to authenticate it
    * Requests music preferences from user for profile
    * Requests workout information from user
    * Receives generated playlist from Spotify API to display to User
    * Allows for playlist title and other inputs to be updated

### Tools

We used the Spotify API and Authentication API to build this app. 

### Libraries Used

## Setup

Npm install then npm start. Once expo page has loaded, scan barcode on phone to run on expo mobile app.

### Client
* `git clone git@github.com:dartmouth-cs52-20S/project-workout-playlists.git`
* `brew install node`
* `brew install watchman`
* `npm install expo-cli --global`
* `yarn install`
* `npm start`

### Dev Environment Setup
Run commands in git supported commandline


## Deployment

* A new version of app is automatically deployed to Heroku whenever code is pushed to master
* Runs on Expo App as simulation.

## Authors

 * Catherine Parnell
 * Grant Dumanian
 * Elizabeth Wilson
 * Jennifer Qian
 * Isaiah Martin
 

## Acknowledgments
Thank you very much to Tim Tregubov and the CS52 TAs for being so helpful! This app would not have been possible without the amazing teaching team this term.
