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

export default function SignUpScreen({ navigation }) {
  return (
    <View style={[styles.container]}>
      <Text>This is the Sign Up screen</Text>
    </View>
  );
}
