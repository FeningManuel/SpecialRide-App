import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Icon, colors } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {

    // window.sessionStorage.clear();
    
    if(email.length === 0 || password.length === 0) {
        // openNotification("topRight", "error", "Login Error", "All fields are required");
        console.log("Error")
        return;
    }

    // setIsLoading(true);

 const body = { email, password };

  console.log('Email:', email);
  console.log('Password:', password);


  // axios
  //   .post(`${process.env.REACT_APP_API_URL}/auth/sign-in`, body, { headers: {
  //     'Content-Type': 'application/json'
  //   },})
  //   .then((response) => {
  //   //   if (response.data.success) {

  //       window.sessionStorage.setItem("token", response.data.accessToken);
  //       window.sessionStorage.setItem("refreshToken", response.data.refreshToken);

  //       // openNotification("topRight", "success", "Success", "Login Successful");
  //       setEmail("");
  //       setPassword("");
  //       setIsLoading(false);

  //       setTimeout(() => {
  //         navigate(`/admin/dashboard`);
  //       }, 1000);
  //   //   }
  //   })
  //   .catch((error) => {
  //     // openNotification("topRight", "error", "Login Error", "Invalid email address or password");
  //     setEmail("");
  //     setPassword("");

  //     console.log("error :>> ", error);
  //     setIsLoading(false);
  //   });

}

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