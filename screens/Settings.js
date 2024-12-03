import React, { useState } from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity, Alert, ScrollView, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import createStyles from '../styles/SettingsStyles';
import { useTheme } from '../context/ThemeContext';

const defaultTheme = {
  primaryColor: '#65558F',
  backgroundColor: '#FFFFFF',
  textColor: '#1D1B20',
  inputBackgroundColor: '#e6e0e9',
  inputTextColor: '#1d1b20',
  labelColor: '#49454f',
  buttonTextColor: '#FFFFFF',
  iconBackgroundColor: '#FFFFFF',
  receivedMessageBackgroundColor: '#625b71',
  sentMessageBackgroundColor: '#ece6f0',
  receivedMessageTextColor: '#FFFFFF',
  sentMessageTextColor: '#49454f',
};

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

  const applyTheme = (themeColors) => {
    changeTheme(themeColors);
  };

  return (
    <ScrollView style={styles.screenContainer} contentContainerStyle={[styles.contentContainer, { paddingBottom: 20 }]}>
      <SettingsHeader />
      <View style={styles.separator} />
      <SettingItem label="Notifications" />
      <View style={styles.separator} />
      <View style={styles.separator} />
      <Text style={styles.settingText}>Change Theme Colors:</Text>
      <TouchableOpacity style={[styles.themeButton, { backgroundColor: '#65558F' }]} onPress={() => applyTheme(defaultTheme)}>
        <Text style={styles.buttonText}>Default Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.themeButton, { backgroundColor: '#1E90FF' }]} onPress={() => applyTheme({
        primaryColor: '#1E90FF',
        backgroundColor: '#F0F8FF',
        textColor: '#000080',
        inputBackgroundColor: '#E6E6FA',
        inputTextColor: '#000080',
        labelColor: '#4682B4',
        buttonTextColor: '#FFFFFF',
        iconBackgroundColor: '#B0C4DE',
        receivedMessageBackgroundColor: '#ADD8E6',
        sentMessageBackgroundColor: '#B0E0E6',
        receivedMessageTextColor: '#000080',
        sentMessageTextColor: '#000080',
      })}>
        <Text style={styles.buttonText}>Blue Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.themeButton, { backgroundColor: '#FF6347' }]} onPress={() => applyTheme({
        primaryColor: '#FF6347',
        backgroundColor: '#FFF5EE',
        textColor: '#8B0000',
        inputBackgroundColor: '#FFE4E1',
        inputTextColor: '#8B0000',
        labelColor: '#CD5C5C',
        buttonTextColor: '#FFFFFF',
        iconBackgroundColor: '#FA8072',
        receivedMessageBackgroundColor: '#FFA07A',
        sentMessageBackgroundColor: '#FF7F50',
        receivedMessageTextColor: '#8B0000',
        sentMessageTextColor: '#8B0000',
      })}>
        <Text style={styles.buttonText}>Red Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.themeButton, { backgroundColor: '#32CD32' }]} onPress={() => applyTheme({
        primaryColor: '#32CD32',
        backgroundColor: '#F5FFFA',
        textColor: '#006400',
        inputBackgroundColor: '#F0FFF0',
        inputTextColor: '#006400',
        labelColor: '#228B22',
        buttonTextColor: '#FFFFFF',
        iconBackgroundColor: '#98FB98',
        receivedMessageBackgroundColor: '#90EE90',
        sentMessageBackgroundColor: '#8FBC8F',
        receivedMessageTextColor: '#006400',
        sentMessageTextColor: '#006400',
      })}>
        <Text style={styles.buttonText}>Green Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.customizeButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Custom Theme</Text>
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