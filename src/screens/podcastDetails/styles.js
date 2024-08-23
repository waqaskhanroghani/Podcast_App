import {StyleSheet} from 'react-native';
import colors from '../../config/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#A64D79',
  },
  backButton: {
    padding: 8,
  },
  infoButton: {
    padding: 8,
  },
  podcastInfo: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#A64D79',
  },
  podcastLogo: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  podcastName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 16,
  },
  podcastDescription: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginTop: 8,
  },
  subscribeButton: {
    backgroundColor: colors.primaryColor,
    width: 210,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },

  subscribeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  podcastStats: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    marginLeft: 8,
    fontSize: 12,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 16,
  },
  episodeList: {
    paddingHorizontal: 16,
  },
  episodeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  activeEpisode: {
    backgroundColor: '#E5E7EB',
  },
  episodeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  episodeImage: {
    width: 40,
    height: 40,
    borderRadius: 4,
    marginRight: 12,
  },
  episodeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  episodeAuthor: {
    fontSize: 14,
    color: '#6B7280',
  },
  playButton: {
    backgroundColor: colors.primaryColor,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  miniPlayer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#5B7083',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  miniPlayerImage: {
    width: 40,
    height: 40,
    borderRadius: 4,
    marginRight: 12,
  },
  miniPlayerInfo: {
    flex: 1,
  },
  miniPlayerTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  miniPlayerArtist: {
    color: '#f0f0f0',
    fontSize: 12,
  },
  miniPlayerButton: {
    padding: 8,
  },
});
