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
      {/* I cannot for the life of me get this to cover the whole screen */}
      <ImageBackground
        source={require("../assets/Foodventure_Background_Image.png")}
        style={styles.backgroundImage}
      >
        <Image
          style={styles.logo}
          source={require("../assets/FViconYellow.png")}
        />
        <Text>Welcome</Text>
        <Text>to FoodVenture</Text>
        <View style={styles.contentContainer}>
          <Pressable
            style={[styles.button.r]}
            onPress={() => navigation.navigate(LoginScreen)}
          >
            <Text style={styles.buttonText.y}>Log In</Text>
          </Pressable>

          <Text>or</Text>
          <Pressable
            style={[styles.button.r]}
            onPress={() => navigation.navigate(SignUpScreen)}
          >
            <Text style={styles.buttonText.y}>Sign Up</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
