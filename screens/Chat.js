import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import createStyles from '../styles/ChatStyles';
import { useTheme } from '../context/ThemeContext';
import { evaluate } from 'mathjs';

const ChatScreen = () => {
    // State to manage the input message and message history
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const { theme } = useTheme();
    const styles = createStyles(theme);

    // Function to handle the "/roll" command
    const handleRollCommand = () => {
        const roll = Math.floor(Math.random() * 6) + 1;
        const rollMessage = {
            text: `You rolled a ${roll}`,
            sentByUser: false, // Assuming system messages are not sent by the user
        };
        setMessages(prevMessages => [...prevMessages, rollMessage]);
    };

    const handleRandomCommand = (x, y) => {
        const min = Math.min(x, y);
        const max = Math.max(x, y);
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        const randomMessage = {
            text: `You rolled a random number between ${min} and ${max}: ${random}`,
            sentByUser: false, // Assuming system messages are not sent by the user
        };
        setMessages(prevMessages => [...prevMessages, randomMessage]);
    };

    const handleCalcCommand = (expression) => {
        try {
            const result = evaluate(expression);
            const calcMessage = {
                text: `Result: ${result}`,
                sentByUser: false, // Assuming system messages are not sent by the user
            };
            setMessages(prevMessages => [...prevMessages, calcMessage]);
        } catch (error) {
            const errorMessage = {
                text: `Error: Invalid expression`,
                sentByUser: false, // Assuming system messages are not sent by the user
            };
            setMessages(prevMessages => [...prevMessages, errorMessage]);
        }
    };

    // Function to handle sending a message
    const handleSendMessage = () => {
        if (message.trim()) {
            const randomCommandMatch = message.trim().match(/^\/random (\d+) (\d+)$/);
            const calcCommandMatch = message.trim().match(/^\/calc (.+)$/);
            if (message.trim() === '/roll') {
                handleRollCommand();
            } else if (randomCommandMatch) {
                const x = parseInt(randomCommandMatch[1], 10);
                const y = parseInt(randomCommandMatch[2], 10);
                handleRandomCommand(x, y);
            } else if (calcCommandMatch) {
                const expression = calcCommandMatch[1];
                handleCalcCommand(expression);
            } else {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: message, sentByUser: true }, // Add the message sent by the user
                ]);
            }
            setMessage(''); // Clear the input after sending
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Chat</Text>
            </View>

            {/* Messages Container */}
            <ScrollView contentContainerStyle={styles.messagesContainer}>
                {messages.map((msg, index) => (
                    <View 
                        key={index} 
                        style={[styles.messageBubble, msg.sentByUser ? styles.sentMessage : styles.receivedMessage]}>
                        <Text style={msg.sentByUser ? styles.sentMessageText : styles.receivedMessageText}>
                            {msg.text}
                        </Text>
                    </View>
                ))}
            </ScrollView>

            {/* Input Area */}
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder="Type a message..."
                    placeholderTextColor="#49454f"
                    value={message}
                    onChangeText={text => setMessage(text)}
                />
                <TouchableOpacity 
                    style={styles.sendButton} 
                    onPress={handleSendMessage} // Handle sending the message
                >
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ChatScreen;