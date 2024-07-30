import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.openDrawer()}>
        <Ionicons name="arrow-back" size={width * 0.06} color="black" />
      </TouchableOpacity>
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/DriverImage.png')} // Replace with the user's profile image URI
          style={styles.profileImage}
        />
        <Text style={styles.userName}>John Dada</Text>
        <Text style={styles.userRating}>
          <Ionicons name="star" size={width * 0.04} color="orange" /> 4.9 (27)
        </Text>
      </View>
      <View style={styles.optionContainer}>
        <OptionItem icon="person-outline" text="Personal info" onPress={() => navigation.navigate('PersonalInfoScreen')} />
        <OptionItem icon="lock-closed-outline" text="Security" onPress={() => navigation.navigate('SecurityScreen')} />
        <OptionItem icon="location-outline" text="Saved places" onPress={() => navigation.navigate('SavedPlacesScreen')} />
        <OptionItem icon="wallet-outline" text="Payment methods" onPress={() => navigation.navigate('PaymentMethodScreen')} />
        <OptionItem icon="gift-outline" text="Gifts & Discount" onPress={() => navigation.navigate('GiftandDiscountScreen')} />
        <OptionItem icon="trash-outline" text="Delete account" onPress={() => navigation.navigate('DeleteScreen')} />
      </View>
    </ScrollView>
  );
};

const OptionItem = ({ icon, text, onPress }) => (
  <TouchableOpacity style={styles.optionItem} onPress={onPress}>
    <Ionicons name={icon} size={width * 0.06} color="black" />
    <Text style={styles.optionText}>{text}</Text>
    <Ionicons name="chevron-forward" size={width * 0.06} color="black" style={styles.chevronIcon} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: width * 0.05,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: height * 0.02,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: height * 0.05,
  },
  profileImage: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: (width * 0.2) / 2,
    marginBottom: height * 0.02,
  },
  userName: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
  },
  userRating: {
    fontSize: width * 0.04,
    color: 'gray',
  },
  optionContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop: height * 0.02,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: height * 0.02,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: width * 0.04,
    marginLeft: width * 0.04,
    flex: 1,
  },
  chevronIcon: {
    marginLeft: 'auto',
  },
});

export default ProfileScreen;