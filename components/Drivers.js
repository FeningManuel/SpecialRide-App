import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const drivers = [
  {
    id: '1',
    name: 'John Doe',
    rating: 4.5,
    car: 'Toyota Vitz',
    price: '₵25/hr',
    image: require('../assets/DriverImage.png'),
  },
  {
    id: '2',
    name: 'Jane Smith',
    rating: 4.7,
    price: '₵30/hr',
    car: 'Toyota Vitz',
    image: require('../assets/DriverImage.png'),
  },
  {
    id: '3',
    name: 'Jane Smith',
    rating: 4.7,
    car: 'Toyota Vitz',
    price: '₵30/hr',
    image: require('../assets/DriverImage.png'),
  },
  {
    id: '4',
    name: 'Jane Smith',
    rating: 4.7,
    car: 'Toyota Vitz',
    price: '₵30/hr',
    image: require('../assets/DriverImage.png'),
  },
 
];

const Drivers = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);

  const handleAccept = (id) => {
    navigation.navigate('ConfirmationScreen');
  };
  const handleDecline = (id) => {
    navigation.navigate('TruckScreen');
  };

  const renderItem = ({ item }) => (
  <View key={item.id} style={[tw`flex-row justify-evenly p-4 mb-4 bg-gray-100 rounded-lg`, styles.driverContainer]}>
      <Image source={item.image} style={styles.driverImage} />
     <View style={tw`flex-row justify-between`}>
       <View>
        <Text style={tw`text-xl pl-5 font-bold mb-2`}>{item.name}</Text>
        <Text style={tw`text-lg pl-7 mr-5`}>Car: {item.car}</Text>
        <View style={tw`flex-row ml-5 items-center`}>
          <Ionicons name="star" size={20} color="gold" />
          <Text style={tw`text-lg ml-1`}>{item.rating}</Text>
        </View>
       </View>
     <View>
        <Text style={tw`text-lg pl-7`}>Price: {item.price}</Text>
        <View style={tw`flex-row mt-4`}>
          <TouchableOpacity 
            style={[styles.button, tw`bg-red-500`]} 
            onPress={() => handleAccept(item.id)}
          >
            <Text style={styles.buttonText}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, tw`bg-gray-500 ml-2`]} 
            onPress={() => handleDecline(item.id)}
          >
            <Text style={styles.buttonText}>Decline</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={tw`flex-1 p-4`}>
      <Text style={tw`text-2xl font-bold mb-4`}>
        {selected ? `Drivers for ${selected.title}` : 'Select a driver'}
      </Text>
      <FlatList 
        data={drivers}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};
export default Drivers;
const styles = StyleSheet.create({
  driverImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  driverContainer: {
    borderColor: 'white',
    borderWidth: 1,
  },
});


