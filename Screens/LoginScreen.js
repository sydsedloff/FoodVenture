import React, { useState } from "react";
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
import { localhost } from "../Components/localHostID";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginFunction() {
    try {
      const response = await fetch(
        `http://${localhost}/api/login?email=${email}&password=${password}`
      );

      if (response.ok) {
        // Navigate to HomeScreen if login is successful
        navigation.navigate(HomeScreen);
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  }

  return (
    <View style={styles.container}>
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
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
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
              onPress={() => loginFunction()}
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
