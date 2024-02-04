import {
  ImageBackground,
  Image,
  TextInput,
  Text,
  View,
  Pressable,
} from "react-native";
import { useState } from "react";
import styles from "../styles";
import userProfiles from "../data/fakeProfile.json";
import PersonalizedWelcomeScreen from "./PersonalizedWelcomeScreen";
import LoginScreen from "./LoginScreen";
import User from "../Components/UserClasses";

export default function SignUpScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validCredentials, setValidCredentials] = useState(false);

  function saveNewUser(fullName, email, username, password) {
    const myUser = new User(
      fullName,
      email,
      username,
      password,
      "",
      {
        glutenFree: false,
        kosher: false,
        pescatarian: false,
        vegan: false,
        vegetarian: false,
      },
      {
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
      {
        location: true,
        loginAlerts: true,
        darkMode: false,
        highConstrastMode: false,
        captions: false,
        savePastFoodTours: true,
        saveSearchHistory: true,
      },
      userProfiles.length + 1
    );
    console.log(myUser);
    userProfiles.push(myUser);
  }

  function signupFunction() {
    // RegEx validation
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;

    // Check if input valid
    const isNameValid = nameRegex.test(fullName);
    const isEmailValid = emailRegex.test(email);
    const isUsernameValid = usernameRegex.test(username);
    const isPasswordValid = passwordRegex.test(password);

    if (isNameValid && isEmailValid && isUsernameValid && isPasswordValid) {
      setValidCredentials(true);
      saveNewUser(fullName, email, username, password);
      navigation.navigate(PersonalizedWelcomeScreen);
    } else {
      console.log("Invalid credentials");
    }
  }
  console.log(userProfiles);

  function ErrorMessage(myTest) {
    console.log(myTest);
    if (myTest == false) {
      return <Text>"Please enter valid credentials"</Text>;
    } else {
      return;
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
              style={[styles.input]}
              value={fullName}
              onChangeText={(text) => setFullName(text)}
            />
            {/* <ErrorMessage myTest={isNameValid} /> */}
            <TextInput
              placeholder="Email"
              style={[styles.input]}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              placeholder="Username"
              style={[styles.input]}
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
            <TextInput
              placeholder="Password"
              style={[styles.input]}
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
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
