import React from 'react';
import { KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import LogoScreen from './screens/LogoScreen';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import RidesScreen from './screens/RidesScreen';
import CarriersScreen from './screens/CarriersScreen';
import CoachesScreen from './screens/CoachesScreen';
import TruckScreen from './screens/TruckScreen';
import DriversScreen from './screens/DriversScreen';
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoryScreen from './screens/CategoryScreen';
import NotificationScreen from './screens/NotificationScreen';
import HistoryScreen from './screens/HistoryScreen';
import SettingsScreen from './screens/SettingsScreen';
import LogoutScreen from './screens/LogoutScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';
import DriverArrivedScreen from './screens/DriverArrivedScreen';
import { Ionicons } from '@expo/vector-icons'
import CustomDrawerContent from './components/CustomDrawerContent';
import ChooseCarrierScreen from './screens/ChooseCarrierScreen';
import ProfileScreen from './screens/ProfileScreen';
import PersonalInfoScreen from './screens/PersonalInfoScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import SecurityScreen from './screens/SecurityScreen';
import SavedPlacesScreen from './screens/SavedPlacesScreen';
import GiftandDiscountScreen from './screens/GiftandDiscountScreen';
import DeleteScreen from './screens/DeleteScreen';
import ChangePasswordScreen from './screens/ChangePasswordScreen';
import IdentityVerificationScreen from './screens/IdentityVerificationScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';
import TermsOfServiceScreen from './screens/TermsOfServiceScreen';
import HelpSupportScreen from './screens/HelpSupportScreen';
import LanguageScreen from './screens/LanguageScreen';
import AboutScreen from './screens/AboutScreen';
import ContactUsScreen from './screens/ContactUsScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      drawerStyle: {
        backgroundColor: '#fff',
        width: 250,
      },
    }}
    drawerContent={(props) => <CustomDrawerContent {...props} />} // Use the custom drawer content
  >
    
    <Drawer.Screen
      name="Home"
      options={{
        headerShown: false,
        drawerLabel: 'Home',
        title: 'Home',
        drawerIcon: () => (
        
          <SimpleLineIcons name="home" size={24} color="#808080" />
        ),
      }}
      component={HomeScreen}
    />
    <Drawer.Screen
      name="Profile"
      options={{
        headerShown: false,
        drawerLabel: 'Profile',
        title: 'Profile',
        drawerIcon: () => (
        
          <SimpleLineIcons name="user" size={24} color="#808080" />
        ),
      }}
      component={ProfileScreen}
    />
    <Drawer.Screen
      name="Category"
      options={{
        headerShown: false,
        drawerLabel: 'Category',
        title: 'Category',
        drawerIcon: () => (
          <Ionicons name="list" size={24} color="#808080" />
        ),
      }}
      component={CategoryScreen}
    />
    <Drawer.Screen
      name="NotificationHistory"
      options={{
        headerShown: false,
        drawerLabel: 'Notification',
        title: 'Notification',
        drawerIcon: () => (
          <Ionicons name="notifications-outline" size={24} color="#808080" />
        ),
      }}
      component={NotificationScreen}
    />
    <Drawer.Screen
      name="History"
      options={{
        headerShown: false,
        drawerLabel: 'History',
        title: 'History',
        drawerIcon: () => (
          <Ionicons name="archive-outline" size={24}  color="#808080" />
        ),
      }}
      component={HistoryScreen}
    />
    <Drawer.Screen
      name="Settings"
      options={{
        headerShown: false,
        drawerLabel: 'Settings',
        title: 'Settings',
        drawerIcon: () => (
          <SimpleLineIcons name="settings" size={24} color="#808080" />
        ),
      }}
      component={SettingsScreen}
    />
    <Drawer.Screen
      name="Logout"
      options={{
        headerShown: false,
        drawerLabel: 'Logout',
        title: 'Logout',
        drawerIcon: () => (
          <SimpleLineIcons name="logout" size={24} color="#808080" />
        ),
      }}
      component={LogoutScreen}
    />
    {/* Add other Drawer screens here if needed */}
  </Drawer.Navigator>
);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
          >
            <Stack.Navigator>
              <Stack.Screen
                name="LogoScreen"
                component={LogoScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="HomeScreen"
                component={DrawerNavigator} // Replace with DrawerNavigator
                options={({ navigation }) => ({
                  headerLeft: () => (
                    <TouchableOpacity
                      style={{ paddingLeft: 20 }}
                      onPress={() => navigation.openDrawer()}
                    >
                      <MaterialCommunityIcons name="menu" color="white" size={20} />
                    </TouchableOpacity>
                  ),
                  headerShown: false,
                })}
              />
              <Stack.Screen
                name="SignupScreen"
                component={SignupScreen}
                options={{
                  headerShown: false,
                  gestureEnabled: false,
                }}
              />
              <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="ForgotPasswordScreen"
                component={ForgotPasswordScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="RidesScreen"
                component={RidesScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="CarriersScreen"
                component={CarriersScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="CoachesScreen"
                component={CoachesScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="TruckScreen"
                component={TruckScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="DriversScreen"
                component={DriversScreen}
                options={{
                  headerShown: false,
                }}
                />
              <Stack.Screen
                name="ChooseCarrierScreen"
                component={ChooseCarrierScreen}
                options={{
                  headerShown: false,
                }}
                />
              <Stack.Screen
                name="ConfirmationScreen"
                component={ConfirmationScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="DriverArrivedScreen"
                component={DriverArrivedScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="PersonalInfoScreen"
                component={PersonalInfoScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="PaymentMethodScreen"
                component={PaymentMethodScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="SavedPlacesScreen"
                component={SavedPlacesScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="SecurityScreen"
                component={SecurityScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="GiftandDiscountScreen"
                component={GiftandDiscountScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="DeleteScreen"
                component={DeleteScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="ChangePasswordScreen"
                component={ChangePasswordScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="IdentityVerificationScreen"
                component={IdentityVerificationScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="PrivacyPolicyScreen"
                component={PrivacyPolicyScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="TermsOfServiceScreen"
                component={TermsOfServiceScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="HelpSupportScreen"
                component={HelpSupportScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="LanguageScreen"
                component={LanguageScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="AboutScreen"
                component={AboutScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="ContactUsScreen"
                component={ContactUsScreen}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
