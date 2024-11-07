
import { StyleSheet } from 'react-native';

const registerStyles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFF',
    },
    appBarContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 8,
      paddingVertical: 4,
      backgroundColor: '#FEF7FF',
      width: 404,
      height: 48,
    },
    appBarTitle: {
      fontSize: 22,
      fontWeight: '400',
      color: '#1D1B20',
      textAlign: 'center',
      lineHeight: 28,
      flex: 1,
    },
    appBarIcon: {
      width: 24,
      height: 24,
    },
    textFieldContainer: {
      width: 339,
      height: 65,
      backgroundColor: '#e6e0e9',
      justifyContent: 'center',
      marginVertical: 10,
    },
    textFieldStateLayer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 4,
      paddingHorizontal: 16,
    },
    textFieldContent: {
      flex: 1,
      marginRight: 10,
    },
    labelTextContainer: {
      marginBottom: 5,
    },
    labelText: {
      fontFamily: 'Roboto',
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 16,
      letterSpacing: 0.4,
      color: '#49454f',
    },
    inputTextContainer: {
      marginTop: 5,
    },
    inputText: {
      fontFamily: 'Roboto',
      fontWeight: '400',
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0.5,
      color: '#1d1b20',
      textAlignVertical: 'center',
      paddingVertical: 0,
    },
    trailingIcon: {
      width: 48,
      height: 48,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconContainer: {
      borderRadius: 100,
      backgroundColor: '#fff',
      padding: 8,
    },
    stateLayerIcon: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      width: 24,
      height: 24,
    },
    registerButton: {
      backgroundColor: '#65558F',
      borderRadius: 100,
      width: 373,
      height: 66,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 20,
    },
    registerButtonText: {
      color: '#FFFFFF',
      fontSize: 14,
      fontFamily: 'Roboto',
      fontWeight: '500',
      lineHeight: 20,
      textAlign: 'center',
      letterSpacing: 0.1,
    },
  });
export default registerStyles;
