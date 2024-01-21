import { ImageBackground, Image, Text, Pressable, View } from "react-native";
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
        <View style={styles.contentContainer.transparent}>
          <Text style={styles.h1.r}>Welcome</Text>
          <Text style={styles.h3.r}>to FoodVenture</Text>
          <Pressable
            style={[styles.buttonLarge.r]}
            onPress={() => navigation.navigate(LoginScreen)}
          >
            <Text style={[styles.buttonLargeText.y]}>Log In</Text>
          </Pressable>
          <Pressable
            style={[styles.buttonLarge.r]}
            onPress={() => navigation.navigate(SignUpScreen)}
          >
            <Text style={[styles.buttonLargeText.y]}>Sign Up</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
