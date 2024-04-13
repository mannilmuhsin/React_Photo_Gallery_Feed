# Photo Gallery Feed Application

Welcome to the **Photo Gallery Feed Application**! This project is a photo gallery feed app featuring a front-end built with React and a back-end built with Express. It fetches photo gallery data from an external API and displays it on the front-end using dynamic rendering and various UI components.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Configuration](#configuration)


## Features

### Front-End

- **Reusability**: Modular components such as `Header`, `ArticleList`, `ArticleItem`, and `ArticleModal` for better reusability and maintainability.
- **Material-UI Components**: Utilizes Material-UI components like `CircularProgress` and `Skeleton` for a polished user interface and visual feedback.
- **Modal for Full View**: Displays a modal component for full viewing of selected articles.
- **Loading Indicators**: `CircularProgress` for visual feedback while data is loading.
- **Axios for Fetching Data**: Uses Axios for HTTP requests to fetch data from the back-end.
- **Tailwind CSS for Styling**: Efficient and consistent UI design with Tailwind CSS.

### Back-End

- **Allowing All CORS**: Uses the `cors` middleware for cross-origin requests from any origin.
- **Dynamic Rendering**: Path parameters to handle requests dynamically and fetch data from the external API.

## Technologies

- **Front-End**: React, Material-UI, Axios, Tailwind CSS
- **Back-End**: Express, Node.js, Cors
- **External API**: Photo Gallery Data API

## Configuration
### Tailwind CSS

This application uses Tailwind CSS for efficient and consistent styling. For more information, refer to the [Tailwind documentation](https://tailwindcss.com/docs).
