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
          <View style={styles.title}>
            <View>
              <Text style={styles.heading}>Driver has arrived</Text>
              <Text style={styles.text}> {carDetails.plateNumber}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.driverInfo}>
              <Image source={driverDetails.image} style={styles.driverImage} />
              <View style={styles.driverDetails}>
                <Text style={styles.names}>{driverDetails.name}</Text>
                <View style={styles.rating}>
                  <Ionicons name="star" size={20} color="gold" />
                  <Text style={styles.text}>{driverDetails.rating}</Text>
                </View>
              </View>
               <View style={styles.actions}>
              <TouchableOpacity style={styles.call}>
                <Ionicons name="call-outline" size={30} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.chat}>
                <Ionicons name="chatbubble-outline" size={30} />
              </TouchableOpacity>
            </View>
            </View>
           
          </View>

          <View style={styles.row}>
            <View style={styles.pickup}>
              <Ionicons name="location-outline" size={20} color="black" />
              <TextInput
                style={styles.input}
                placeholder="Pick-up Location"
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.destination}>
              <Ionicons name="location-outline" size={20} color="black" />
              <TextInput
                style={styles.input}
                placeholder="Destination"
              />
            </View>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.share}>
              <View style={styles.sharecontainer}>
              <Ionicons name="share-outline" size={20} color="black" />
                <Text style={styles.sharetext}>Share location with a friend</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.cancel}>
              <View style={styles.cancelContainer}>
                <Ionicons name="close-circle-outline" size={30} color="red" />
                <Text style={styles.canceltext}>Cancel Ride</Text>
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
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  section: {
    marginBottom: 8,
  },
  title: {
    alignItems: "center",
    padding: 10,
    margin: 10,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  text: {
    fontSize: 16,
    textAlign: "center",
  },
  names: {
     fontSize: 16,
     fontWeight: 'bold'
  },
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  driverImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  driverDetails: {
    marginLeft: 16,
    fontSize: 20,
  },

  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actions: {
    flexDirection: 'row',
    paddingLeft: 140,
    
  },
  chat: {
    paddingRight: 50
  },
  call: {
    paddingRight: 20
  },
  pickup: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#d9d9d9",
    borderBottomWidth: 1,
    borderBottomColor: "#d9d9d9",
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 30,
    margin: 10
  },
  destination: {
      flexDirection: "row",
      borderBottomWidth: 1,
      borderBottomColor: "#d9d9d9",
      paddingBottom: 10,
      margin: 10,
    
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
  },
  share: {
    padding: 10,
    margin: 10,
alignItems: "center"

  },
  sharecontainer: {
flexDirection: 'row',
paddingLeft: 10,
  },
  sharetext: {
    paddingLeft: 10,
    fontSize: 16,
  },
  
  cancelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  cancel: {
    alignItems: "center"
  },
  canceltext: {
    fontSize: 16,
    paddingLeft: 10,
  },
});