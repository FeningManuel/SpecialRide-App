import { Pressable, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Icon, colors } from 'react-native-elements'
import { useFocusEffect } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import axios from 'axios'
import LoginScreen from './LoginScreen'
import { useNavigation } from '@react-navigation/native';
// import { notification } from 'antd';

const SignupScreen = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("super-admin");
  const navigation = useNavigation();


  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  useFocusEffect(
    React.useCallback(() => {
      const backAction = () => {
        // Disable back navigation
        return true;
      };

      const unsubscribe = navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();
        backAction();
      });

      return unsubscribe;
    }, [navigation])
  );
  
  const handleSubmit = () => {
  
    const body = { role, firstName, lastName, email, password, phoneNumber };
    console.log(body)
  
    const API_URL = 'http://54.160.124.158:3000/auth/sign-up';
  
    axios
      .post(API_URL, body, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        console.log("Success");
  
        // openNotification(
        //   "topRight",
        //   "success",
        //   "Success",
        //   "Registration successful"
        // );
        // notification.success({
        //   message: "Success",
        //   description: "Registration successful",
        //   placement: "topRight",
        // });
        // setTimeout(() => {
          navigation.navigate("LoginScreen");
        // }, 1000);
      })
      .catch((error) => {
  
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
               Create an account 
            </Text>
        </View>
        <View style={{marginVertical: 3}}>
          <Text style={{
              fontSize: 22,
              fontWeight: 'bold',
              marginVertical: 2,
              color: colors.black,
          }}> Hello there, </Text>

          <Text style={{
              fontSize: 16,
              color: colors.black,
          }}> Create an account, </Text>
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
              placeholder='First name'
           
              placeholderTextColor={colors.black}
              keyboardType='name-phone-pad'
              onChangeText={(text) => setFirstName(text)}
              style={{
                width: "100%"
              }}
            />

          </View>
        </View>
        <View style={{paddingTop: 12, marginBottom: 12}}>
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
              placeholder='Last name'
             
              onChangeText={(text) => setLastName(text)}
              placeholderTextColor={colors.black}
              keyboardType='name-phone-pad'
              style={{
                width: "100%"
              }}
            />

          </View>
        </View>
        <View style={{paddingTop: 12, marginBottom: 12}}>
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
              placeholder='Email address'
              name='email'
              onChangeText={(text) => setEmail(text)}
              placeholderTextColor={colors.black}
              keyboardType='email-address'
              style={{
                width: "100%"
              }}
            />

          </View>
        </View>

        <View style={{paddingTop: 12, marginBottom: 12}}>
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
              name='password'
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

        {/* <View style={{paddingTop: 12, marginBottom: 12}}>
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
              placeholder='Search for country'
              placeholderTextColor={colors.black}
              keyboardType='name-phone-pad'
              style={{
                width: "100%"
              }}
            />

          </View>
        </View> */}

        <View style={{paddingTop: 12, marginBottom: 12}}>
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
              placeholder='+233'
              placeholderTextColor={colors.black}
              keyboardType='numeric'
              style={{
                width: "12%",
                borderRightWidth: 1,
                borderLeftColor: colors.grey1,
                height: "100%"
              }}
            />
            <TextInput
              placeholder='Phone Number'
              name='phoneNumber'
              onChangeText={(text) => setPhoneNumber(text)}
              placeholderTextColor={colors.black}
              keyboardType='numeric'
              style={{
                width: "80%"
              }}
            />
          </View>
        </View>


        <View>
        

        <TouchableOpacity
          style={styles.loginButton}
          // onPress={() => navigation.navigate("HomeScreen")}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Create an account</Text>
        </TouchableOpacity>
        </View>
        
        <View style={{
          flexDirection: "row",
          justifyContent: "center",
          marginVertical: 22
        }}>
          <Text style={{
            fontSize: 16, color: colors.black
          }}>Already have an account?</Text>

          <Pressable 
          onPress={() => navigation.navigate("LoginScreen")}>

            <Text style={{
              fontSize: 16,
              color: colors.primary,
              fontWeight: "bold",
              marginLeft: 6
            }}>Login</Text>

          </Pressable>
        </View>


      </View> 
    </SafeAreaView>
  )
}

export default SignupScreen

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