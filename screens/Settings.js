import React, { useState } from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity, Alert, ScrollView, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import createStyles from '../styles/SettingsStyles';
import { useTheme } from '../context/ThemeContext';

const SettingsScreen = () => {
  const { theme, changeTheme } = useTheme();
  const styles = createStyles();
  const [customColors, setCustomColors] = useState({
    primaryColor: '',
    backgroundColor: '',
    textColor: '',
    inputBackgroundColor: '',
    inputTextColor: '',
    labelColor: '',
    buttonTextColor: '',
    iconBackgroundColor: '',
    receivedMessageBackgroundColor: '',
    sentMessageBackgroundColor: '',
    receivedMessageTextColor: '',
    sentMessageTextColor: '',
  });

  const [modalVisible, setModalVisible] = useState(false);

  const handleCustomColorChange = (colorType, colorValue) => {
    if (/^#[0-9A-F]{6}$/i.test(colorValue)) {
      changeTheme({ [colorType]: colorValue });
    } else {
      Alert.alert('Invalid Color', 'Please enter a valid hex color code.');
    }
  };

  return (
    <ScrollView style={styles.screenContainer} contentContainerStyle={[styles.contentContainer, { paddingBottom: 20 }]}>
      <SettingsHeader />
      <View style={styles.separator} />
      <SettingItem label="Notifications" />
      <View style={styles.separator} />
      <SettingItem label="joku juttu" />
      <View style={styles.separator} />
      <View style={styles.separator} />
      <Text style={styles.settingText}>Change Theme Colors:</Text>
      <TouchableOpacity style={styles.customizeButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Customize Colors</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <ScrollView contentContainerStyle={styles.modalContentContainer}>
            {Object.keys(customColors).map((colorType) => (
              <View key={colorType} style={styles.modalItem}>
                <TextInput
                  style={styles.input}
                  placeholder={`Enter ${colorType} hex code`}
                  placeholderTextColor="#49454f"
                  value={customColors[colorType]}
                  onChangeText={(value) => setCustomColors({ ...customColors, [colorType]: value })}
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleCustomColorChange(colorType, customColors[colorType])}
                >
                  <Text style={styles.buttonText}>Apply {colorType}</Text>
                </TouchableOpacity>
              </View>
            ))}
            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
      <LogoutButton />
    </ScrollView>
  );
};

const SettingsHeader = () => {
  const styles = createStyles();
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Settings</Text>
    </View>
  );
};

const SettingItem = ({ label }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const styles = createStyles();

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.settingContainer}>
      <Text style={styles.settingText}>{label}</Text>
      <Switch
        trackColor={{ false: '#767577', true: styles.primaryColor }}
        thumbColor={isEnabled ? '#fff' : '#fff'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.settingSwitch}
      />
    </View>
  );
};

const LogoutButton = () => {
  const navigation = useNavigation();
  const styles = createStyles();

  const handleLogout = async () => {
    try {
      Alert.alert(
        "Logout",
        "Are you sure you want to log out?",
        [
          { text: "Cancel", style: "cancel" },
          { 
            text: "Logout", 
            onPress: async () => {
              await AsyncStorage.clear();
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
    <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
      <Text style={styles.logoutText}>Logout</Text>
    </TouchableOpacity>
  );
};

export default SettingsScreen;