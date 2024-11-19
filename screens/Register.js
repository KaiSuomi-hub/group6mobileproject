import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import registerStyles from '../styles/RegisterStyles';
import { useNavigation } from '@react-navigation/native';
import { API_URL } from '../config'; // Tuodaan backendin osoite

const TextField = ({ label, value, onChangeText, secureTextEntry }) => {
  return (
    <View style={registerStyles.textFieldContainer}>
      <View style={registerStyles.textFieldStateLayer}>
        <View style={registerStyles.textFieldContent}>
          <View style={registerStyles.labelTextContainer}>
            <Text style={registerStyles.labelText}>{label}</Text>
          </View>
          <View style={registerStyles.inputTextContainer}>
            <TextInput
              style={registerStyles.inputText}
              secureTextEntry={secureTextEntry}
              value={value}
              onChangeText={onChangeText} // Capture text input
              placeholder={`Enter ${label}`} // Set placeholder dynamically
            />
          </View>
        </View>
        <View style={registerStyles.trailingIcon}>
          <View style={registerStyles.iconContainer}>
            <View style={registerStyles.stateLayerIcon}></View>
          </View>
        </View>
      </View>
    </View>
  );
};

const RegisterButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={registerStyles.registerButton} onPress={onPress}>
      <Text style={registerStyles.registerButtonText}>Register</Text>
    </TouchableOpacity>
  );
};

const RegisterScreen = () => {
  const navigation = useNavigation();

  // State variables for form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (!username || !password || !confirmPassword) {
        Alert.alert('Error', 'All fields are required!');
        return;
    }

    if (password !== confirmPassword) {
        Alert.alert('Error', 'Passwords do not match!');
        return;
    }

    const url = `${API_URL}/api/register`;

    try {
        console.log('Sending data to server:', { username, password });

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });

        const text = await response.text();
        console.log('Response text:', text);  // Tulostetaan palvelimen vastaus

        // Tarkistetaan, onko palvelin palauttanut HTML-sivua tai muuta kuin JSONia
        if (text.startsWith('<!DOCTYPE html>')) {
            console.error('Server returned an HTML response, not JSON!');
            Alert.alert('Error', 'Server returned an error page instead of JSON!');
            return;
        }

        const data = JSON.parse(text);  // Parsitaan JSON, jos se on oikein

        if (response.ok) {
            Alert.alert('Success', data.message || 'Registration successful!');
            navigation.navigate('Login');
        } else {
            Alert.alert('Error', data.error || 'Registration failed!');
        }
    } catch (error) {
        console.error('Error:', error);
        Alert.alert('Error', 'Unable to connect to the server!');
    }
};


  return (
    <View style={registerStyles.screenContainer}>
      <TextField label="Username" value={username} onChangeText={setUsername} secureTextEntry={false} />
      <TextField label="Password" value={password} onChangeText={setPassword} secureTextEntry={true} />
      <TextField label="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry={true} />
      <RegisterButton onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;