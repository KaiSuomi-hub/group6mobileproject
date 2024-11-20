import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { textFieldStyles, buttonStyles, appStyles } from '../styles/LoginStyles';
import { useNavigation } from '@react-navigation/native';
import { API_URL } from '../config';

const TextField = ({ label, value, onChangeText, secureTextEntry }) => {
  return (
    <View style={textFieldStyles.container}>
      <Text style={textFieldStyles.label}>{label}</Text>
      <TextInput
        style={textFieldStyles.input}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        placeholder={`Enter ${label}`}
      />
    </View>
  );
};

const LoginButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={buttonStyles.button} onPress={onPress}>
      <Text style={buttonStyles.text}>Login</Text>
    </TouchableOpacity>
  );
};

const LoginAsGuestButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={buttonStyles.button} onPress={onPress}>
      <Text style={buttonStyles.text}>Login as Guest</Text>
    </TouchableOpacity>
  );
};

const LoginScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      setErr('Username and password are required!');
      return;
    }

    const url = `${API_URL}/api/login`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setErr('');
        navigation.navigate('Home');
      } else {
        setErr(data.error || 'Login failed!');
      }
    } catch (error) {
      setErr('Failed to connect to the server.');
    }
  };

  const handleLoginAsGuest = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={appStyles.container}>
      <TextField label="Username" value={username} onChangeText={setUsername} secureTextEntry={false} />
      <TextField label="Password" value={password} onChangeText={setPassword} secureTextEntry={true} />
      
      {err ? <Text style={{ color: 'red', marginBottom: 10 }}>{err}</Text> : null}

      <LoginButton onPress={handleLogin} />
      <LoginAsGuestButton onPress={handleLoginAsGuest} />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={{ color: '#007AFF', textAlign: 'center' }}>Don't have an account? Register here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;