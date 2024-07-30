import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
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

const { width, height } = Dimensions.get('window');

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
        <View style={styles.centeredView}>
          <Text style={[styles.motto, { textAlign: 'center' }]}>We are delighted to have you on board;</Text>
        </View>
        <View style={styles.whereContainer}>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            styles={{
              container: {
                flex: 0,
                borderRadius: 10,
                borderWidth: 1,
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
    paddingTop: height * 0.03,
  },
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: width * 0.05,
  },
  textContainer: {
    flexDirection: 'row',
  },
  textHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  motto: {
    fontSize: width * 0.04,
    fontWeight: '300',
    lineHeight: height * 0.03,
    color: '#262626',
    width: width * 0.8,
    textAlign: 'center',
  },
  blackText: {
    fontFamily: 'Ubuntu-BoldItalic',
    fontSize: width * 0.09,
    color: '#262626',
    letterSpacing: -1.8,
  },
  redText: {
    fontFamily: 'Ubuntu-BoldItalic',
    fontSize: width * 0.09,
    color: '#f25c5c',
    fontStyle: 'italic',
    letterSpacing: -1.8,
  },
  whereContainer: {
    paddingHorizontal: width * 0.05,
    paddingBottom: height * 0.05,
  },
  advContainer: {
   
    bottom: height * 0.025,
    left: width * 0.1,
    width: width * 0.8,
    height: height * 0.15,
    borderRadius: 20,
    backgroundColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  advText: {
    fontSize: width * 0.07,
    fontStyle: 'italic',
    fontWeight: '700',
    textAlign: 'center',
  },
  centeredView: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
});