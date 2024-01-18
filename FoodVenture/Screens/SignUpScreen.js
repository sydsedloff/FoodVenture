import {
  ImageBackground,
  Image,
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
import PersonalizedWelcomeScreen from "./PersonalizedWelcomeScreen";
import LoginScreen from "./LoginScreen";

export default function SignUpScreen({ navigation }) {
  return (
    <View style={[styles.container]}>
      {/* I cannot for the life of me get this to cover the whole screen */}
      <ImageBackground
        source={require("../assets/Foodventure_Background_Image.png")}
        style={styles.backgroundImage}
      >
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../assets/FViconYellow.png")}
        />
        <Text>Sign Up</Text>
        <TextInput placeholder="Full Name" style={[styles.input]} />
        <TextInput placeholder="Email" style={[styles.input]} />
        <TextInput placeholder="Username" style={[styles.input]} />
        <TextInput placeholder="Password" style={[styles.input]} />

        <TouchableOpacity>
          <Text>Forgot Password</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={[styles.button.y]}
            onPress={() => navigation.navigate(PersonalizedWelcomeScreen)}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
        <Text>or</Text>
        <TouchableOpacity>
          <Text
            style={[styles.button.w]}
            onPress={() => navigation.navigate(LoginScreen)}
          >
            Log In
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
