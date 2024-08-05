import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const NavOptions = () => {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (!token) {
          navigation.navigate("LoginScreen");
          return;
        }

        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };

        const response = await axios.get('http://54.160.124.158:3000/categories', { headers });
        setCategories(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, [navigation]);

  const handleItemPress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <FlatList
      data={categories}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Text style={styles.title}>{item.name}</Text>
          <TouchableOpacity
            onPress={() => handleItemPress('RidesScreen')}
            style={styles.itemContainer}
          >
            <Image
              source={{ uri: `data:image/png;base64,${item.image}` }}
              style={{ width: 100, height: 100, resizeMode: 'cover' }}
            />
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    marginTop: 20,
  },
  title: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  itemContainer: {
    paddingLeft: 10,
    backgroundColor: "#d9d9d9",
    margin: 15,
    width: 150,
    height: 150,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
