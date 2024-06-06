import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import Rides from '../components/Rides'



const RidesScreen = () => {

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
           name="Rides"
           component={Rides}
           options={{
            headerShown: false,
           }}
         />
         </Stack.Navigator>
    </View>
    </View>
  )
}

export default RidesScreen

const styles = StyleSheet.create({})