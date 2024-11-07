
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import registerStyles from '../styles/RegisterStyles';
import { useNavigation } from '@react-navigation/native';

const TopAppBar = () => {
  return (
    <View style={registerStyles.appBarContainer}>
      <Image
        style={registerStyles.appBarIcon}
        source={{ uri: 'https://placeholder.pics/svg/24x24' }}
      />
      <Text style={registerStyles.appBarTitle}>Register</Text>
      <Image
        style={registerStyles.appBarIcon}
        source={{ uri: 'https://placeholder.pics/svg/24x24' }}
      />
    </View>
  );
};

const TextField = ({ label, secureTextEntry }) => {
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
              defaultValue="********"
            />
          </View>
        </View>
        <View style={registerStyles.trailingIcon}>
          <View style={registerStyles.iconContainer}>
            <View style={registerStyles.stateLayerIcon}>
              <Image 
                source={{ uri: 'https://placeholder.pics/svg/24x24' }} 
                style={registerStyles.icon}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const RegisterButton = () => {
  return (
    <TouchableOpacity style={registerStyles.registerButton}>
      <Text style={registerStyles.registerButtonText}>Register</Text>
    </TouchableOpacity>
  );
};

const RegisterScreen = () => {
  return (
    <View style={registerStyles.screenContainer}>
      <TopAppBar />
      <TextField label="Username" secureTextEntry={false} />
      <TextField label="Password" secureTextEntry={true} />
      <TextField label="Confirm Password" secureTextEntry={true} />
      <RegisterButton />
    </View>
  );
};


export default RegisterScreen;


