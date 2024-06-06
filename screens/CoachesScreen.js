import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import { createStackNavigator } from '@react-navigation/stack'
import Coaches from '../components/Coaches'



const CoachesScreen = () => {

    const Stack = createStackNavigator();
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
        <Stack.Screen
           name="Coaches"
           component={Coaches}
           options={{
            headerShown: false,
           }}
         />
         </Stack.Navigator>
    </View>
    </View>
  )
}

export default CoachesScreen

const styles = StyleSheet.create({})