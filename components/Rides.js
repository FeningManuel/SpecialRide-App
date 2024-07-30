import React, { useState, useRef } from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, Image, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const data = [
  {
    id: "123",
    title: "Taxi",
    multiplier: 1,
    Image: require('../assets/Taxi.png')
  },
  {
    id: "456",
    title: "Pragyia",
    multiplier: 1.2,
    Image: require('../assets/Pragyia.png')
  },
  {
    id: "789",
    title: "Motor Bike",
    multiplier: 1.5,
    Image: require('../assets/SportsBike.png')
  },
];

const Rides = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const [price, setPrice] = useState('');
  const [comment, setComment] = useState('');
  const priceInputRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.safeArea}>
        <Text style={styles.title}>Get a Ride</Text>

        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Ionicons name="location-outline" size={wp('6%')} color="black" style={styles.icon} />
            <GooglePlacesAutocomplete
              placeholder='Pick-up Location'
              fetchDetails={true}
              returnKeyType={"search"}
              minLength={2}
              onPress={(data, details = null) => {
                // Handle location selection
              }}
              enablePoweredByContainer={false}
              nearbyPlacesAPI='GooglePlacesSearch'
              debounce={400}
              styles={{
                container: {
                  flex: 0,
                  borderRadius: wp('2%'),
                  paddingTop: hp('0.5%'),
                  width: '100%',
                },
                textInput: {
                  fontSize: wp('4%'),
                },
              }}
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="location-outline" size={wp('6%')} color="black" style={styles.icon} />
            <GooglePlacesAutocomplete
              placeholder='Destination'
              fetchDetails={true}
              returnKeyType={"search"}
              minLength={2}
              onPress={(data, details = null) => {
                // Handle destination selection
                navigation.navigate("RideOptionsCard");
              }}
              enablePoweredByContainer={false}
              nearbyPlacesAPI='GooglePlacesSearch'
              debounce={400}
              styles={{
                container: {
                  flex: 0,
                  borderRadius: wp('2%'),
            
                  paddingTop: hp('0.5%'),
                  width: '100%',
                },
                textInput: {
                  fontSize: wp('4%'),
                },
              }}
            />
          </View>
        </View>

        <View>
          <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => setSelected(item)}
                style={[
                  styles.rideOption,
                  selected?.id === item.id && styles.selectedRideOption
                ]}
              >
                <Image
                  source={item.Image}
                  style={styles.rideImage}
                  resizeMode="contain"
                />
                <Text style={styles.rideTitle}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={styles.priceCommentContainer}>
          <View style={styles.setPrice}>
            <TouchableOpacity style={styles.priceButton}>
              <Ionicons name="cash-outline" size={wp('6%')} color="black" />
              <Text style={styles.priceButtonText}>GHS</Text>
            </TouchableOpacity>
            <TextInput
              ref={priceInputRef}
              style={styles.priceInput}
              placeholder="Set price"
              value={price}
              onChangeText={setPrice}
              keyboardType="numeric"
            />
          </View>

          <TouchableOpacity onPress={() => setShowModal(true)} style={{ flex: 1 }}>
            <TextInput
              style={styles.commentInput}
              placeholder="Comment"
              value={comment}
              onChangeText={setComment}
              multiline
            />
          </TouchableOpacity>
        </View>

        <Modal visible={showModal} animationType="slide">
          <View style={styles.modalContainer}>
            <TextInput
              style={styles.modalInput}
              placeholder="Comment"
              value={comment}
              onChangeText={setComment}
              multiline={true}
              numberOfLines={5}
            />
            <TouchableOpacity onPress={() => setShowModal(false)}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <TouchableOpacity
          disabled={!selected}
          onPress={() => selected && navigation.navigate('DriversScreen')}
          style={[
            styles.chooseButton,
            !selected && styles.disabledButton
          ]}
        >
          <Text style={styles.chooseButtonText}>Select {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Rides;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
    padding: wp('2%'),
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: wp('6%'), // Adjusted font size using width percentage
    paddingVertical: hp('1%'), // Reduced padding
  },
  container: {
    marginBottom: hp('1%'),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp('0.5%'),
    backgroundColor: '#f0f0f0',
    borderRadius: wp('2%'),
    paddingHorizontal: wp('3%'), // Reduced padding
    paddingVertical: hp('1%'), // Reduced padding
    width: '100%',
  },
  icon: {
    marginRight: wp('1%'),
  },
  rideOption: {
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    borderRadius: wp('2%'),
    width: wp('30%'),
    marginLeft: wp('1.5%'),
    height: wp('22%'),
    justifyContent: 'center',
  },
  selectedRideOption: {
    backgroundColor: "#ffcccc",
  },
  rideImage: {
    width: wp('15%'),
    height: wp('15%'),
  },
  rideTitle: {
    textAlign: 'center',
    marginTop: hp('0.5%'),
    fontSize: wp('4%'),
    fontWeight: "450",
  },
  chooseButton: {
    backgroundColor: '#ff5c5c',
    borderRadius: wp('2%'),
    paddingVertical: hp('2%'), // Adjusted padding for vertical space
    alignItems: 'center',
    marginHorizontal: wp('3%'), // Margin added to horizontally center the button
    marginBottom: hp('2%'), // Small margin below the button
  },
  disabledButton: {
    backgroundColor: '#e0e0e0',
  },
  chooseButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: wp('4%'),
  },
  priceCommentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('2%'),
    marginTop: hp('2%'), // Reduced margin
  },
  setPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: wp('2%'),
    paddingHorizontal: wp('3%'), // Reduced padding
    paddingVertical: hp('1%'), // Reduced padding
    marginRight: wp('1%'),
  },
  priceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: wp('2%'),
  },
  priceButtonText: {
    fontSize: wp('4%'),
    color: 'black',
    marginLeft: wp('1%'),
  },
  priceInput: {
    borderRadius: wp('2%'),
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1%'),
    fontSize: wp('4%'),
    backgroundColor: 'white',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  commentInput: {
    backgroundColor: 'white',
    borderRadius: wp('2%'),
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1%'),
    fontSize: wp('4%'),
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: wp('4%'),
    borderRadius: wp('2%'),
    justifyContent: 'center',
  },
  modalInput: {
    fontSize: wp('4%'),
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('3%'),
    backgroundColor: '#fff',
    borderRadius: wp('2%'),
    borderWidth: 1,
    borderColor: '#ddd',
  },
});