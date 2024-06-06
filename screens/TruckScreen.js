import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import { createStackNavigator } from '@react-navigation/stack'
import Rides from '../components/Rides'
import Truck from '../components/Truck'



const TruckScreen = () => {

    const Stack = createStackNavigator();
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
        <Stack.Screen
           name="Truck"
           component={Truck}
           options={{
            headerShown: false,
           }}
         />
         </Stack.Navigator>
    </View>
    </View>
  )
}

export default TruckScreen

const styles = StyleSheet.create({})