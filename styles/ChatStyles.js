import { StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const createStyles = (theme) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.backgroundColor,
        },
        header: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 8,
            paddingHorizontal: 4,
            backgroundColor: theme.primaryColor,
        },
        backButton: {
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
        },
        settingsButton: {
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
        },
        icon: {
            width: 24,
            height: 24,
        },
        title: {
            fontSize: 22,
            fontWeight: '400',
            color: theme.textColor,
        },
        messagesContainer: {
            flexGrow: 1,
            justifyContent: 'flex-end',
            padding: 10,
        },
        messageBubble: {
            maxWidth: '75%',
            borderRadius: 20,
            padding: 16,
            marginVertical: 5,
        },
        receivedMessage: {
            backgroundColor: theme.receivedMessageBackgroundColor,
            alignSelf: 'flex-start',
        },
        sentMessage: {
            backgroundColor: theme.sentMessageBackgroundColor,
            alignSelf: 'flex-end',
        },
        receivedMessageText: {
            color: theme.receivedMessageTextColor,
            fontSize: 16,
            lineHeight: 24,
        },
        sentMessageText: {
            color: theme.sentMessageTextColor,
            fontSize: 16,
            lineHeight: 24,
        },
        inputContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
        },
        input: {
            flex: 1,
            height: 56,
            borderRadius: 28,
            backgroundColor: theme.inputBackgroundColor,
            paddingHorizontal: 16,
            margin: 10,
            fontSize: 16,
            color: theme.inputTextColor,
        },
        sendButton: {
            backgroundColor: theme.primaryColor,
            borderRadius: 20,
            paddingVertical: 10,
            paddingHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center',
        },
        sendButtonText: {
            color: theme.buttonTextColor,
            fontSize: 16,
            fontWeight: '500',
        },
        receivedMessageText: {
            color: '#fff',  // White text for better contrast on dark background
            fontSize: 16,
          },
          sentMessageText: {
            color: '#333',  // Dark text for sent messages
            fontSize: 16,
          },
          sentMessageContainer: {
            alignSelf: 'flex-end', // Align sent messages to the right
            backgroundColor: theme.sentMessageBackgroundColor || '#e1ffc7',
        },
          receivedMessageContainer: {
            alignSelf: 'flex-start', // Align received messages to the left
            backgroundColor: theme.receivedMessageBackgroundColor || '#3b5998',
        },
        userIdText: {
            fontSize: 12,
            color: theme.textColorSecondary || '#999', // Lighter color for user ID
            marginTop: 4,
            textAlign: 'right', // Align user ID to the right of the message
        },
    });
};

export default createStyles;