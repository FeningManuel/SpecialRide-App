import React from 'react';
import { StyleSheet, View } from 'react-native';
import Map from '../components/Map';
import { createStackNavigator } from '@react-navigation/stack';
import Carriers from '../components/Carriers';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CarriersScreen = () => {
  const Stack = createStackNavigator();

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <Map />
      </View>

      <View style={styles.ridesContainer}>
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
  );
};

export default CarriersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    height: hp('40%'), // Replaced fixed height with responsive height
  },
  ridesContainer: {
    height: hp('60%'), // Replaced fixed height with responsive height
  },
});