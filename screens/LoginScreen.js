import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Icon, colors } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const navigation = useNavigation();

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
              placeholderTextColor={colors.black}
              keyboardType='numeric'
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
          onPress={() => navigation.navigate("HomeScreen")}
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