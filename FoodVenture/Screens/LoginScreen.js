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
import RestaurantScreen from "./RestaurantScreen";

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
          <TextInput placeholder="Username" style={styles.input} />
          <TextInput placeholder="Password" style={styles.input} />
          <Pressable>
            <Text>Forgot Password</Text>
          </Pressable>
          <Pressable
            style={[styles.buttonLarge.r]}
            onPress={() => navigation.navigate(HomeScreen)}
          >
            <Text style={[styles.buttonLargeText.y]}>Log In</Text>
          </Pressable>
          <Text>or</Text>
          <Pressable
            style={[styles.buttonLarge.w]}
            onPress={() => navigation.navigate(SignUpScreen)}
          >
            <Text style={[styles.buttonLargeText.r]}>Sign Up</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
