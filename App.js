import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Font from "expo-font"; // Import Font from Expo

// Import screens
import WelcomeScreen from "./Screens/WelcomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import HomeScreen from "./Screens/HomeScreen";
import PersonalizedWelcomeScreen from "./Screens/PersonalizedWelcomeScreen";
import RestaurantScreen from "./Screens/RestaurantScreen";
import FilterSidebar from "./Screens/FilterSidebar";
import EditProfileScreen from "./Screens/EditProfileScreen";
import EditDietaryRestrictionsScreen from "./Screens/EditDietaryRestrictionsScreen";

// Import custom fonts
import FugazOneRegular from "./assets/fonts/FugazOne-Regular.ttf";
import MerriweatherSansRegular from "./assets/fonts/MerriweatherSans-Regular.ttf";
import MerriweatherSansBold from "./assets/fonts/MerriweatherSans-Bold.ttf";
import SignikaNegativeRegular from "./assets/fonts/SignikaNegative-Regular.ttf";
import ReservationScreen from "./Screens/ReservationScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import SavedScreen from "./Screens/SavedScreen";
import NotificationsScreen from "./Screens/NotificationsScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import SavedRestaurantScreen from "./Screens/SavedRestaurantsScreen";
import SavedFoodToursScreen from "./Screens/SavedFoodToursScreen";
import GenerateFoodTourScreen from "./Screens/GenerateFoodTourScreen";
import YourFoodTourScreen from "./Screens/YourFoodTourScreen";
import SavedFoodToursMenuScreen from "./Screens/SavedFoodToursMenuScreen";

// Register custom fonts
Font.loadAsync({
  "FugazOne-Regular": FugazOneRegular,
  "MerriweatherSans-Regular": MerriweatherSansRegular,
  "MerriweatherSans-Bold": MerriweatherSansBold,
  "SignikaNegative-Regular": SignikaNegativeRegular,
});

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Log In" component={LoginScreen} />
      <Tab.Screen name="Restaurant Screen" component={RestaurantScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {/* name initialroutename = to a variable or if statement depending on if the user is logged in. Either Home or Welcome screen */}

      <Stack.Navigator initialRouteName="GenerateFoodTourScreen">
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PersonalizedWelcomeScreen"
          component={PersonalizedWelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RestaurantScreen"
          component={RestaurantScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FilterSidebar"
          component={FilterSidebar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReservationScreen"
          component={ReservationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditProfileScreen"
          component={EditProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditDietaryRestrictionsScreen"
          component={EditDietaryRestrictionsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SavedScreen"
          component={SavedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NotificationsScreen"
          component={NotificationsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SavedRestaurantScreen"
          component={SavedRestaurantScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SavedFoodToursScreen"
          component={SavedFoodToursScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SavedFoodToursMenuScreen"
          component={SavedFoodToursMenuScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GenerateFoodTourScreen"
          component={GenerateFoodTourScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="YourFoodTourScreen"
          component={YourFoodTourScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NavBar"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
