import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  searchHeader: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  searchResultsContainer: {
    paddingHorizontal: 16,
  },
  searchResultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchResultThumbnail: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  searchResultInfo: {
    marginLeft: 12,
    flex: 1,
  },
  searchResultTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchResultAuthor: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
});
