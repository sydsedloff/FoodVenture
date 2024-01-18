import { StatusBar } from "expo-status-bar";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  NavigationContainer,
  useFocusEffect,
  useRoute,
} from "@react-navigation/native";
import styles from "../styles";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={[styles.container]}>
      <Text>Welcome</Text>
      <Text>to FoodVenture</Text>
      <TouchableOpacity onPress={() => navigation.navigate(LoginScreen)}>
        <Text>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(SignUpScreen)}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
