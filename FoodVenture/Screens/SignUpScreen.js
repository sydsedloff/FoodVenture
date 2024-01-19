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
      <ImageBackground
        source={require("../assets/Foodventure_Background_Image.png")}
        style={styles.backgroundImage}
      >
        <Image
          style={styles.logo}
          source={require("../assets/FViconYellow.png")}
        />
        <View style={styles.contentContainer}>
          <Text>Sign Up</Text>
          <TextInput placeholder="Full Name" style={[styles.input]} />
          <TextInput placeholder="Email" style={[styles.input]} />
          <TextInput placeholder="Username" style={[styles.input]} />
          <TextInput placeholder="Password" style={[styles.input]} />

          <TouchableOpacity>
            <Text>Forgot Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button.r]}>
            <Text
              style={[styles.button.y]}
              onPress={() => navigation.navigate(PersonalizedWelcomeScreen)}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
          <Text>or</Text>
          <TouchableOpacity style={[styles.button.w]}>
            <Text
              style={[styles.button.w]}
              onPress={() => navigation.navigate(LoginScreen)}
            >
              Log In
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
