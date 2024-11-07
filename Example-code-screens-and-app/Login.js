import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { textFieldStyles, buttonStyles, appBarStyles, appStyles } from '../styles/LoginStyles';
import { useNavigation } from '@react-navigation/native';

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
                    accessibilityLabel={label} // Added accessibility label
                />
                <View style={textFieldStyles.trailingIconContainer}>
                    <Image 
                        source={{ uri: 'https://placeholder.pics/svg/24x24' }} 
                        style={textFieldStyles.icon} 
                        accessibilityLabel="Icon" // Added accessibility label
                    />
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

const TopAppBarComponent = () => {
    return (
        <View style={appBarStyles.container}>
            <Text style={appBarStyles.title}>Login</Text>
            <View style={appBarStyles.iconContainer}>
                <Image
                    source={{ uri: 'https://placeholder.pics/svg/24x24' }} 
                    style={appBarStyles.icon}
                    accessibilityLabel="Menu Icon" // Added accessibility label
                />
            </View>
        </View>
    );
};

const App = () => {
    return (
        <View style={appStyles.container}>
            <TopAppBarComponent />
            <View style={appStyles.formContainer}>
                <TextFieldComponent label="Username" placeholder="Testi" secureTextEntry={false} />
                <TextFieldComponent label="Password" placeholder="********" secureTextEntry={true} />
                <ButtonComponent title="Login" onPress={() => console.log('Login pressed')} />
                <ButtonComponent title="Login as a guest" onPress={() => console.log('Login as a guest pressed')} />
                <ButtonComponent title="Register" onPress={() => console.log('Register pressed')} />
            </View>
        </View>
    );
};


export default App;
