import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  TextInput,
  View,
  Pressable,
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
        <Image
          style={styles.logo}
          source={require("../assets/FViconYellow.png")}
        />
        <View style={styles.contentContainer}>
          <Text>Login</Text>
          {/* Style the input elements */}
          <TextInput placeholder="Username" style={styles.input} />
          <TextInput placeholder="Password" style={styles.input} />
          <Pressable>
            <Text>Forgot Password</Text>
          </Pressable>
          <Pressable>
            <Text
              onPress={() => navigation.navigate(HomeScreen)}
              style={styles.button.r}
            >
              Log In
            </Text>
          </Pressable>
          <Text>or</Text>
          <Pressable>
            <Text
              onPress={() => navigation.navigate(SignUpScreen)}
              style={styles.button.w}
            >
              Sign Up
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
