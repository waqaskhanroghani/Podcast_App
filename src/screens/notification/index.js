import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

const notificationData = [
  {
    id: '1',
    type: 'new_episode',
    title: 'New Episode: Tech Talk Weekly',
    message: 'A new episode "AI Revolution" is now available.',
    time: '2h ago',
  },
  {
    id: '2',
    type: 'recommendation',
    title: 'Recommended: History Uncovered',
    message: 'Based on your interests, you might like this podcast.',
    time: '1d ago',
  },
  {
    id: '3',
    type: 'update',
    title: 'App Update',
    message: 'A new episode "AI Revolution" is now available.',
  },
];

export default function Notification() {
  const renderNotificationItem = ({item}) => (
    <TouchableOpacity style={styles.notificationItem}>
      <View style={styles.notificationIcon}>
        <Icon
          name={
            item.type === 'new_episode'
              ? 'headset'
              : item.type === 'recommendation'
              ? 'star'
              : 'information-circle'
          }
          size={24}
          color="#007AFF"
        />
      </View>
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationMessage}>{item.message}</Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>
      <FlatList
        data={notificationData}
        renderItem={renderNotificationItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.notificationList}
      />
    </SafeAreaView>
  );
}
