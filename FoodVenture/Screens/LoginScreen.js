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

export default function LoginScreen({ navigation }) {
  return (
    <View style={[styles.container]}>
      <Text>This is the Login screen</Text>
    </View>
  );
}
