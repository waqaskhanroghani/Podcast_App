import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import {podcastData} from '../../utils/data';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter podcasts based on the search query
  const filteredPodcasts = podcastData.allPodcasts.filter(podcast =>
    podcast.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const renderSearchResult = ({item}) => (
    <TouchableOpacity style={styles.searchResultItem}>
      <Image source={{uri: item.image}} style={styles.searchResultThumbnail} />
      <View style={styles.searchResultInfo}>
        <Text style={styles.searchResultTitle}>{item.title}</Text>
        <Text style={styles.searchResultDetails}>
          {item.episodes} | {item.duration} | {item.category}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.searchHeader}>
        <Text style={styles.searchTitle}>Search Podcasts</Text>
      </View>
      <View style={styles.searchInputContainer}>
        <Icon
          name="search"
          size={20}
          color="#6B7280"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search podcasts"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      {/* Render filtered podcast search result */}
      <FlatList
        data={filteredPodcasts}
        renderItem={renderSearchResult}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.searchResultsContainer}
        ListEmptyComponent={<Text>No podcasts found</Text>}
      />
    </SafeAreaView>
  );
}
