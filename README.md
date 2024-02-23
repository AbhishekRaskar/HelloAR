# Video Display App

## Overview
This project is a simple React application that displays a series of YouTube videos. Users can navigate through the videos using arrow buttons or keyboard arrow keys. The application is built using Chakra UI for styling.

## Installation
To run this project locally, follow these steps:
1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Open your browser and navigate to `http://localhost:3000`.

## Features
- Display YouTube videos in an iframe.
- Navigate through videos using arrow buttons or keyboard arrow keys.
- Dynamically update the video display based on user interaction.

## Flow
1. The application starts by displaying the first video in the `videos` array.
2. Users can navigate to the next or previous video using the "Next Video" and "Previous Video" buttons respectively.
3. Users can also navigate through videos using the arrow keys on the keyboard.
4. When reaching the first or last video, the corresponding navigation buttons are disabled to prevent invalid navigation.

## Stack Used
- React: JavaScript library for building user interfaces.
- Chakra UI: Component library for React applications that provides a set of accessible and customizable UI components.
- YouTube API: Utilized indirectly by embedding YouTube videos via iframes.

## Structure
- `index.js`: Entry point of the application.
- `App.js`: Main component rendering the `VideoDisplay` component.
- `VideoDisplay.js`: Component responsible for displaying the videos and handling user interactions.
- `README.md`: Documentation file providing information about the project, installation instructions, features, and stack used.

## Future Improvements
- Add error handling for cases where YouTube videos fail to load.
- Enhance accessibility features for better usability.
- Implement additional features such as autoplay, video search, or filtering options.


