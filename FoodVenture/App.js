import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./Screens/WelcomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import HomeScreen from "./Screens/HomeScreen";
import PersonalizedWelcomeScreen from "./Screens/PersonalizedWelcomeScreen";
import * as Font from "expo-font"; // Import Font from Expo

// Import custom fonts
import FugazOneRegular from "./assets/fonts/FugazOne-Regular.ttf";

// Register custom fonts
Font.loadAsync({
  "FugazOne-Regular": FugazOneRegular,
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* name initialroutename = to a variable or if statement depending on if the user is logged in. Either Home or Welcome screen */}
      <Stack.Navigator initialRouteName="WelcomeScreen">
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
