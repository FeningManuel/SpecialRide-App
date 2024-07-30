import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Truck = [
  {
    id: '1',
    name: 'Justice Sefa',
    rating: 4.5,
    car: 'Truck',
    price: '₵25/hr',
    image: require('../assets/DriverImage.png'),
  },
  {
    id: '2',
    name: 'Emmanuel Osei',
    rating: 4.7,
    car: 'Truck',
    price: '₵30/hr',
    image: require('../assets/DriverImage.png'),
  },
  {
    id: '3',
    name: 'Alfred Mensah',
    rating: 4.7,
    car: 'Truck',
    price: '₵30/hr',
    image: require('../assets/DriverImage.png'),
  },
  {
    id: '4',
    name: 'Issac Frimpong',
    rating: 4.7,
    car: 'Truck',
    price: '₵30/hr',
    image: require('../assets/DriverImage.png'),
  },
];

const ChooseTruck = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);

  const handleAccept = (id) => {
    navigation.navigate('ConfirmationScreen');
  };

  const handleDecline = (id) => {
    navigation.navigate('TruckScreen');
  };

  const renderItem = ({ item }) => (
    <View key={item.id} style={styles.driverContainer}>
      <Image source={item.image} style={styles.driverImage} />
      <View style={styles.driverDetails}>
        <Text style={styles.driverName}>{item.name}</Text>
        <View style={styles.carAndPriceContainer}>
          <Text style={styles.driverCar}>Truck: {item.car}</Text>
          <Text style={styles.driverPrice}>Price: {item.price}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={20} color="gold" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.acceptButton]} 
            onPress={() => handleAccept(item.id)}
          >
            <Text style={styles.buttonText}>Acce</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, styles.declineButton]} 
            onPress={() => handleDecline(item.id)}
          >
            <Text style={styles.buttonText}>Decline</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>
        {selected ? `Truck for ${selected.title}` : 'Select a Truck'}
      </Text>
      <FlatList 
        data={Truck}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default ChooseTruck
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: "center",
  },
  driverContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  driverImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  driverDetails: {
    flex: 1,
    marginLeft: 16,
  },
  driverName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  carAndPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  driverCar: {
    fontSize: 16,
  },
  driverPrice: {
    fontSize: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    fontSize: 16,
    marginLeft: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
  },
  acceptButton: {
    backgroundColor: '#f25c5c',
  },
  declineButton: {
    backgroundColor: '#d9d9d9',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});