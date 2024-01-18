import {
  Button,
  ImageBackground,
  StyleSheet,
  TextInput,
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
      <TextInput placeholder="Full Name" />
      <TextInput placeholder="Email" />
      <TextInput placeholder="Username" />
      <TextInput placeholder="Password" />
      <TouchableOpacity>
        <Text>Forgot Password</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Sign Up</Text>
      </TouchableOpacity>
      <Text>or</Text>
      <TouchableOpacity>
        <Text>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}
