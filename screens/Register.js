import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { API_URL } from '../config';
import { useTheme } from '../context/ThemeContext';
import createStyles from '../styles/RegisterStyles';

const TextField = ({ label, value, onChangeText, secureTextEntry, errorMessage, styles }) => {
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
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
    </View>
  );
};

const RegisterScreen = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleRegister = async () => {
    let valid = true;

    setUsernameError('');
    setPasswordError('');
    setConfirmPasswordError('');

    if (!username) {
      setUsernameError('Username is required');
      valid = false;
    }
    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      valid = false;
    }

    if (!valid) {
      return;
    }

    const url = `${API_URL}/api/register`;

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
        Alert.alert('Success', 'Registration successful!');
        navigation.navigate('Login');
      } else {
        Alert.alert('Error', data.error || 'Registration failed!');
      }
    } catch (error) {
      Alert.alert('Error', 'Unable to connect to the server!');
    }
  };

  return (
    <View style={styles.appContainer}>
      <TextField
        label="Username"
        value={username}
        onChangeText={setUsername}
        errorMessage={usernameError}
        styles={styles}
      />
      <TextField
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        errorMessage={passwordError}
        styles={styles}
      />
      <TextField
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
        errorMessage={confirmPasswordError}
        styles={styles}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;