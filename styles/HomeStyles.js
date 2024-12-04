import { StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const createStyles = (theme) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.backgroundColor,
            paddingHorizontal: 16,
        },
        appBarHeadline: {
            fontSize: 24,
            fontWeight: 'bold',
            color: theme.textColor,
            textAlign: 'center',
            marginVertical: 8,
        },
        textFieldInput: {
            height: 55,
            paddingLeft: 15,
            paddingRight: 15,
            fontSize: 18,
            backgroundColor: theme.inputBackgroundColor,
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
            backgroundColor: theme.primaryColor,
            borderRadius: 100,
            width: '100%',
            height: 66,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 10,
        },
        joinButtonText: {
            color: theme.buttonTextColor,
            fontSize: 16,
            fontWeight: '600',
        },
        createButton: {
            backgroundColor: theme.primaryColor,
            borderRadius: 100,
            width: '100%',
            height: 66,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 10,
        },
        createButtonText: {
            color: theme.buttonTextColor,
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
            color: theme.textColor,
        },
        joinButton2: {
            backgroundColor: theme.primaryColor,
            borderRadius: 50,
            paddingVertical: 10,
            paddingHorizontal: 16,
            justifyContent: 'center',
            alignItems: 'center',
        },
        joinButtonText2: {
            color: theme.buttonTextColor,
            fontSize: 14,
            fontWeight: '500',
        },
    });
};

export default createStyles;