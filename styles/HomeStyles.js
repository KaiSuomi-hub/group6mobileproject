import { StyleSheet } from 'react-native';

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
  },
  appBarHeadline: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1d1b20',
    textAlign: 'center',
    marginVertical: 8,
  },
  textFieldInput: {
    height: 55,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 18,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  errorStyle: {
    color: '#ff0000',
    textAlign: 'center',
    marginBottom: 8,
    fontSize: 12,
  },
  joinButton: {
    backgroundColor: '#65558F',
    borderRadius: 100,
    width: '100%',
    height: 66,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  joinButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  createButton: {
    backgroundColor: '#65558F',
    borderRadius: 100,
    width: '100%',
    height: 66,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  createButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  space: {
    height: 32,
  },
  spaceSmall: {
    height: 16,
  },
  roomListContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  roomItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginBottom: 5,
  },
  roomText: {
    fontSize: 16,
    color: '#333',
  },
  joinButton2: {
    backgroundColor: '#65558F',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  joinButtonText2: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default homeStyles;
