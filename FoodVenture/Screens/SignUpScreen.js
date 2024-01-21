import {
  ImageBackground,
  Image,
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
        <View style={styles.contentContainer.white}>
          <Text style={styles.h2.r}>Sign Up</Text>
          <View style={styles.textInputContainer}>
            <TextInput placeholder="Full Name" style={[styles.input]} />
            <TextInput placeholder="Email" style={[styles.input]} />
            <TextInput placeholder="Username" style={[styles.input]} />
            <TextInput
              placeholder="Password"
              style={[styles.input]}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.authenticationButtonContainer}>
            <Pressable
              style={[styles.buttonLarge.y]}
              onPress={() => navigation.navigate(PersonalizedWelcomeScreen)}
            >
              <Text style={[styles.buttonLargeText.r]}>Sign Up</Text>
            </Pressable>
            <View style={styles.orContainer}>
              <View style={styles.line} />
              <Text style={styles.orText}>or</Text>
              <View style={styles.line} />
            </View>
            <Pressable
              style={[styles.buttonLarge.w]}
              onPress={() => navigation.navigate(LoginScreen)}
            >
              <Text style={[styles.buttonLargeText.r]}>Log In</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
