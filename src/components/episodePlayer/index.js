import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TrackPlayer, {State} from 'react-native-track-player';
import styles from './styles';

export default function EpisodePlayer({navigation}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const setupPlayer = async () => {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add({
        id: 'local-track',
        url: require('../../Assets/audio/nix.m4a'),
        title: 'Episode Name Goes here',
        artist: 'XYZ',
        artwork: 'https://picsum.photos/300/200',
      });

      // Fetch and set the duration after the player is ready
      const trackDuration = await TrackPlayer.getDuration();
      setDuration(trackDuration);

      // Set up an interval to update the position
      const updateProgress = setInterval(async () => {
        const currentPosition = await TrackPlayer.getPosition();
        setPosition(currentPosition);
      }, 1000); // Update every second

      return () => {
        clearInterval(updateProgress);
        TrackPlayer.destroy();
      };
    };

    setupPlayer();
  }, []);

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

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={30} color="#000" />
      </TouchableOpacity>

      <Image
        source={{uri: 'https://picsum.photos/300/200'}}
        style={styles.image}
      />
      <Text style={styles.episodeName}>Episode Name Goes here</Text>
      <Text style={styles.authorName}>By XYZ</Text>

      <View style={styles.controls}>
        <TouchableOpacity>
          <Icon name="replay-30" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.playButton} onPress={togglePlayback}>
          <Icon
            name={isPlaying ? 'pause' : 'play-arrow'}
            size={40}
            color="#fff"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="forward-30" size={30} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.progressBar}>
        <View
          style={[styles.progress, {width: `${(position / duration) * 100}%`}]}
        />
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{formatTime(position)}</Text>
        <Text style={styles.timeText}>{formatTime(duration)}</Text>
      </View>
    </View>
  );
}
