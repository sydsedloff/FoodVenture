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
          style={{ width: 50, height: 50 }}
          source={require("../assets/FViconYellow.png")}
        />
        <View>
          <Text>Welcome</Text>
          <Text>to FoodVenture</Text>
          <TouchableOpacity onPress={() => navigation.navigate(LoginScreen)}>
            <Text style={[styles.button.r]}>Log In</Text>
          </TouchableOpacity>
          <Text>or</Text>
          <TouchableOpacity onPress={() => navigation.navigate(SignUpScreen)}>
            <Text style={[styles.button.r]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
