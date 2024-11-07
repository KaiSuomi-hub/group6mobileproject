import React, { useState, useLayoutEffect } from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import homeStyles from './styles/HomeStyles';


const BLUE = "#007AFF";
const BLACK = "#000000";
const LENGTH = 6;

export default function Home() {
    const navigation = useNavigation();
    const [roomID, setRoomId] = useState('');
    const [bg, setBg] = useState('#000'); // for changing the border color of text input
    const [err, setErr] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: '#fff',
                height: 75,
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerLeft: () => (
                <Icon
                    style={{ marginLeft: 15 }}
                    name="menufold"
                    size={28}
                    color="#000"
                    onPress={() => navigation.openDrawer()}
                />
            ),
        })
    })

    // navigation.openDrawer();
    const onFocus = () => {
        setBg(BLUE);
    }

    const onBlur = () => {
        setBg(BLACK);
    }

    const generateID = () => {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < LENGTH; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const handleSubmit = () => {
        if (roomID !== '') {
            navigation.navigate('Chat', { roomID: roomID });
        }
        else {
            setErr("Room ID cannot be empty!")
            setBg('#ff0000');
        }
    }

    const handleCreateSubmit = () => {
        navigation.navigate('Chat', { roomID: roomID });
    }
    const JoinRoomButton = ({ onPress }) => {
        return (
            <TouchableOpacity style={homeStyles.joinButton} onPress={onPress}>
                <Text style={homeStyles.joinButtonText}>Join Room</Text>
            </TouchableOpacity>
        );
    };

    const CreateRoomButton = ({ onPress }) => {
        return (
            <TouchableOpacity style={homeStyles.createButton} onPress={onPress}>
                <Text style={homeStyles.createButtonText}>Create Room</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={{ alignSelf: 'center', fontSize: 24, margin: 8, fontWeight: 'bold' }}>P2P WEBRTC</Text>

                <Text style={styles.errorStyle}>{err}</Text>
                <TextInput
                    placeholder="Room ID"
                    selectionColor="#DDD"
                    onChangeText={(text) => setRoomId(text)}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    style={[styles.textInput, { borderColor: bg }]}
                />
            </View>
            <View style={homeStyles.space} />
            <JoinRoomButton onPress={handleSubmit} />
            <View style={homeStyles.spaceSmall} />
            <CreateRoomButton onPress={handleCreateSubmit} />
                <Text style={styles.textStyle}>Don't have a Room ID? Create One :)</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8FF',
    },
    textInput: {
        height: 55,
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 18,
        backgroundColor: '#fff',
        borderWidth: .5,
    },
    inputContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        margin: 10,
    },
    buttonContainer: {
        padding: 15,
    },
    textStyle: {
        alignSelf: 'center',
        color: '#D3D3D3',
        marginTop: 5,
    },
    errorStyle: {
        alignSelf: 'center',
        color: '#ff0000',
        marginBottom: 5,
        fontSize: 12,
    }
});