# Podcast Search App

This **PodcastApp** allows users to browse, search, and listen to podcasts. Users can explore podcast details, play episodes, and control playback through a mini player.

## Features

- **Podcast Browsing**: Users can view a list of podcasts and their details.
- **Search Functionality**: Search for podcasts by title.
- **Podcast Details**: Detailed view of each podcast, including an episode list.
- **Audio Playback**: Play, pause, and stop podcast episodes.
- **Mini Player**: Persistent mini player for controlling audio playback across the app.
- **Episode List**: View a list of episodes for each podcast.
- **Episode Details**: Detailed view of each episode, including audio playback controls.
- **Episode Audio Playback**: Play, pause, and stop individual episodes.

## Screenshots

- **Login Screen**  
  ![Login Screen](./assets/screenshots/login.png)

- **Home Screen**  
  ![Home Screen](./assets/screenshots/home.png)

- **Podcast Details Screen**  
  ![Podcast Details Screen](./assets/screenshots/details.png)

- **Podcast Player Screen**  
  ![Podcast Player Screen](./assets/screenshots/player.png)

- **Podcast Info Screen**  
  ![Podcast Info Screen](./assets/screenshots/info.png)

*(Make sure to replace the image paths with the correct file paths in your project.)*

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/waqaskhanroghani/Podcast_App
    ```

2. Navigate to the project directory:
    ```bash
    cd Podcast_App
    ```

3. Install dependencies:
    ```bash
    yarn
    ```

4. Run the app:
    ```bash
    yarn android  # For Android
    yarn ios --simulator='iPhone 12'  # For iOS
    ```

## Project Structure

```plaintext
.
├── src/
│   ├── components/          # Reusable components
│   ├── screens/             # Application screens like Home, PodcastDetails, Search
│   │   ├── Search.js
│   ├── styles/              # Global and component-specific styles
│   ├── utils/
│   │   ├── data.js          # Contains podcast data arrays (allPodcasts and myPlaylist)
├── App.js                   # Main app entry point
├── README.md                # Project documentation
├── package.json             # Project dependencies and scripts
└── assets/                  # Contains images and other static assets
