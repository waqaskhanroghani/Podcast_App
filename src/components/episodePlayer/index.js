import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useAudio} from '../../context/AudioContext';
import styles from './styles';

export default function EpisodePlayer({navigation}) {
  const {isPlaying, position, duration, playTrack, togglePlayback} = useAudio();

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const onPlayPress = async () => {
    if (!isPlaying) {
      await playTrack({
        id: 'local-track',
        url: require('../../Assets/audio/nix.m4a'),
        title: 'Episode Name Goes here',
        artist: 'XYZ',
        artwork: 'https://picsum.photos/300/200',
      });
    } else {
      togglePlayback();
    }
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
        <TouchableOpacity style={styles.playButton} onPress={onPlayPress}>
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
