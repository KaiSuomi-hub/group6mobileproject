import { StyleSheet } from 'react-native';

const chatStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 4,
        backgroundColor: '#fef7ff',
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
        color: '#1d1b20',
    },
    messagesContainer: {
        flex: 1,
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
        backgroundColor: '#625b71',
        alignSelf: 'flex-start',
    },
    sentMessage: {
        backgroundColor: '#ece6f0',
        alignSelf: 'flex-end',
    },
    receivedMessageText: {
        color: '#ffffff',
        fontSize: 16,
        lineHeight: 24,
    },
    sentMessageText: {
        color: '#49454f',
        fontSize: 16,
        lineHeight: 24,
    },
    input: {
        height: 56,
        borderRadius: 28,
        backgroundColor: '#ece6f0',
        paddingHorizontal: 16,
        margin: 10,
        fontSize: 16,
        color: '#49454f',
    },
});

export default chatStyles;
