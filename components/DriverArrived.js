import { StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Image, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const DriverArrived = () => {
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          <View style={styles.row}>
            <View>
              <Text style={styles.heading}>Driver has arrived</Text>
              <Text style={styles.text}> {carDetails.plateNumber}</Text>
            </View>
           
          </View>

          <View style={styles.row}>
            <View style={styles.driverInfo}>
              <Image source={driverDetails.image} style={styles.driverImage} />
              <View style={styles.driverDetails}>
                <Text style={styles.heading}>{driverDetails.name}</Text>
                <View style={styles.rating}>
                  <Ionicons name="star" size={20} color="gold" />
                  <Text style={styles.text}>{driverDetails.rating}</Text>
                </View>
              </View>
            </View>
            <View style={styles.actions}>
              <TouchableOpacity style={styles.action}>
                <Ionicons name="call" size={30} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.action}>
                <Ionicons name="chatbubble" size={30} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Third Border: Pick-up Location */}
          <View style={styles.row}>
            <View style={styles.inputContainer}>
              <Ionicons name="location" size={20} color="black" />
              <TextInput
                style={styles.input}
                placeholder="Pick-up Location"
              />
            </View>
          </View>

          {/* Fourth Border: Delivery Address */}
          <View style={styles.row}>
            <View style={styles.inputContainer}>
            <Ionicons name="location" size={20} color="black" />
              <TextInput
                style={styles.input}
                placeholder="Delivery Address"
              />
              
            </View>
          </View>

          {/* Fifth Border: Add Stop */}
          <View style={styles.row}>
            <TouchableOpacity style={styles.action}>
              <View style={styles.actionContainer}>
                <Text style={styles.text}>Share location with a friend</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Last Border: Cancel Ride */}
          <View style={styles.row}>
            <TouchableOpacity style={styles.action}>
              <View style={styles.actionContainer}>
                <Ionicons name="close-circle" size={30} color="red" />
                <Text style={styles.text}>Cancel Ride</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DriverArrived;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  section: {
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'space-between',
    borderBottomWidth: 0.2,
    borderBottomColor: '#gray',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
  },
  driverInfo: {
    flexDirection: 'row',
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
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actions: {
    flexDirection: 'row',
  },
  action: {
    marginLeft: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    
    
  },
  input: {
    fontSize: 20,
    marginLeft: 8,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});