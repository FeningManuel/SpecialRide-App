import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const PaymentMethodScreen = () => {
  const navigation = useNavigation();
  const [selectedMethod, setSelectedMethod] = useState('Cash'); // default selected method

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={width * 0.06} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Payment Methods</Text>
      <View style={styles.methodContainer}>
        <PaymentMethodItem 
          method="MTN" 
          isSelected={selectedMethod === 'MTN'} 
          onPress={() => setSelectedMethod('MTN')}
        />
        <PaymentMethodItem 
          method="VodaFone" 
          isSelected={selectedMethod === 'VodaFone'} 
          onPress={() => setSelectedMethod('VodaFone')}
        />
        <PaymentMethodItem 
          method="Airtel" 
          isSelected={selectedMethod === 'Airtel'} 
          onPress={() => setSelectedMethod('Airtel')}
        />
        <PaymentMethodItem 
          method="Credit Card" 
          isSelected={selectedMethod === 'Credit Card'} 
          onPress={() => setSelectedMethod('Credit Card')}
        />
        <PaymentMethodItem 
          method="Cash" 
          isSelected={selectedMethod === 'Cash'} 
          onPress={() => setSelectedMethod('Cash')}
        />
      </View>
    </View>
  );
};

const PaymentMethodItem = ({ method, isSelected, onPress }) => (
  <TouchableOpacity style={styles.methodItem} onPress={onPress}>
    <Text style={styles.methodText}>{method}</Text>
    <Ionicons
      name={isSelected ? 'checkmark-circle' : 'ellipse-outline'}
      size={width * 0.06}
      color={isSelected ? 'red' : 'gray'}
    />
  </TouchableOpacity>
);

export default PaymentMethodScreen;

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
  methodContainer: {
    width: '100%',
  },
  methodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: height * 0.02,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  methodText: {
    fontSize: width * 0.04,
    flex: 1,
  },
});