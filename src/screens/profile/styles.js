import {StyleSheet} from 'react-native';
import Colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.backgroundColor,
    alignItems: 'center',
  },
  profilePictureContainer: {
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.borderColor,
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.textColorPrimary,
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: Colors.textColorSecondary,
    marginBottom: 10,
  },
  bio: {
    fontSize: 14,
    textAlign: 'center',
    color: Colors.textColorSecondary,
  },
  editButton: {
    backgroundColor: Colors.primaryColor,
    padding: 10,
    borderRadius: 5,
  },
  editButtonText: {
    color: Colors.buttonTextColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
