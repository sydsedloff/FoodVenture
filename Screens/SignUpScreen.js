import React, { useState } from "react";
import {
  ImageBackground,
  Image,
  TextInput,
  Text,
  View,
  Pressable,
} from "react-native";
import styles from "../styles";
import PersonalizedWelcomeScreen from "./PersonalizedWelcomeScreen";
import LoginScreen from "./LoginScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Colors } from "react-native-paper";
import { localhost } from "../Components/localHostID";
import ChoosePfpScreen from "./ChoosePfpScreen";

export default function SignUpScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
  });

  async function saveNewUser(fullName, email, username, password) {
    try {
      const response = await fetch(`http://${localhost}/api/fakeProfiles`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          username,
          password,
          profilePicture:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
          dietaryRestrictions: {
            glutenFree: false,
            pescatarian: false,
            vegan: false,
            vegetarian: false,
          },
          notifications: {
            pauseAll: false,
            loginAlerts: true,
            promotionsDeals: true,
            reservationReminders: true,
            reservationCreated: true,
            reservationCanceledPush: true,
            completeReservation: true,
            reservationAlerts: true,
            reservationMade: true,
            reservationCanceledEmail: true,
            foodVentureUpdates: true,
          },
          settings: {
            location: true,
            loginAlerts: true,
            darkMode: false,
            highConstrastMode: false,
            captions: false,
            savePastFoodTours: true,
            saveSearchHistory: true,
          },
          savedTours: [],
          savedRestaurants: [],
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("New user saved:", data);
        return data;
      } else {
        console.error("Failed to save new user");
        return null;
      }
    } catch (error) {
      console.error("Error saving new user:", error);
      return null;
    }
  }

  async function signupFunction() {
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;

    let isValid = true;
    const newErrors = { fullName: "", email: "", username: "", password: "" };

    if (!nameRegex.test(fullName)) {
      newErrors.fullName = "Please enter a valid full name";
      isValid = false;
    }
    if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }
    if (!usernameRegex.test(username)) {
      newErrors.username = "Please enter a valid username";
      isValid = false;
    }
    if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must be at least 8 characters long and contain at least one letter and one digit";
      isValid = false;
    }
    setErrors(newErrors);

    if (isValid) {
      await AsyncStorage.setItem("userEmail", email);
      saveNewUser(fullName, email, username, password);
      navigation.navigate(ChoosePfpScreen);
    }
  }

  return (
    <View style={[styles.container]}>
      <ImageBackground
        source={require("../assets/Foodventure_Background_Image.png")}
        style={styles.backgroundImage}
      >
        <Image
          style={[styles.logo]}
          source={require("../assets/FViconYellow.png")}
        />
        <View style={[styles.contentContainer.white]}>
          <Text style={[styles.h2.r]}>Sign Up</Text>
          <View style={[styles.textInputContainer, styles.width100]}>
            <TextInput
              placeholder="Full Name"
              style={[
                styles.input,
                errors.fullName && { borderColor: Colors.red900 },
              ]}
              value={fullName}
              onChangeText={(text) => setFullName(text)}
            />
            {errors.fullName ? (
              <Text style={styles.errorText}>{errors.fullName}</Text>
            ) : null}
            <TextInput
              placeholder="Email"
              style={[
                styles.input,
                errors.email && { borderColor: Colors.red900 },
              ]}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            {errors.email ? (
              <Text style={styles.errorText}>{errors.email}</Text>
            ) : null}
            <TextInput
              placeholder="Username"
              style={[
                styles.input,
                errors.username && { borderColor: Colors.red900 },
              ]}
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
            {errors.username ? (
              <Text style={styles.errorText}>{errors.username}</Text>
            ) : null}
            <TextInput
              placeholder="Password"
              style={[
                styles.input,
                errors.password && { borderColor: Colors.red900 },
              ]}
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            {errors.password ? (
              <Text style={styles.errorText}>{errors.password}</Text>
            ) : null}
          </View>
          <View style={styles.authenticationButtonContainer}>
            <Pressable
              style={[styles.buttonLarge.y]}
              onPress={() => signupFunction()}
            >
              <Text style={[styles.buttonLargeText.r]}>Sign Up</Text>
            </Pressable>
            <View style={styles.contentSeperatorContainer}>
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
