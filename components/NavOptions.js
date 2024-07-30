import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native';
import React from 'react';
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

    const { width } = Dimensions.get('window');
    const itemSize = width * 0.4; // 40% of the screen width
    const imageHeight = itemSize * 0.55; // 55% of the item size

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
                        style={[styles.itemContainer, { width: itemSize, height: itemSize }]}>
                        <Image source={item.Image} style={[styles.image, { height: imageHeight }]} />
                        
                    </TouchableOpacity>
                </View>
            )}
        />
    );
};

export default NavOptions;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 0,
        paddingTop: 4
    },
    itemContainer: {
        backgroundColor: '#d9d9d9',
        margin: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    image: {
        width: '100%',
        resizeMode: 'contain',
    },
});