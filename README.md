# Movie App

This app is built using React, Redux, and the Node API. It allows you to browse through a list of movies, view details about a specific movie, and store movie details in the Redux store to improve performance.

## Features

    * Browse a list of movies
    * View details about a specific movie, including title, description, and release date
    * Store movie details in the Redux store to improve performance
    * Use of the Node API to fetch movie data

## Redux Store

The Redux store is used to manage the state of the application, including the list of movies and details about a specific movie. When a movie is selected for the first time, the movie details are fetched from the Node API and stored in the Redux store. Subsequent selections of the same movie will retrieve the details from the Redux store instead of making another API call.

## CSS
Styling is done using basic CSS to provide a clean and simple look to the app. The CSS is located in the src/App.css file.

# API

The Node API is used to fetch movie data, including the list of movies and details about a specific movie. The API is located in the src/utils/api.js file. Contributing
