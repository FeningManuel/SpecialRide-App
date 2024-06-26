import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import { createStackNavigator } from '@react-navigation/stack'
import Carriers from '../components/Carriers'



const CarriersScreen = () => {

    const Stack = createStackNavigator();
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
        <Stack.Screen
           name="Carriers"
           component={Carriers}
           options={{
            headerShown: false,
           }}
         />
         </Stack.Navigator>
    </View>
    </View>
  )
}

export default CarriersScreen

const styles = StyleSheet.create({})