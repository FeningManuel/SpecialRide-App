import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Ionicons } from '@expo/vector-icons';

const HistoryScreen = ({navigation}) => {
  // Sample trip history data
  const tripHistory = [
    {
      id: '1',
      pickup: '123 Liberation Rd, Accra',
      destination: '321 Labone St, Accra',
      vehicleType: 'Ride',
      timeTaken: '30 mins',
      distance: '15 km',
      price: '10 GHS'
    },
    {
      id: '2',
      pickup: '456 Independence Ave, Accra',
      destination: '456 Teshie Rd, Accra',
      vehicleType: 'Carrier',
      timeTaken: '45 mins',
      distance: '20 km',
      price: '15 GHS'
    },
    {
      id: '3',
      pickup: '789 Cantonments Rd, Accra',
      destination: '123 Madina St, Accra',
      vehicleType: 'Coach',
      timeTaken: '60 mins',
      distance: '25 km',
      price: '20 GHS'
    },
    // Add more trips as needed
  ];

  // Render each trip item
  const renderTripItem = ({ item }) => (
    <View style={styles.tripItem}>
      <Text style={styles.tripText}>Pickup: {item.pickup}</Text>
      <Text style={styles.tripText}>Destination: {item.destination}</Text>
      <Text style={styles.tripText}>Vehicle Type: {item.vehicleType}</Text>
      <Text style={styles.tripText}>Time Taken: {item.timeTaken}</Text>
      <Text style={styles.tripText}>Distance: {item.distance}</Text>
      <Text style={styles.tripText}>Price: {item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={width * 0.06} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Trip History</Text>
      <FlatList
        data={tripHistory}
        renderItem={renderTripItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: height * 0.02,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingHorizontal: 120
  },
  tripItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tripText: {
    fontSize: 16,
    marginBottom: 5,
  },
});