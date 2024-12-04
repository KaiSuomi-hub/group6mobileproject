import { StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const createStyles = () => {
    const { theme } = useTheme();
    return StyleSheet.create({
        container: {
            width: '100%',
            height: 65,
            backgroundColor: theme.inputBackgroundColor,
            padding: 4,
            paddingLeft: 16,
            justifyContent: 'center',
            marginVertical: 8,
        },
        labelTextContainer: {
            flexDirection: 'row',
        },
        label: {
            fontFamily: 'Roboto',
            fontWeight: '400',
            fontSize: 12,
            letterSpacing: 0.4,
            lineHeight: 16,
            color: theme.labelColor,
        },
        inputContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
        },
        input: {
            width: '100%',
            height: 40,
            fontFamily: 'Roboto',
            fontWeight: '400',
            fontSize: 16,
            letterSpacing: 0.5,
            lineHeight: 24,
            color: theme.inputTextColor,
            paddingVertical: 4,
            paddingLeft: 10,
        },
        trailingIconContainer: {
            width: 48,
            height: 48,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            backgroundColor: theme.iconBackgroundColor,
        },
        icon: {
            width: 24,
            height: 24,
        },
        button: {
            backgroundColor: theme.primaryColor,
            borderRadius: 100,
            paddingVertical: 10,
            paddingHorizontal: 24,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: 66,
            marginVertical: 8,
        },
        buttonText: {
            color: theme.buttonTextColor,
            fontSize: 14,
            fontWeight: '500',
            lineHeight: 20,
            letterSpacing: 0.1,
            textAlign: 'center',
            fontFamily: 'Roboto',
        },
        appContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.backgroundColor,
            padding: 16,
        },
        formContainer: {
            width: '100%',
            alignItems: 'center',
        }
    });
};

export default createStyles;