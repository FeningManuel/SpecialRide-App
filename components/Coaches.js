import { FlatList, StyleSheet, Text, TouchableOpacity, TextInput, View, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const data = [
  {
    id: "123",
    title: "MiniBus",
    multiplier: 1,
    Image: require('../assets/MiniBus.png')
  },
  {
    id: "456",
    title: "Costal Bus",
    multiplier: 1.2,
    Image: require('../assets/CostalBus.png')
  }, 
  {
    id: "789",
    title: "Long Bus",
    multiplier: 1.5,
    Image: require('../assets/Bus.png')
  },
]

const Coaches = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);


  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
        <Text style={tw`font-bold text-center text-2xl`}>Get a Bus</Text>
        <TouchableOpacity 
        onPress={() => navigation.navigate("HomeScreen")}
        style={tw`absolute top-3 left-1 z-50 p-3 rounded-full`}>
        <Icon name="chevron-left" type="font-awesome" />
        </TouchableOpacity>

        <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
            <GooglePlacesAutocomplete 
              placeholder='Pick-up Location'
              styles={toInputBoxStyles}
              fetchDetails={true}
              returnKeyType={"search"}
              minLength={2}
              onPress={(data, details = null) => {
                dispatch(
                  setDestination({
                    location: details.geometry.location,
                    decription: data.description,
                  })
                );

                navigation.navigate("RideOptionsCard");

              }}
              enablePoweredByContainer={false}
              nearbyPlacesAPI='GooglePlacesSearch'
              debounce={400}
            />
        </View>
        </View>
            <View style={tw`border-t border-gray-200 flex-shrink`}>

<View>
    <GooglePlacesAutocomplete 
      placeholder='Destination'
      styles={toInputBoxStyles}
      fetchDetails={true}
      returnKeyType={"search"}
      minLength={2}
      onPress={(data, details = null) => {
        dispatch(
          setDestination({
            location: details.geometry.location,
            decription: data.description,
          })
        );

      }}
      enablePoweredByContainer={false}
      nearbyPlacesAPI='GooglePlacesSearch'
      debounce={400}
    />
</View>
      
      </View>
      <FlatList 
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
         <TouchableOpacity 
         onPress={() => setSelected(item)}
         style={tw`bg-gray-100 m-2 h-12 p-3 items-center `}>
           <Image source={item.Image}
             style={{
             width:90,
             height:50,
             resizeMode: "contain",
             }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw``}>{title}</Text>
             
            </View>
            
         </TouchableOpacity>
        )}
      />

<View>
        <TouchableOpacity 
          disabled={!selected} 
          onPress={() => selected && navigation.navigate('DriversScreen')}
          style={tw`bg-black py-3 ${!selected && "bg-gray-300"}`}>
          <Text style={tw`text-center  text-white text-xl`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
export default Coaches

const toInputBoxStyles = StyleSheet.create({
  container: {
      backgroundColor: "white",
      paddingTop: 20,
      flex: 0,
  },
  textInput: {
      backgroundColor: "#DDDDDF",
      borderRadius: 0,
      fontSize: 18,
  },
  textInputContainer: {
      paddingHorizontal: 20,
      paddingBottom: 0,
  },
});