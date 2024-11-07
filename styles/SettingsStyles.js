import { StyleSheet } from 'react-native';

const settingStyles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      justifyContent: 'flex-start',
      padding: 16,
      backgroundColor: '#FFFFFF',
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 8,
      backgroundColor: '#FEF7FF',
    },
    iconButton: {
      padding: 5,
    },
    icon: {
      width: 24,
      height: 24,
    },
    title: {
      fontSize: 22,
      color: '#1D1B20',
      fontFamily: 'Roboto',
      fontWeight: '400',
      lineHeight: 28,
      textAlign: 'center',
    },
    separator: {
      borderWidth: 0.5,
      borderColor: '#D0D0D0',
    },
    settingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 16,
    },
    settingText: {
      fontFamily: 'Roboto',
      fontWeight: '400',
      fontSize: 16,
      letterSpacing: 0.5,
      lineHeight: 24,
      color: '#1D1B20',
    },
    settingSwitch: {
      width: 44,
      height: 28,
      borderRadius: 100,
    },
    logoutButton: {
      backgroundColor: '#65558F',
      borderRadius: 100,
      width: '100%',
      height: 66,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 32,
    },
    logoutText: {
      color: '#FFFFFF',
      fontSize: 14,
      fontWeight: '500',
      fontFamily: 'Roboto',
      letterSpacing: 0.1,
      textAlign: 'center',
      lineHeight: 20,
    },
  });

  export default settingStyles;