import React from 'react';
import { StyleSheet, View } from 'react-native';
import Map from '../components/Map';
import { createStackNavigator } from '@react-navigation/stack';
import Rides from '../components/Rides';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const RidesScreen = () => {
  const Stack = createStackNavigator();

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <Map />
      </View>

      <View style={styles.ridesContainer}>
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
  );
};

export default RidesScreen;

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