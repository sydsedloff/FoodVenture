import React, { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles";
import { SafeAreaView, Pressable, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { localhost } from "./localHostID";

// Import the placeholder image
const placeholderProfileImage = require("../assets/icons/profile_placeholder.svg");

export default function HeaderComponent() {
  const { canGoBack, navigate, goBack } = useNavigation();
  const { name } = useRoute();

  const isProfileScreen = name === "ProfileScreen";
  const isHomeScreen = name === "HomeScreen";
  const isFilterSidebarScreen = name === "FilterSidebar";

  const [profilePicture, setProfilePicture] = useState(placeholderProfileImage);

   useEffect(() => {
    if (!isProfileScreen && !isFilterSidebarScreen) {
      getUserProfilePicture();
    }
  }, [isProfileScreen, isFilterSidebarScreen]);

  async function getUserProfilePicture() {
    try {
      const userEmail = await AsyncStorage.getItem("userEmail");
      const response = await fetch(
        `http://${localhost}/api/profilePicture/${userEmail}`
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
      console.log("Error fetching profile picture:", error);
      // If there's an error, keep the placeholder image
    }
  }

  return (
    <SafeAreaView style={[styles.headerContainer]}>
      {canGoBack && !isHomeScreen && !isFilterSidebarScreen && (
        <Pressable onPress={goBack}>
          <Image
            source={require("../assets/backArrow.png")}
            style={[styles.headerBackArrow]}
          />
        </Pressable>
      )}
      {!isProfileScreen && !isFilterSidebarScreen && (
        <Pressable onPress={() => navigate("ProfileScreen")}>
          <Image
            source={
              profilePicture
                ? { uri: profilePicture }
                : require("../assets/icons/profile_placeholder.png")
            }
            style={[styles.headerImage]}
          />
        </Pressable>
      )}
    </SafeAreaView>
  );
}
