import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Button, ScrollView } from 'react-native';
import { io } from 'socket.io-client';
import { API_URL } from '../config';
import { useTheme } from '../context/ThemeContext';
import { evaluate } from 'mathjs';
import createStyles from '../styles/ChatStyles';


const ChatScreen = ({ route }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const { roomID, username } = route.params;

  useEffect(() => {
    // Initialize socket connection
    console.log('[DEBUG] Received usernaem:', username);
    socketRef.current = io(API_URL); // Replace with your actual server URL
    socketRef.current.emit('join room', roomID);

    socketRef.current.on('user id', (userID) => {
      
      console.log('[DEBUG] Received user ID:', userID);
    });

    // Listen for messages from other users in the same room
    socketRef.current.on('message', (messageData) => {
      console.log('[DEBUG] Received message:', messageData);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: messageData.text, sender: messageData.sender },
      ]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [roomID]);
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
const handleSendMessage = () => {
  console.log('mun username on: ', username);
    if (message.trim()) {
        const userId = socketRef.current.id;
        socketRef.current.emit('message', { roomID, text: message, sender: username });
        
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
            const newMessage = [{ text: message, sender: 'You', userId: userId }];
            setMessages((prevMessages) => [...prevMessages, ...newMessage]);
        }
        setMessage(''); // Clear the input after sending
    }
};


  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Room ID: {roomID}</Text>
      </View>

      {/* Messages Container */}
      <ScrollView contentContainerStyle={styles.messagesContainer}>
  {messages.map((msg, index) => (
    <View
      key={index}
      style={[
        styles.messageBubble,
        msg.sender === 'You' ? styles.sentMessageContainer : styles.receivedMessageContainer,
      ]}
    >
      <Text style={msg.sender === 'You' ? styles.sentMessageText : styles.receivedMessageText}>
        {msg.text}
      </Text>
      <Text style={styles.userIdText}>
        {msg.sender === 'You' ? 'You' : `${msg.sender}`}
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


