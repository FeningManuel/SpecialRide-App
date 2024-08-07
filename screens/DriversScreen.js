import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Drivers from '../components/Drivers';
import { SafeAreaView } from 'react-native-safe-area-context';


const Stack = createStackNavigator();

const DriversScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Drivers" component={Drivers} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DriversScreen;
