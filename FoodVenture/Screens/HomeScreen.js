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

export default function HomeScreen({ navigation }) {
  return (
    <View style={[styles.container]}>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Password" />
      <TouchableOpacity>
        <Text>Forgot Password</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Sign In</Text>
      </TouchableOpacity>
      <Text>or</Text>
      <TouchableOpacity>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
