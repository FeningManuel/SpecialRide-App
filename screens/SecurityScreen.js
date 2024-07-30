import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const SecurityScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={width * 0.06} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Security</Text>
      <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('ChangePasswordScreen')}>
        <Text style={styles.optionText}>Change password</Text>
        <Ionicons name="chevron-forward" size={width * 0.06} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('IdentityVerificationScreen')}>
        <Text style={styles.optionText}>Identity verification</Text>
        <Ionicons name="chevron-forward" size={width * 0.06} color="black" />
      </TouchableOpacity>
    </View>
  );
};

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
  },
  optionText: {
    fontSize: width * 0.04,
    flex: 1,
  },
});

export default SecurityScreen;