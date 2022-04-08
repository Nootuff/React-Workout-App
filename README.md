# weightForm readme
[weightForm](https://weightform.netlify.app/) is a website built for weightlifters and gym-goers using React Hooks and node.js. Using the [Axios](https://axios-http.com/docs/intro) HTTP client, the site allows users to search for exercise information & save their favourites to localStorage. I built the site to act as a quick reference guide for proper exercise form & posture for use at the gym.

![Site image]( https://raw.githubusercontent.com/Nootuff/Nootuff.github.io/master/imgs/weightForm-imgs/weightForm-img-1.png)

## Features
- Customisable search function built using an HTTP request system that uses Axios, connected to an endpoint on the [ExerciseDB](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb) API hosted on [RapidAPI](https://rapidapi.com/) to allow users to search this API for exercise data.
- Save feature that will save any selected result to localStorage. 
- Animated exercise demonstrations.
- Full data pagination to break up results into multiple pages.
-  CSS loading animation and custom error messages if no results are found.
- Responsive mobile-first design created using the [MUI styling library](https://mui.com/).

## Users are able to:
- Search for exercise info and animated demonstrations by name, target muscle or equipment used.
- Save their favourites to localStorage & view their favs by toggling the sites’ display mode.
- Remove favourites from the favs list or from the results list itself.
