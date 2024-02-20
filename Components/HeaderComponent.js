import React, { useState, useEffect } from "react";
import { Text, Image, View, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function HeaderComponent() {
  const { canGoBack, navigate, goBack } = useNavigation();
  const { name } = useRoute();

  const isProfileScreen = name === "ProfileScreen";
  const isHomeScreen = name === "HomeScreen";

  const [profilePicture, setProfilePicture] = useState(null);

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
        setProfilePicture(data.profilePicture);
      } else {
        console.error("Failed to fetch profile picture");
      }
    } catch (error) {
      console.error("Error fetching profile picture:", error);
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
      {!isProfileScreen && profilePicture && (
        <Pressable onPress={() => navigate("ProfileScreen")}>
          <Image
            source={{ uri: profilePicture }}
            style={[styles.headerImage]}
          />
        </Pressable>
      )}
    </View>
  );
}
