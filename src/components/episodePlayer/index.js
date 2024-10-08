import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useAudio} from '../../context/AudioContext';
import styles from './styles';

export default function EpisodePlayer({navigation}) {
  const {
    isPlaying,
    isPaused,
    position,
    duration,
    playTrack,
    pausePlayback,
    resumePlayback,
    stopPlayback,
    skipForward,
    skipBackward,
  } = useAudio();

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const onPlayPress = async () => {
    if (!isPlaying && !isPaused) {
      await playTrack({
        id: 'local-track',
        url: require('../../Assets/audio/nix.m4a'),
        title: 'Episode Name Goes here',
        artist: 'XYZ',
        artwork: 'https://picsum.photos/300/200',
      });
    } else if (isPlaying) {
      pausePlayback();
    } else if (isPaused) {
      resumePlayback();
    }
  };

  const onStopPress = () => {
    stopPlayback();
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
        <TouchableOpacity onPress={() => skipBackward(20)}>
          <Icon name="replay-30" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.playButton} onPress={onPlayPress}>
          <Icon
            name={isPlaying ? 'pause' : 'play-arrow'}
            size={40}
            color="#fff"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => skipForward(20)}>
          <Icon name="forward-30" size={30} color="#000" />
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={onStopPress}>
          <Icon name="stop" size={30} color="#000" />
        </TouchableOpacity> */}
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
