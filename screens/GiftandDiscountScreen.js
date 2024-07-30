import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const GiftandDiscountScreen = () => {
  const [promoCode, setPromoCode] = useState('');
  const navigation = useNavigation();

  const handlePromoCodeSubmit = () => {
    // Implement the promo code submission logic here, such as calling an API
    // Example: await applyPromoCodeAPI(promoCode);
    Alert.alert('Promo Code Applied', `Promo code ${promoCode} has been applied.`);
    setPromoCode(''); // Clear the input field after submission
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={width * 0.06} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Gifts & Discount</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Promo Code"
        value={promoCode}
        onChangeText={setPromoCode}
      />
      <TouchableOpacity style={styles.button} onPress={handlePromoCodeSubmit}>
        <Text style={styles.buttonText}>Apply Promo Code</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GiftandDiscountScreen;

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
  input: {
    height: height * 0.06,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: width * 0.04,
    marginBottom: height * 0.02,
  },
  button: {
    backgroundColor: '#ff5c5c',
    paddingVertical: height * 0.02,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: width * 0.04,
  },
});