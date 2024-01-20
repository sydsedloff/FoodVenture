import {
  ImageBackground,
  Image,
  StyleSheet,
  TextInput,
  Text,
  View,
  Pressable,
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

          <Pressable>
            <Text>Forgot Password</Text>
          </Pressable>
          <Pressable>
            <Text
              style={[styles.button.y]}
              onPress={() => navigation.navigate(PersonalizedWelcomeScreen)}
            >
              Sign Up
            </Text>
          </Pressable>
          <Text>or</Text>
          <Pressable>
            <Text
              style={[styles.button.w]}
              onPress={() => navigation.navigate(LoginScreen)}
            >
              Log In
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
