import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { textFieldStyles, buttonStyles, appStyles } from '../styles/LoginStyles';

const TextFieldComponent = ({ label, placeholder, secureTextEntry }) => {
    return (
        <View style={textFieldStyles.container}>
            <View style={textFieldStyles.labelTextContainer}>
                <Text style={textFieldStyles.label}>{label}</Text>
            </View>
            <View style={textFieldStyles.inputContainer}>
                <TextInput 
                    style={textFieldStyles.input} 
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    placeholderTextColor='#1d1b20ff'
                    accessibilityLabel={label}
                />
                <View style={textFieldStyles.trailingIconContainer}>
                </View>
            </View>
        </View>
    );
};

const ButtonComponent = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={buttonStyles.button} onPress={onPress} accessibilityLabel={title}>
            <Text style={buttonStyles.text}>{title}</Text>
        </TouchableOpacity>
    );
};



const LoginScreen = () => {
    const navigation = useNavigation(); // Use navigation hook

    return (
        <View style={appStyles.container}>
            <View style={appStyles.formContainer}>
                <TextFieldComponent label="Username" placeholder="Testi" secureTextEntry={false} />
                <TextFieldComponent label="Password" placeholder="********" secureTextEntry={true} />
                <ButtonComponent title="Login" onPress={() => { navigation.navigate('Home'); console.log('Login pressed'); }} />
                <ButtonComponent title="Login as a guest" onPress={() => { navigation.navigate('Home'); console.log('Login as a guest pressed'); }} />
                <ButtonComponent title="Register" onPress={() => { navigation.navigate('Register'); console.log('Register pressed'); }} />
            </View>
        </View>
    );
};

export default LoginScreen;
