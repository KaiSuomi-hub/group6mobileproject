import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import chatStyles from '../styles/ChatStyles';

const ChatScreen = () => {
    // State to manage the input message and message history
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    // Function to handle sending a message
    const handleSendMessage = () => {
        if (message.trim()) {
            setMessages(prevMessages => [
                ...prevMessages,
                { text: message, sentByUser: true }, // Add the message sent by the user
            ]);
            setMessage(''); // Clear the input after sending
        }
    };

    return (
        <SafeAreaView style={chatStyles.container}>
            {/* Header */}
            <View style={chatStyles.header}>
                <Text style={chatStyles.title}>Chat</Text>
            </View>

            {/* Messages Container */}
            <ScrollView contentContainerStyle={chatStyles.messagesContainer}>
                {messages.map((msg, index) => (
                    <View 
                        key={index} 
                        style={[chatStyles.messageBubble, msg.sentByUser ? chatStyles.sentMessage : chatStyles.receivedMessage]}>
                        <Text style={msg.sentByUser ? chatStyles.sentMessageText : chatStyles.receivedMessageText}>
                            {msg.text}
                        </Text>
                    </View>
                ))}
            </ScrollView>

            {/* Input Area */}
            <View style={chatStyles.inputContainer}>
                <TextInput 
                    style={chatStyles.input}
                    placeholder="Type a message..."
                    placeholderTextColor="#49454f"
                    value={message}
                    onChangeText={text => setMessage(text)}
                />
                <TouchableOpacity 
                    style={chatStyles.sendButton} 
                    onPress={handleSendMessage} // Handle sending the message
                >
                    {/* Wrap the string in a Text component */}
                    <Text style={chatStyles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ChatScreen;
