// App.js
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';
import {podcastData} from '../../utils/data';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={{uri: 'https://picsum.photos/250/150'}}
            style={styles.profilePic}
          />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>All podcasts</Text>
            <TouchableOpacity>
              <Text style={styles.viewMore}>View more</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {podcastData.allPodcasts.map(podcast => (
              <View key={podcast.id} style={styles.podcastCard}>
                <Image
                  source={{uri: podcast.image}}
                  style={styles.podcastImage}
                />
                <View style={styles.categoryTag}>
                  <Text style={styles.categoryText}>{podcast.category}</Text>
                </View>
                <Text style={styles.podcastTitle}>{podcast.title}</Text>
                <View style={styles.podcastDetails}>
                  <View style={styles.iconTextRow}>
                    <Icon name="headset-outline" size={16} color="#6B7280" />
                    <Text style={styles.detailText}>{podcast.episodes}</Text>
                  </View>
                  <View style={styles.iconTextRow}>
                    <Icon name="time-outline" size={16} color="#6B7280" />
                    <Text style={styles.detailText}>{podcast.duration}</Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My Playlist</Text>
            <TouchableOpacity>
              <Text style={styles.viewMore}>View more</Text>
            </TouchableOpacity>
          </View>
          {podcastData.myPlaylist.map(podcast => (
            <View key={podcast.id} style={styles.playlistItem}>
              <Image
                source={{uri: podcast.thumbnail}}
                style={styles.playlistThumbnail}
              />
              <View style={styles.playlistItemInfo}>
                <Text style={styles.playlistItemTitle}>{podcast.title}</Text>
                <View style={styles.playlistItemDetails}>
                  <Icon name="headset-outline" size={16} color="#6B7280" />
                  <Text style={styles.detailText}>{podcast.episodes}</Text>
                  <Icon name="time-outline" size={16} color="#6B7280" />
                  <Text style={styles.detailText}>{podcast.duration}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.playButton}>
                <Icon name="play" size={24} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
