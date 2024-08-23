import {StyleSheet} from 'react-native';
import Colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
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
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 20,
    alignItems: 'center',
  },
  editButtonText: {
    color: Colors.buttonTextColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.secondaryColor,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 15,
    width: '80%',
    justifyContent: 'center',
  },
  optionButtonText: {
    color: Colors.buttonTextColor,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: '80%',
    justifyContent: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    color: Colors.buttonTextColor,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default styles;
