import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const LogoutScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const logout = async () => {
      await AsyncStorage.removeItem("token");
      navigation.navigate("LoginScreen");
    };

    logout();
  },[]);
//  navigation.navigate("LoginScreen");
  return (
    <View>
      <Text>Loggin out...</Text>
    </View>
  )
}

export default LogoutScreen

const styles = StyleSheet.create({})