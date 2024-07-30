import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const SavedPlacesScreen = ({navigation}) => {
  const [homeAddress, setHomeAddress] = useState('');
  const [workAddress, setWorkAddress] = useState('');
  const [isHomeEditing, setIsHomeEditing] = useState(false);
  const [isWorkEditing, setIsWorkEditing] = useState(false);

  const saveHomeAddress = () => {
    setIsHomeEditing(false);
  };

  const saveWorkAddress = () => {
    setIsWorkEditing(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={width * 0.06} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Saved Places</Text>

      <View style={styles.optionItem}>
        <Ionicons name="home-outline" size={width * 0.06} color="black" />
        <Text style={styles.optionText}>Add home address</Text>
        <TouchableOpacity onPress={() => setIsHomeEditing(true)}>
          <Ionicons name="add-outline" size={width * 0.06} color="black" />
        </TouchableOpacity>
      </View>
      {isHomeEditing && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your home address"
            value={homeAddress}
            onChangeText={setHomeAddress}
          />
          <TouchableOpacity style={styles.saveButton} onPress={saveHomeAddress}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      )}
      {homeAddress !== '' && <Text style={styles.addressText}>{homeAddress}</Text>}

      <View style={styles.optionItem}>
        <Ionicons name="briefcase-outline" size={width * 0.06} color="black" />
        <Text style={styles.optionText}>Add work address</Text>
        <TouchableOpacity onPress={() => setIsWorkEditing(true)}>
          <Ionicons name="add-outline" size={width * 0.06} color="black" />
        </TouchableOpacity>
      </View>
      {isWorkEditing && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your work address"
            value={workAddress}
            onChangeText={setWorkAddress}
          />
          <TouchableOpacity style={styles.saveButton} onPress={saveWorkAddress}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      )}
      {workAddress !== '' && <Text style={styles.addressText}>{workAddress}</Text>}
    </View>
  );
};

export default SavedPlacesScreen;

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
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: height * 0.02,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    justifyContent: 'space-between',
  },
  optionText: {
    fontSize: width * 0.04,
    marginLeft: width * 0.04,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.02,
    marginBottom: height * 0.02,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: width * 0.04,
    borderRadius: 5,
    marginRight: width * 0.02,
  },
  saveButton: {
    backgroundColor: '#ff5c5c',
    paddingVertical: width * 0.04,
    paddingHorizontal: width * 0.06,
    borderRadius: 5,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  addressText: {
    fontSize: width * 0.04,
    color: 'gray',
    marginLeft: width * 0.12, // Adjust to align with the icons
    marginTop: height * 0.01,
  },
});