import React, {createContext, useContext, useState, useEffect} from 'react';
import TrackPlayer, {useProgress} from 'react-native-track-player';

const AudioContext = createContext();

export const AudioProvider = ({children}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const {position, duration} = useProgress();

  useEffect(() => {
    TrackPlayer.setupPlayer();
    return () => TrackPlayer.destroy();
  }, []);

  const playTrack = async track => {
    await TrackPlayer.reset();
    await TrackPlayer.add(track);
    setCurrentTrack(track);
    await TrackPlayer.play();
    setIsPlaying(true);
  };

  const togglePlayback = async () => {
    const currentState = await TrackPlayer.getState();
    if (currentState === TrackPlayer.STATE_PLAYING) {
      await TrackPlayer.pause();
      setIsPlaying(false);
    } else {
      await TrackPlayer.play();
      setIsPlaying(true);
    }
  };

  const stopPlayback = async () => {
    await TrackPlayer.stop();
    await TrackPlayer.seekTo(0);
    setIsPlaying(false);
  };

  const skipForward = async seconds => {
    const newPosition = Math.min(position + seconds, duration);
    await TrackPlayer.seekTo(newPosition);
  };

  const skipBackward = async seconds => {
    const newPosition = Math.max(position - seconds, 0);
    await TrackPlayer.seekTo(newPosition);
  };

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        currentTrack,
        position,
        duration,
        playTrack,
        togglePlayback,
        stopPlayback, // Added stopPlayback method
        skipForward,
        skipBackward,
      }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
