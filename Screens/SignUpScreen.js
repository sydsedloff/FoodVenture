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

export default function SignUpScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validCredentials, setValidCredentials] = useState(false);

  async function saveNewUser(fullName, email, username, password) {
    const newUser = {
      firstName: fullName,
      email: email,
      username: username,
      password: password, // Note: This is a temporary solution; never store plain-text passwords in production
      id: userProfiles.length + 1,
    };

    userProfiles.push(newUser);
  }

  function signupFunction() {
    // RegEx validation
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;

    // Check if all fields are valid
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
            <TextInput
              placeholder="Full Name"
              style={[styles.input]}
              value={fullName}
              onChangeText={(text) => setFullName(text)}
            />
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
