import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles'; // Import the styles

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <View style={styles.profilePictureContainer}>
        <Image
          source={{uri: 'https://picsum.photos/100'}}
          style={styles.profilePicture}
        />
      </View>

      {/* Profile Information */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>Waqas Khan</Text>
        <Text style={styles.email}>waqas@bircube.com</Text>
        <Text style={styles.bio}>
          Software Engineer at Bircube. Passionate about mobile app development
          and exploring new technologies.
        </Text>
      </View>

      {/* Edit Button */}
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => console.log('Edit Profile')}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
