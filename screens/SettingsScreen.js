import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Switch, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);

  const showInfoAlert = (title, message) => {
    Alert.alert(title, message, [{ text: 'OK' }], { cancelable: true });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Notifications</Text>
        <Switch
          onValueChange={toggleNotifications}
          value={notificationsEnabled}
        />
      </View>

      <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('PrivacyPolicyScreen')}>
        <Text style={styles.settingText}>Privacy Policy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('TermsOfServiceScreen')}>
        <Text style={styles.settingText}>Terms of Service</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('HelpSupportScreen')}>
        <Text style={styles.settingText}>Help & Support</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('LanguageScreen')}>
        <Text style={styles.settingText}>Language</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('AboutScreen')}>
        <Text style={styles.settingText}>About</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('ContactUsScreen')}>
        <Text style={styles.settingText}>Contact Us</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingItem} onPress={() => showInfoAlert('App Version', 'Version 1.0.0')}>
        <Text style={styles.settingText}>App Version</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  settingItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 16,
  },
});