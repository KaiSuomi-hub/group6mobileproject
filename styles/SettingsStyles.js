import { StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const createStyles = () => {
    const { theme } = useTheme();
    return StyleSheet.create({
        screenContainer: {
            flex: 1,
            backgroundColor: theme.backgroundColor,
        },
        contentContainer: {
            flexGrow: 1,
            justifyContent: 'flex-start',
            padding: 16,
        },
        headerContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 8,
            backgroundColor: theme.primaryColor,
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
            fontFamily: 'Roboto',
            fontWeight: '400',
            lineHeight: 28,
            textAlign: 'center',
            color: theme.textColor,
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
            color: theme.textColor,
        },
        settingSwitch: {
            width: 44,
            height: 28,
            borderRadius: 100,
        },
        logoutButton: {
            borderRadius: 100,
            width: '100%',
            height: 66,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 32,
            backgroundColor: theme.primaryColor,
        },
        logoutText: {
            color: theme.buttonTextColor,
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Roboto',
            letterSpacing: 0.1,
            textAlign: 'center',
            lineHeight: 20,
        },
        customizeButton: {
            borderRadius: 100,
            width: '100%',
            height: 66,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 32,
            backgroundColor: theme.primaryColor,
        },
        input: {
            height: 40,
            borderColor: theme.primaryColor,
            borderWidth: 1,
            marginVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 5,
            color: theme.inputTextColor,
            width: '90%', // Adjusted width to fit within modal
        },
        button: {
            borderRadius: 100,
            width: '90%', // Adjusted width to fit within modal
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
            backgroundColor: theme.primaryColor,
        },
        buttonText: {
            color: theme.buttonTextColor,
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Roboto',
            letterSpacing: 0.1,
            textAlign: 'center',
            lineHeight: 20,
        },
        modalView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 20,
            backgroundColor: 'white',
            borderRadius: 20,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
        },
        modalContentContainer: {
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        modalItem: {
            width: '100%',
            alignItems: 'center',
        },
    });
};

export default createStyles;