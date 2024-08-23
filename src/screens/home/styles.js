import {StyleSheet} from 'react-native';
import Colors from '../../config/colors';
import colors from '../../config/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.textColorPrimary,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.textColorPrimary,
  },
  viewMore: {
    color: '#00478E',
    fontSize: 16,
  },
  podcastCard: {
    width: 180,
    marginLeft: 16,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: Colors.backgroundColor,
  },
  podcastImage: {
    width: 275,
    height: 125,
  },
  categoryTag: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  categoryText: {
    color: Colors.buttonTextColor,
    fontSize: 12,
    fontWeight: 'bold',
  },
  podcastTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    marginHorizontal: 8,
    color: Colors.textColorPrimary,
  },
  podcastDetails: {
    flexDirection: 'column',
    marginTop: 4,
    marginBottom: 8,
    marginHorizontal: 8,
  },
  iconTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  detailText: {
    fontSize: 12,
    color: Colors.textColorSecondary,
    marginLeft: 4,
    marginRight: 8,
    fontWeight: '600',
  },
  playlistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  playlistThumbnail: {
    width: 140,
    height: 105,
    borderRadius: 8,
  },
  playlistItemInfo: {
    flex: 1,
    marginLeft: 12,
  },
  playlistItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.textColorPrimary,
  },
  playlistItemDetails: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 4,
  },
  iconTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    marginLeft: 4,
    color: '#6B7280',
    fontSize: 14,
  },
  playButtonOverlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -20}, {translateY: -20}],
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primaryColor, // Semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    borderTopWidth: 1,
    borderTopColor: Colors.borderColor,
    backgroundColor: Colors.backgroundColor,
  },
});
