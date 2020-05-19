# Workout Playlists

![](https://i.imgur.com/MJr8KLd.jpg)


TODO: short project description, some sample screenshots or mockups


### Project Description
A convenient way to make workout and user preference tailored playlists!

We're interested in making it easier and more enjoyable for people to work out. We find ourselves postponing our workouts to find/curate the ideal playlist, and it eats in to time we could be doing something else (like working out)!

### Sample Screenshots/Mockups

## Architecture


### Code Organization
**Front end**
1. ReactNative app
    * Pull songs to make playlists from spotify API
    * Pulls auth data from user API


**Back end**
1. User/Auth API
    * Communicates with FE about account/authentication
    * Sends account information to Spotify API

2. Spotify API
    * Takes info from user API to create create playlists based on user preferences
    * (Potentially) takes info from Health API to influence playlist creation based off of workout intensity/duration
    * Sends playlist to FE

3. Health API (stretch goal?)
    * looks at past workout intensity over time to further tailor suggestions/map tempo to workout

### Tools

Spotify API

### Libraries Used

## Setup

TODO: how to get the project dev environment up and running, npm install etc

### Client
* `brew install node`
* `brew install watchman`
* `npm install expo-cli --global`
* `yarn install`
* `yarn add axios`
* `yarn add @react-navigation/native @react-navigation/bottom-tabs react-native-gesture-handler@~1.5.0 react-native-reanimated@~1.4.0 react-native-screens@2.0.0-alpha.12 react-native-safe-area-context@0.6.0 @react-native-community/masked-view@0.1.5`

### Dev Environment Setup


## Deployment

TODO: how to deploy the project

## Authors

 * Catherine Parnell
 * Grant Dumanian
 * Elizabeth Wilson
 * Jennifer Qian
 * Isaiah Martin
 

## Acknowledgments
