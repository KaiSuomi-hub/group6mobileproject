import { StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const createStyles = () => {
    const { theme } = useTheme();
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.backgroundColor,
            paddingHorizontal: 16,
        },
        appBarContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.primaryColor,
            paddingVertical: 8,
            paddingHorizontal: 4,
            width: '100%',
            height: 48,
        },
        appBarHeadline: {
            fontSize: 22,
            lineHeight: 28,
            fontWeight: '400',
            fontFamily: 'Roboto',
            color: theme.textColor,
            textAlign: 'center',
            flex: 1,
        },
        appBarIconButton: {
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: theme.primaryColor,
            justifyContent: 'center',
            alignItems: 'center',
        },
        appBarIcon: {
            width: 24,
            height: 24,
        },
        textFieldContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: theme.inputBackgroundColor,
            paddingVertical: 4,
            paddingHorizontal: 16,
            width: '100%',
            height: 70,
        },
        textFieldContentContainer: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            paddingVertical: 8,
        },
        textFieldLabel: {
            fontFamily: 'Roboto',
            fontWeight: '400',
            fontSize: 12,
            letterSpacing: 0.4,
            color: theme.labelColor,
            marginBottom: 4,
        },
        textFieldInput: {
            fontFamily: 'Roboto',
            fontWeight: '400',
            fontSize: 16,
            letterSpacing: 0.5,
            color: theme.inputTextColor,
            lineHeight: 24,
        },
        textFieldIconContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: theme.iconBackgroundColor,
        },
        textFieldIcon: {
            width: 24,
            height: 24,
        },
        joinButton: {
            backgroundColor: theme.primaryColor,
            borderRadius: 100,
            width: '100%',
            height: 66,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
            paddingHorizontal: 24,
            flexDirection: 'row',
        },
        joinButtonText: {
            color: theme.buttonTextColor,
            fontSize: 14,
            fontWeight: '500',
            lineHeight: 20,
            letterSpacing: 0.1,
            textAlign: 'center',
        },
        createButton: {
            backgroundColor: theme.primaryColor,
            paddingVertical: 14.5,
            paddingHorizontal: 24,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 66,
        },
        createButtonText: {
            color: theme.buttonTextColor,
            fontSize: 14,
            fontWeight: '500',
            letterSpacing: 0.1,
            textAlign: 'center',
            lineHeight: 20,
        },
        space: {
            height: 32,
        },
        spaceSmall: {
            height: 16,
        }
    });
};

export default createStyles;