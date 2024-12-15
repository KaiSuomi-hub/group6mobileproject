import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { API_URL } from '../config';
import { useTheme } from '../context/ThemeContext';
import createStyles from '../styles/LoginStyles';

const TextField = ({ label, value, onChangeText, secureTextEntry, styles }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        placeholder={`Enter ${label}`}
        placeholderTextColor={styles.label.color}
      />
    </View>
  );
};

const LoginButton = ({ onPress, styles }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
  );
};

const LoginAsGuestButton = ({ onPress, styles }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Login as Guest</Text>
    </TouchableOpacity>
  );
};

const LoginScreen = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const styles = createStyles(theme);

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

        navigation.navigate('Home', { username });
      } else {
        setErr(data.error || 'Login failed!');
      }
    } catch (error) {
      setErr('Failed to connect to the server.');
    }
  };

  const handleLoginAsGuest = () => {
    navigation.navigate('Home', { username: 'Guest' });
  };

  return (
    <View style={styles.appContainer}>
      <TextField label="Username" value={username} onChangeText={setUsername} secureTextEntry={false} styles={styles} />
      <TextField label="Password" value={password} onChangeText={setPassword} secureTextEntry={true} styles={styles} />
      
      {err ? <Text style={{ color: 'red', marginBottom: 10 }}>{err}</Text> : null}

      <LoginButton onPress={handleLogin} styles={styles} />
      <LoginAsGuestButton onPress={handleLoginAsGuest} styles={styles} />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={{ color: theme.primaryColor, textAlign: 'center' }}>Don't have an account? Register here!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;