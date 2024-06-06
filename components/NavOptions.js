import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: "123",
        title: "Rides",
        screen: "RidesScreen",
        Image: require('../assets/Taxi.png')
    },
    {
        id: "456",
        title: "Carriers",
        screen: "CarriersScreen",
        Image: require('../assets/Carriers.png')
    },
    {
        id: "789",
        title: "Coaches",
        screen: "CoachesScreen",
        Image: require('../assets/Bus.png')
    },
    {
        id: "012",
        title: "Truck",
        screen: "TruckScreen",
        Image: require('../assets/Truck.png')
    },
];

const NavOptions = () => {
    const navigation = useNavigation();

    const handleItemPress = (screenName) => {
      navigation.navigate(screenName);
  };

  return (
    <FlatList 
      data={data}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity 
        onPress={() => handleItemPress(item.screen)}
        style={styles.itemContainer}>
            <View>
                <Image source={item.Image}
                  style={{ width: 180, height: 100, resizeMode: 'cover'
                  
                  }}
                />
                
                
            </View>    
        </TouchableOpacity>
        </View>
      )}/>
  )
}

export default NavOptions

const styles = StyleSheet.create({
    container: {
        marginLeft: 5,
        marginTop: 20,
        
      },
      title: {

        marginLeft: 20,
        fontSize: 18,
        fontWeight: "bold"
      },
      itemContainer: {
    
        paddingLeft: 10,
        backgroundColor: "#d9d9d9",
        margin: 15,
        width: 150,
        height: 150,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
      },
})