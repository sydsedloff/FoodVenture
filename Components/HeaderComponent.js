import React, { useState, useEffect } from "react";
import { Text, Image, View, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles";
import { useNavigation, useRoute } from "@react-navigation/native";

// Import the placeholder image
const placeholderProfileImage = require("../assets/icons/profile_placeholder.svg");

export default function HeaderComponent() {
  const { canGoBack, navigate, goBack } = useNavigation();
  const { name } = useRoute();

  const isProfileScreen = name === "ProfileScreen";
  const isHomeScreen = name === "HomeScreen";

  const [profilePicture, setProfilePicture] = useState(placeholderProfileImage);

  useEffect(() => {
    if (!isProfileScreen) {
      getUserProfilePicture();
    }
  }, []);

  async function getUserProfilePicture() {
    try {
      const userEmail = await AsyncStorage.getItem("userEmail");
      const response = await fetch(
        `http://localhost:3000/api/profilePicture/${userEmail}`
      );
      if (response.ok) {
        const data = await response.json();
        if (data.profilePicture) {
          setProfilePicture(data.profilePicture);
        }
      } else {
        console.error("Failed to fetch profile picture");
        // If fetch fails, keep the placeholder image
      }
    } catch (error) {
      console.error("Error fetching profile picture:", error);
      // If there's an error, keep the placeholder image
    }
  }

  return (
    <View style={[styles.headerContainer]}>
      {canGoBack && !isHomeScreen && (
        <Pressable onPress={goBack}>
          <Image
            source={require("../assets/backArrow.png")}
            style={[styles.headerBackArrow]}
          />
        </Pressable>
      )}
      {!isProfileScreen && (
        <Pressable onPress={() => navigate("ProfileScreen")}>
          <Image source={profilePicture} style={[styles.headerImage]} />
        </Pressable>
      )}
    </View>
  );
}
