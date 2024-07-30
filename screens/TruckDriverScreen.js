import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import TruckDriver from '../components/TruckDriver';
import { createStackNavigator } from '@react-navigation/stack';
import ChooseTruck from '../components/ChooseTruck';

const Stack = createStackNavigator();

const TruckDriverScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ChooseTruck" component={ChooseTruck} />
    </Stack.Navigator>
  </SafeAreaView>
);
};

export default TruckDriverScreen

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
},
title: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 20,
  textAlign: 'center',
},
});
  

