import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles'; // Import the styles
import Icon from 'react-native-vector-icons/Ionicons'; // Import icons
import Routes from '../../navigation/Routes';

const Profile = ({navigation}) => {
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

      {/* Edit Profile Button */}
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => console.log('Edit Profile')}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Settings Button */}
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => console.log('Settings')}>
        <Icon
          name="settings-outline"
          size={20}
          color={styles.optionButtonText.color}
        />
        <Text style={styles.optionButtonText}>Settings</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate(Routes.LOGIN)}>
        <Icon
          name="log-out-outline"
          size={20}
          color={styles.logoutButtonText.color}
        />
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
