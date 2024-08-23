import React, {createContext, useContext, useState, useEffect} from 'react';
import TrackPlayer, {useProgress} from 'react-native-track-player';

const AudioContext = createContext();

export const AudioProvider = ({children}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
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
    setIsPaused(false);
  };

  const pausePlayback = async () => {
    await TrackPlayer.pause();
    setIsPlaying(false);
    setIsPaused(true);
  };

  const resumePlayback = async () => {
    await TrackPlayer.play();
    setIsPlaying(true);
    setIsPaused(false);
  };

  const stopPlayback = async () => {
    await TrackPlayer.stop();
    await TrackPlayer.seekTo(0);
    setIsPlaying(false);
    setIsPaused(false);
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
        isPaused,
        currentTrack,
        position,
        duration,
        playTrack,
        pausePlayback,
        resumePlayback,
        stopPlayback,
        skipForward,
        skipBackward,
      }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
