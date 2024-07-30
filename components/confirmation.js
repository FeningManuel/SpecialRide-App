import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const Confirmation = () => {
  const navigation = useNavigation();
  const carDetails = {
    name: 'Toyota Prius',
    plateNumber: 'ABC-1234',
    price: '₵25/hr',
    time: '2 hours',
  };

  const driverDetails = {
    name: 'John Doe',
    rating: 4.5,
    image: require('../assets/DriverImage.png'), // Replace with your driver's image
  };

  const handleDriverArrived = () => {
    // Navigate to the DriverArrived screen
    navigation.navigate('DriverArrivedScreen');
  };

  return (
    <View style={styles.container}>
      
        <View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View>
              <Text style={styles.carName}>{carDetails.name}</Text>
              <Text style={styles.carDetails}>{carDetails.plateNumber}</Text>
            </View>
            <View>
              <Text style={styles.carDetails}> {carDetails.price}</Text>
              <Text style={styles.carDetails}> {carDetails.time}</Text>
            </View>
          </View>

          <View style={styles.cardBody}>
            <View style={styles.driverInfo}>
              <Image source={driverDetails.image} style={styles.driverImage} />
              <View style={styles.driverDetails}>
                <Text style={styles.driverName}>{driverDetails.name}</Text>
                <View style={styles.driverRating}>
                  <Ionicons name="star" size={20} color="gold" />
                  <Text style={styles.driverRatingText}>{driverDetails.rating}</Text>
                </View>
              </View>
            </View>
            <View style={styles.driverActions}>
              <TouchableOpacity style={styles.driverAction}>
                <Ionicons name="call" size={30} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.driverAction}>
                <Ionicons name="chatbubble" size={30} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Third Border: Pick-up Location */}
          <View style={styles.inputContainer}>
            <Ionicons name="location" size={20} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Pick-up Location"
            />
          </View>

          {/* Fourth Border: Delivery Address */}
          <View style={styles.inputContainer}>
          <Ionicons name="location" size={20} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Delivery Address"
            />
           
          </View>

          {/* Fifth Border: Add Stop */}
          <View style={styles.addAction}>
            <TouchableOpacity>
              <Text style={styles.addActionText}>Add Stop</Text>
            </TouchableOpacity>
          </View>

          {/* Last Border: Cancel Ride */}
          
            <TouchableOpacity>
            <View style={styles.addAction}>
              <Ionicons name="close-circle" size={30} color="red" />
              <Text style={styles.addActionText}>Cancel Ride</Text>
              </View>
            </TouchableOpacity>
          
        </View>
        {/* Button to navigate to DriverArrived screen */}
        <TouchableOpacity onPress={handleDriverArrived}>
          <View style={styles.addAction}>
            <Ionicons name="arrow-forward-circle" size={30} />
            <Text style={styles.addActionText}>Driver Arrived</Text>
          </View>
        </TouchableOpacity>

      </View>
   
  </View>
)};
export default Confirmation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
 
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 20,
    borderBottomWidth: 0.2,
    
  },
  carName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  carDetails: {
    fontSize: 20,
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderBottomColor: '#gray',
  },
  driverInfo: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  driverImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  driverDetails: {
    marginLeft: 16,
  },
  driverName: {
    fontSize: 20,
    fontWeight: 'regular',
  },
  driverRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  driverRatingText: {
    fontSize: 20,
    marginLeft: 4,
  },
  driverActions: {
    flexDirection: 'row',
  },
  driverAction: {
    marginLeft: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderBottomColor: '#gray',
  },
  input: {
    fontSize: 20,
    marginLeft: 8,
    paddingTop: 10,
    paddingBottom: 10,
  },
  addAction: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderBottomColor: '#gray',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 1
  },
  addActionText: {
    flexDirection: 'row',
    marginLeft: 5,
    fontSize: 20,
    marginLeft: 10,
    textAlign: 'center'
  },
});