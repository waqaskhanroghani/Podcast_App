import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import {podcastData} from '../../utils/data';
import Routes from '../../navigation/Routes';
import {useNavigation} from '@react-navigation/native';
import {useAudio} from '../../context/AudioContext';

const PodcastDetails = () => {
  const navigation = useNavigation();
  const {isPlaying, currentTrack, togglePlayback} = useAudio();

  const renderEpisode = ({item, index}) => (
    <View
      style={[
        styles.episodeItem,
        index === podcastData.allPodcasts.length - 1 && styles.activeEpisode,
      ]}>
      <View style={styles.episodeInfo}>
        <Image source={{uri: item.image}} style={styles.episodeImage} />
        <View>
          <Text style={styles.episodeName}>{item.title}</Text>
          <Text style={styles.episodeAuthor}>
            {item.category} • {item.duration}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.playButton}
        onPress={() => navigation.navigate(Routes.EPISODEPLAYER)}>
        <Icon
          name={index === podcastData.allPodcasts.length - 1 ? 'pause' : 'play'}
          size={24}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );

  const renderMiniPlayer = () => {
    if (!currentTrack) return null;

    return (
      <TouchableOpacity
        style={styles.miniPlayer}
        onPress={() => navigation.navigate(Routes.EPISODEPLAYER)}>
        <Image
          // source={{uri: currentTrack.image}}
          source={{uri: 'https://picsum.photos/275/125'}}
          style={styles.miniPlayerImage}
        />
        <View style={styles.miniPlayerInfo}>
          <Text style={styles.miniPlayerTitle}>{currentTrack.title}</Text>
        </View>
        <TouchableOpacity
          style={styles.miniPlayerButton}
          onPress={togglePlayback}>
          <Icon name={isPlaying ? 'pause' : 'play'} size={24} color="#fff" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.infoButton}
          onPress={() => navigation.navigate(Routes.PODCASTINFORMATION)}>
          <Icon name="information-circle-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.podcastInfo}>
        <Image
          source={{uri: podcastData.allPodcasts[0].image}}
          style={styles.podcastLogo}
        />
        <Text style={styles.podcastName}>Podcast name</Text>
        <Text style={styles.podcastDescription}>
          A podcast to know better your greens
        </Text>
        <TouchableOpacity style={styles.subscribeButton}>
          <Text style={styles.subscribeButtonText}>Subscribe</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.podcastStats}>
        <View style={styles.statItem}>
          <Icon name="thumbs-up-outline" size={20} color="#000" />
          <Text style={styles.statText}>Available for your tier</Text>
        </View>
        <View style={styles.statItem}>
          <Icon name="headset-outline" size={20} color="#000" />
          <Text style={styles.statText}>20 Episodes</Text>
        </View>
        <View style={styles.statItem}>
          <Icon name="time-outline" size={20} color="#000" />
          <Text style={styles.statText}>1h 30 min</Text>
        </View>
      </View>
      <Text style={styles.sectionTitle}>Episodes</Text>
      <FlatList
        data={podcastData.allPodcasts}
        renderItem={renderEpisode}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.episodeList}
      />
      {renderMiniPlayer()}
    </SafeAreaView>
  );
};

export default PodcastDetails;
