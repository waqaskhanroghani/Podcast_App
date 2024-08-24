# Podcast App

This PodcastApp allows users to browse, search, and listen to podcasts. Users can explore podcast details, play episodes, and control playback through a mini player.



## Features

- **Podcast Browsing**: Users can view a list of podcasts and their details.
- **Search Functionality**: Users can search for podcasts by title.
- **Podcast Details**: Detailed view of each podcast, including episodes list.
- **Audio Playback**: Play, pause, and stop podcast episodes.
- **Mini Player**: A persistent mini player for controlling audio playback across the app.
- **Episode List**: View a list of episodes for each podcast.
- **Episode Details**: Detailed view of each episode, including audio playback controls.
- **Episode Audio Playback**: Play, pause, and stop individual episodes.


## Screenshots

- Login screen =>
![alt text](<Simulator Screen Shot - IPhone 12 - 2024-08-24 at 11.28.08.png>)

- Home screen =>

![alt text](<Simulator Screen Shot - IPhone 12 - 2024-08-24 at 11.28.18.png>)

- Podcast details screen =>
![alt text](<Simulator Screen Shot - IPhone 12 - 2024-08-24 at 11.28.29.png>)

- Podcast player screen =>
![alt text](<Simulator Screen Shot - IPhone 12 - 2024-08-24 at 11.28.37.png>)

- Podcast Info screen =>
![alt text](<Simulator Screen Shot - IPhone 12 - 2024-08-24 at 11.28.56.png>)


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
    yarn ios --simulator='IPhone 12'  # For iOS
    ```

## Project Structure


.
├── src/
│   ├── components/
│   ├── screens/
│   │   ├── Search.js
│   ├── styles/
│   ├── utils/
│   │   ├── data.js    # Contains the podcastData with allPodcasts and myPlaylist arrays
├── App.js
├── README.md
└── package.json
