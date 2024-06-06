import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Map from '../components/Map'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'

import Confirmation from '../components/confirmation'

const ConfirmationScreen = () => {
  const Stack = createStackNavigator();
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <Map />
        <View style={styles.menuContainer}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu" size={32} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.stackContainer}>
        <Stack.Navigator>
          <Stack.Screen
            name="confirmation"
            component={Confirmation}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default ConfirmationScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 0,
    
  },
  mapContainer: {
    height: '45%',
    borderBottomWidth: 0,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    
  },
  stackContainer: {
    height: '55%',
  },
})