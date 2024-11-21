import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import settingStyles from '../styles/SettingsStyles';

const SettingsScreen = () => {
  return (
    <View style={settingStyles.screenContainer}>
      <SettingsHeader />
      <View style={settingStyles.separator} />
      <SettingItem label="Notifications" />
      <View style={settingStyles.separator} />
      <SettingItem label="joku juttu" />
      <View style={settingStyles.separator} />
      <LogoutButton />
    </View>
  );
};

const SettingsHeader = () => {
  return (
    <View style={settingStyles.headerContainer}>   
      <Text style={settingStyles.title}>Settings</Text>
    </View>
  );
};

const SettingItem = ({ label }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={settingStyles.settingContainer}>
      <Text style={settingStyles.settingText}>{label}</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#65558fff' }}
        thumbColor={isEnabled ? '#fff' : '#fff'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={settingStyles.settingSwitch}
      />
    </View>
  );
};

const LogoutButton = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      // Näytä vahvistusilmoitus ennen uloskirjautumista
      Alert.alert(
        "Logout",
        "Are you sure you want to log out?",
        [
          { text: "Cancel", style: "cancel" },
          { 
            text: "Logout", 
            onPress: async () => {
              // Poistetaan kaikki tallennetut tiedot AsyncStoragesta
              await AsyncStorage.clear();

              // Palataan kirjautumissivulle
              navigation.reset({
                index: 0,
                routes: [{ name: "Login" }],
              });
            } 
          }
        ]
      );
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <TouchableOpacity style={settingStyles.logoutButton} onPress={handleLogout}>
      <Text style={settingStyles.logoutText}>Logout</Text>
    </TouchableOpacity>
  );
};

export default SettingsScreen;
