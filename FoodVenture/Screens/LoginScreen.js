import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../styles";
import HomeScreen from "./HomeScreen";

export default function LoginScreen({ navigation }) {
  return (
    <View style={[styles.container]}>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Password" />
      <TouchableOpacity>
        <Text>Forgot Password</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text onPress={() => navigation.navigate(HomeScreen)}>Log In</Text>
      </TouchableOpacity>
      <Text>or</Text>
      <TouchableOpacity>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
