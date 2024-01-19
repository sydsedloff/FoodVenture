import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../styles";
import HomeScreen from "./HomeScreen";
import SignUpScreen from "./SignUpScreen";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Remove the title at the top of the screen */}
      <ImageBackground
        source={require("../assets/Foodventure_Background_Image.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.contentContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/FViconYellow.png")}
          />
          {/* Style the input elements */}
          <TextInput placeholder="Username" style={styles.input} />
          <TextInput placeholder="Password" style={styles.input} />
          <TouchableOpacity>
            <Text>Forgot Password</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              onPress={() => navigation.navigate(HomeScreen)}
              style={styles.button.r}
            >
              Log In
            </Text>
          </TouchableOpacity>
          <Text>or</Text>
          <TouchableOpacity>
            <Text
              onPress={() => navigation.navigate(SignUpScreen)}
              style={styles.button.w}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
