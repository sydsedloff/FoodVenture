import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
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
        <View style={styles.contentContainer}>
          <Text>Welcome</Text>
          <Text>to FoodVenture</Text>
          <TouchableOpacity
            style={[styles.button.r]}
            onPress={() => navigation.navigate(LoginScreen)}
          >
            <Text>Log In</Text>
          </TouchableOpacity>
          <Text>or</Text>
          <TouchableOpacity
            style={[styles.button.r]}
            onPress={() => navigation.navigate(SignUpScreen)}
          >
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
