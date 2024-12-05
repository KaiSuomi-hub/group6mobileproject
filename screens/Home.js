import React, { useState, useLayoutEffect, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { API_URL } from '../config';
import { useTheme } from '../context/ThemeContext';
import createStyles from '../styles/HomeStyles';

const BLUE = '#007AFF';
const BLACK = '#000000';
const LENGTH = 6;

export default function Home() {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const [roomID, setRoomId] = useState('');
  const [bg, setBg] = useState(BLACK);
  const [err, setErr] = useState('');
  const [joinedRooms, setJoinedRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRooms = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/rooms`);
      const data = await response.json();
      if (response.ok) {
        setJoinedRooms(data.rooms || []);
      } else {
        console.error('Failed to fetch rooms:', data.message);
        setErr('Failed to load rooms.');
      }
    } catch (error) {
      console.error('Error fetching rooms:', error);
      setErr('Error fetching rooms.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: theme.backgroundColor, height: 75 },
      headerTintColor: theme.textColor,
      headerTitleStyle: { fontWeight: 'bold' },
      headerLeft: () => (
        <Icon
          style={{ marginLeft: 15 }}
          name="menufold"
          size={28}
          color={theme.textColor}
          onPress={() => navigation.openDrawer()}
        />
      ),
    });
  }, [navigation, theme]);

  const onFocus = () => setBg(BLUE);
  const onBlur = () => setBg(BLACK);

  const generateID = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length: LENGTH }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
  };

  const handleSubmit = () => {
    if (roomID.trim() !== '') {
      setJoinedRooms([...joinedRooms, roomID]);
      navigation.navigate('Chat', { roomID });
    } else {
      setErr('Room ID cannot be empty!');
      setBg('#ff0000');
    }
  };

  const handleCreateSubmit = async () => {
    setLoading(true);
    const newRoomID = generateID();
    setRoomId(newRoomID);

    try {
      const response = await fetch(`${API_URL}/create-room`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roomID: newRoomID }),
      });

      const data = await response.json();
      if (response.ok) {
        setJoinedRooms([...joinedRooms, newRoomID]);
        navigation.navigate('Chat', { roomID: newRoomID });
      } else {
        console.error('Failed to create room:', data.error);
        setErr(data.error || 'Error creating room');
      }
    } catch (error) {
      console.error('Error creating room:', error);
      setErr('Failed to create room due to a network issue');
    } finally {
      setLoading(false);
    }
  };

  const renderRoomItem = ({ item }) => (
    <View style={styles.roomItem}>
        <Text style={styles.roomText}>Room ID: {item.roomID}</Text>
        <TouchableOpacity
            style={styles.joinButton2}
            onPress={() => navigation.navigate('Chat', { roomID: item.roomID })}
        >
            <Text style={styles.joinButtonText2}>Join</Text>
        </TouchableOpacity>
    </View>
);

  return (
    <View style={styles.container}>
      <Text style={styles.appBarHeadline}>P2P WEBRTC</Text>
      {err ? <Text style={styles.errorStyle}>{err}</Text> : null}
      <TextInput
        placeholder="Room ID"
        selectionColor="#DDD"
        value={roomID}
        onChangeText={setRoomId}
        onFocus={onFocus}
        onBlur={onBlur}
        style={[styles.textFieldInput, { borderColor: bg }]}
      />
      <View style={styles.space} />
      <TouchableOpacity style={styles.joinButton} onPress={handleSubmit}>
        <Text style={styles.joinButtonText}>Join Room</Text>
      </TouchableOpacity>
      <View style={styles.spaceSmall} />
      <TouchableOpacity style={styles.createButton} onPress={handleCreateSubmit}>
        <Text style={styles.createButtonText}>Create Room</Text>
      </TouchableOpacity>
      <View style={styles.roomListContainer}>
        <Text style={styles.roomText}>Public Rooms:</Text>
        {loading ? (
          <ActivityIndicator size="large" color={BLUE} />
        ) : joinedRooms.length > 0 ? (
          <FlatList data={joinedRooms} renderItem={renderRoomItem} keyExtractor={(item, index) => index.toString()} />
        ) : (
          <Text>No joinable rooms. Create one.</Text>
        )}
      </View>
    </View>
  );
}