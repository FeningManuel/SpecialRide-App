import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import DriverArrived from '../components/DriverArrived';
import { createStackNavigator } from '@react-navigation/stack';
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import { Ionicons } from '@expo/vector-icons';

const DriverArrivedScreen = () => {
  
    const Stack = createStackNavigator();
    return (
      
      <View>
        <View style={tw`h-1/2`}>
          <Map />
          <View style={tw`flex-row justify-between items-center p-4 bg-gray-100`}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu" size={32} color="black" />
          </TouchableOpacity>
        </View>
        </View>
  
        <View style={tw`h-1/2`}>
          <Stack.Navigator>
          <Stack.Screen
             name="DriverArrived"
             component={DriverArrived}
             options={{
              headerShown: false,
             }}
           />
           </Stack.Navigator>
      </View>
      </View>
    )
  }

export default DriverArrivedScreen

const styles = StyleSheet.create({})