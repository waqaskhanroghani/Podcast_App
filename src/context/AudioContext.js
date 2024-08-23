import React, {createContext, useContext, useState, useEffect} from 'react';
import TrackPlayer, {State} from 'react-native-track-player';

const AudioContext = createContext();

export const AudioProvider = ({children}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const setupPlayer = async () => {
      await TrackPlayer.setupPlayer();
    };

    setupPlayer();

    const updateProgress = setInterval(async () => {
      const currentPosition = await TrackPlayer.getPosition();
      const currentDuration = await TrackPlayer.getDuration();
      setPosition(currentPosition);
      setDuration(currentDuration);
    }, 1000); // Update every second

    return () => {
      clearInterval(updateProgress);
      TrackPlayer.destroy();
    };
  }, []);

  const playTrack = async track => {
    await TrackPlayer.reset();
    await TrackPlayer.add(track);
    await TrackPlayer.play();
    setIsPlaying(true);
  };

  const togglePlayback = async () => {
    const currentState = await TrackPlayer.getState();

    if (currentState === State.Playing) {
      await TrackPlayer.pause();
      setIsPlaying(false);
    } else {
      await TrackPlayer.play();
      setIsPlaying(true);
    }
  };

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        position,
        duration,
        playTrack,
        togglePlayback,
      }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
