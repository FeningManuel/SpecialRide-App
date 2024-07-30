import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from 'react-native-elements';

const ForgotPasswordScreen = ({ navigation }) => {
  const [identifier, setIdentifier] = useState('');

  const handlePasswordReset = () => {
    // Implement password reset logic here
    console.log('Password reset link sent to:', identifier);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text style={styles.title}>Forgot Password</Text>
        </View>
        <View style={{ paddingTop: 57, marginBottom: 12 }}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder='Enter your phone number or email'
              placeholderTextColor={colors.black}
              keyboardType='default'
              value={identifier}
              onChangeText={setIdentifier}
              style={styles.identifierInput}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.resetButton}
          onPress={handlePasswordReset}
        >
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 12,
    color: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 75,
  },
  inputContainer: {
    width: '100%',
    height: 48,
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 22,
  },
  identifierInput: {
    width: '100%',
  },
  resetButton: {
    backgroundColor: '#f25c5c',
    borderRadius: 18,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
