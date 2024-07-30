import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

const PersonalInfoScreen = () => {
  const navigation = useNavigation();
  const [isEditing, setIsEditing] = useState({
    name: false,
    phone: false,
    email: false,
  });
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    phone: '',
    email: '',
  });

  useEffect(() => {
    // Load personal info from AsyncStorage when the component mounts
    const loadPersonalInfo = async () => {
      try {
        const name = await AsyncStorage.getItem('name');
        const phone = await AsyncStorage.getItem('phone');
        const email = await AsyncStorage.getItem('email');
        if (name !== null && phone !== null && email !== null) {
          setPersonalInfo({ name, phone, email });
        } else {
          // Set default values if there is no stored data
          setPersonalInfo({ name: 'John Dada', phone: '+2330500000000', email: 'johndada@gmail.com' });
        }
      } catch (error) {
        console.error('Failed to load personal info', error);
      }
    };

    loadPersonalInfo();
  }, []);

  const handleEditToggle = async (field) => {
    if (isEditing[field]) {
      try {
        await AsyncStorage.setItem(field, personalInfo[field]);
      } catch (error) {
        console.error('Failed to save personal info', error);
        Alert.alert('Error', 'Failed to save changes');
      }
    }
    setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (field, value) => {
    setPersonalInfo((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={width * 0.06} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Personal Info</Text>
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/DriverImage.png')} // Replace with the user's profile image URI
          style={styles.profileImage}
        />
        <View style={styles.infoContainer}>
          {['name', 'phone', 'email'].map((field, index) => (
            <View key={index} style={styles.infoRow}>
              <Ionicons
                name={
                  field === 'name'
                    ? 'person-outline'
                    : field === 'phone'
                    ? 'call-outline'
                    : 'mail-outline'
                }
                size={width * 0.06}
                color="black"
              />
              {isEditing[field] ? (
                <TextInput
                  value={personalInfo[field]}
                  onChangeText={(value) => handleChange(field, value)}
                  style={styles.infoText}
                />
              ) : (
                <Text style={styles.infoText}>{personalInfo[field]}</Text>
              )}
              <TouchableOpacity style={styles.editButton} onPress={() => handleEditToggle(field)}>
                <Text style={styles.editText}>{isEditing[field] ? 'Save' : 'Edit'}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default PersonalInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: width * 0.05,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: height * 0.02,
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: height * 0.05,
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: (width * 0.2) / 2,
    marginBottom: height * 0.05,
  },
  infoContainer: {
    width: '100%',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: height * 0.02,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  infoText: {
    fontSize: width * 0.04,
    marginLeft: width * 0.04,
    flex: 1,
  },
  editButton: {
    marginLeft: 'auto',
  },
  editText: {
    color: 'red',
    fontSize: width * 0.04,
  },
});