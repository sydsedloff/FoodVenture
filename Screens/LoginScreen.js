import React from "react";
import {
  ImageBackground,
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
        <View style={styles.contentContainer.white}>
          <Text style={styles.h2.r}>Login</Text>
          {/* Style the input elements */}
          <View style={styles.textInputContainer}>
            <TextInput placeholder="Username" style={styles.input} />
            <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.forgotPasswordContainer}>
            <Pressable>
              <Text style={styles.forgotPasswordText}>Forgot Password</Text>
            </Pressable>
          </View>
          <View style={styles.authenticationButtonContainer}>
            <Pressable
              style={[styles.buttonLarge.r]}
              onPress={() => navigation.navigate(HomeScreen)}
            >
              <Text style={[styles.buttonLargeText.y]}>Log In</Text>
            </Pressable>
            <View style={styles.contentSeperatorContainer}>
              <View style={styles.line} />
              <Text style={styles.orText}>or</Text>
              <View style={styles.line} />
            </View>
            <Pressable
              style={[styles.buttonLarge.w]}
              onPress={() => navigation.navigate(SignUpScreen)}
            >
              <Text style={[styles.buttonLargeText.r]}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
