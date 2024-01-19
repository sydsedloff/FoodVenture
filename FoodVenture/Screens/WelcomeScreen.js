import {
  ImageBackground,
  Image,
  Text,
  Pressable,
  View,
  Button,
} from "react-native";
import styles from "../styles";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";

export default function WelcomeScreen({ navigation }) {
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
        <View>
          <Text>Welcome</Text>
          <Text>to FoodVenture</Text>
          <Pressable onPress={() => navigation.navigate(LoginScreen)}>
            <Text style={[styles.button.r]}>Log In</Text>
          </Pressable>
          <Text>or</Text>
          <Pressable onPress={() => navigation.navigate(SignUpScreen)}>
            <Text style={[styles.button.r]}>Sign Up</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
