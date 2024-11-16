import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import registerStyles from '../styles/RegisterStyles';
import { useNavigation } from '@react-navigation/native';

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

  // Handle registration logic
  const handleRegister = () => {
    // Simple validation
    if (!username || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }

    // Registration success
    Alert.alert('Success', 'Registration successful!');
    navigation.navigate('Login'); // Navigate to Login screen after registration
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
