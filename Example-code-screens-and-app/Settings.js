import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, Image } from 'react-native';
import settingStyles from '../styles/SettingsStyles';
import { useNavigation } from '@react-navigation/native';

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
            <TouchableOpacity style={settingStyles.iconButton}>
                <Image 
                    source={{ uri: 'https://placeholder.pics/svg/24x24' }}
                    style={settingStyles.icon}
                />
            </TouchableOpacity>
            <Text style={settingStyles.title}>Settings</Text>
            <TouchableOpacity style={settingStyles.iconButton}>
                <Image 
                    source={{ uri: 'https://placeholder.pics/svg/24x24' }}
                    style={settingStyles.icon}
                />
            </TouchableOpacity>
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
  return (
    <TouchableOpacity style={settingStyles.logoutButton} onPress={() => console.log('Logged out')}>
      <Text style={settingStyles.logoutText}>Logout</Text>
    </TouchableOpacity>
  );
};



export default SettingsScreen;
