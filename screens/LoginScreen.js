import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Icon, colors } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import openNotification from '../components/OpenNotification'


// import { REACT_APP_API_URL } from '@env';


const LoginScreen = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (email.length === 0 || password.length === 0) {
      // openNotification("topRight", "error", "Login Error", "All fields are required");
      console.log("Error: All fields are required");
      return;
    }
  
    const body = { email, password };
  
    console.log('Email:', email);
    console.log('Password:', password);
  
    const API_URL = 'http://54.160.124.158:3000/auth/sign-in';
  
    axios
      .post(API_URL, body, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(async (response) => {
        console.log("Success");
        // console.log(response.data)
        await AsyncStorage.setItem("token", response.data.accessToken);
        Alert.alert('Success', 'Login Successful');
  
        // setTimeout(() => {
          navigation.navigate("HomeScreen");
        // }, 1000);
      })
      .catch((error) => {
        // openNotification("topRight", "error", "Login Error", "Incorrect email or password");
        Alert.alert('Error', 'Incorrect email or password');
        setEmail("");
        setPassword("");
  
        if (error.response) {
          console.log("Error Data:", error.response.data);
          console.log("Error Status:", error.response.status);
          console.log("Error Headers:", error.response.headers);
        } else if (error.request) {
          console.log("Error Request:", error.request);
        } else {
          console.log("Error Message:", error.message);
        }
        console.log("Error Config:", error.config);
      });
  };
  
  

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View style={{flex: 1, marginHorizontal:22}}>
        <View style={{marginVertical: 22}}>
            <Text style={{
              fontSize: 22,
              fontWeight: 'bold',
              marginVertical: 12,
              color: colors.black,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 75
            
            }}> 
               Login to your account 
            </Text>
        </View>
        <View style={{paddingTop: 57, marginBottom: 12}}>
          <View style={{
            width: "100%",
            height: 48,
            borderColor: colors.black,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 22
            
          }}>
            <TextInput
              placeholder='Email'
              placeholderTextColor={colors.black}
              keyboardType='text'
              
              style={{
                width: "12%",
                borderRightWidth: 1,
                borderLeftColor: colors.grey1,
                height: "100%"
              }}
            />
            <TextInput
              placeholder='Email Address'
              placeholderTextColor={colors.black}
              keyboardType='text'
              onChangeText={(text) => setEmail(text)}
              style={{
                width: "80%"
              }}
            />
          </View>
        </View>

        <View style={{paddingTop: 30, marginBottom: 12}}>
          <View style={{
            width: "100%",
            height: 48,
            borderColor: colors.black,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 22
          }}>
            <TextInput
              placeholder='Password'
              placeholderTextColor={colors.black}
              secureTextEntry={isPasswordShown}
              onChangeText={(text) => setPassword(text)}
              style={{
                width: "100%"
              }}
            />

            <TouchableOpacity 
            onPress={() => setIsPasswordShown(!isPasswordShown)}
            style={{
              position: "absolute",
              right: 12
            }}>
              {
                isPasswordShown == true ? (
                  <Ionicons name="eye-off" size={24} color={colors.black} />
                ) : (
                  <Ionicons name="eye" size={24} color={colors.black} />
                )
              }

            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          // onPress={() => navigation.navigate("HomeScreen")}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

      </View> 
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: '#f25c5c',
    borderRadius: 18,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})