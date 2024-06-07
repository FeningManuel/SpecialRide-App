import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { PanGestureHandler } from 'react-native-gesture-handler';
import tw from 'tailwind-react-native-classnames';
import 'react-native-gesture-handler';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Ubuntu: require('../assets/fonts/Ubuntu-BoldItalic.ttf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const backAction = () => {
        navigation.openDrawer();
        return true;
      };

      const unsubscribe = navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();
        backAction();
      });

      return unsubscribe;
    }, [navigation])
  );

  if (!fontsLoaded) {
    return null;
  }

  const text = 'SpecialRide';
  const firstWord = text.substring(0, 7);
  const secondWord = text.substring(7);

  return (
    <PanGestureHandler onGestureEvent={() => navigation.openDrawer()}>
      <SafeAreaView style={[tw`flex-1 bg-white`, styles.homeContainer]}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="menu" size={32} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.textHeader}>
            <Text style={styles.textContainer}>
              <Text style={styles.blackText}>{firstWord}</Text>
              <Text style={styles.redText}>{secondWord}</Text>
            </Text>
          </View>
        </View>
        <View style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', paddingVertical: 10 }}>
          <Text style={[styles.motto, { textAlign: 'center' }]}>We are delighted to have you on board;</Text>
        </View>
        <View style={styles.whereContainer}>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            styles={{
              container: {
                flex: 0,
                borderRadius: 10.382,
                borderWidth: 1.038,
                borderColor: '#262626',
                paddingTop: 5,
              },
              textInput: {
                fontSize: 20,
              },
            }}
            onPress={(data, details = null) => {
              dispatch(setOrigin({
                location: details.geometry.location,
                description: data.description,
              }));
              dispatch(setDestination(null));
            }}
            fetchDetails={true}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
          <NavOptions />
        </View>
        <View style={styles.advContainer}>
          <TouchableOpacity>
            <Text style={styles.advText}>Advertisement</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </PanGestureHandler>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 30,
  },
  homeContainer: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: '5%',
  },
  textContainer: {},
  textHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  motto: {
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 26,
    color: '#262626',
    width: 326,
    height: 26,
  },
  blackText: {
    fontFamily: 'Ubuntu-BoldItalic',
    fontSize: 37,
    lineHeight: 'normal',
    color: '#2626262',
    textAlign: 'left',
    letterSpacing: -1.837,
  },
  redText: {
    fontSize: 37,
    fontWeight: '700',
    color: '#f25c5c',
    fontFamily: 'Ubuntu-BoldItalic',
    fontStyle: 'italic',
    width: 83,
    textAlign: 'left',
    letterSpacing: -1.8,
  },
  whereContainer: {
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '40%',
    backgroundColor: 'white',
  },
  advContainer: {
    position: 'absolute',
    bottom: 0,
    marginLeft: 40,
    marginBottom: 10,
    width: '80%',
    height: '20%',
    borderRadius: 20,
    backgroundColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  advText: {
    justifyContent: 'center',
    letterSpacing: -1.8,
    textAlign: 'left',
    alignItems: 'center',
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: '700',
  },
});
