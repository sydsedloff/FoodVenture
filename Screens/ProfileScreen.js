import React, { useState, useEffect } from "react";
import {
  Image,
  Text,
  TextInput,
  Pressable,
  View,
  SafeAreaView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "../styles";
import EditProfileScreen from "./EditProfileScreen";
import EditDietaryRestrictionsScreen from "./EditDietaryRestrictionsScreen";
import WelcomeScreen from "./WelcomeScreen";
import SavedScreen from "./SavedScreen";
import NotificationsScreen from "./NotificationsScreen";
import SettingsScreen from "./SettingsScreen";
import NavigationBar from "../Components/NavigationBar";
import HeaderComponent from "../Components/HeaderComponent";

export default function ProfileScreen({ navigation }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    try {
      const userEmail = await AsyncStorage.getItem("userEmail");
      const response = await fetch(
        `http://localhost:3000/api/userData/${userEmail}`
      );
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  return (
    <View style={[styles.container]}>
      <HeaderComponent />
      {userData && (
        <>
          <Image
            style={[styles.logoR, styles.bottomMargins]}
            source={{ uri: userData.profilePicture }}
          />
          <Text style={[styles.h3.b]}>{userData.username}</Text>
          <Text style={[styles.signa28, styles.bottomPadding]}>
            {userData.fullName}
          </Text>
        </>
      )}
      <SafeAreaView style={[styles.sideSpacing, styles.marginLeft]}>
        <Pressable
          onPress={() => navigation.navigate(EditProfileScreen)}
          style={[styles.horizontalAlign, styles.bottomMargins]}
        >
          <Image
            source={require("../assets/profileIcon.png")}
            style={[styles.icon]}
          ></Image>
          <Text style={[styles.merri28, styles.sideBuffer]}>Edit Profile</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate(EditDietaryRestrictionsScreen)}
          style={[styles.horizontalAlign, styles.bottomMargins]}
        >
          <Image
            source={require("../assets/forkKnifeRed.png")}
            style={[styles.icon]}
          ></Image>
          <Text style={[styles.merri28, styles.sideBuffer]}>
            Edit Dietary Restrictions
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate(SavedScreen)}
          style={[styles.horizontalAlign, styles.bottomMargins]}
        >
          <Image
            source={require("../assets/saveFilled.png")}
            style={[styles.icon]}
          ></Image>
          <Text style={[styles.merri28, styles.sideBuffer]}>Saved</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate(NotificationsScreen)}
          style={[styles.horizontalAlign, styles.bottomMargins]}
        >
          <Image
            source={require("../assets/noti.png")}
            style={[styles.icon]}
          ></Image>
          <Text style={[styles.merri28, styles.sideBuffer]}>Notifications</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate(SettingsScreen)}
          style={[styles.horizontalAlign, styles.bottomMargins]}
        >
          <Image
            source={require("../assets/settingGear.png")}
            style={[styles.icon]}
          ></Image>
          <Text style={[styles.merri28, styles.sideBuffer]}>Settings</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate(WelcomeScreen)}
          style={[styles.horizontalAlign, styles.bottomMargins]}
        >
          <Image
            source={require("../assets/logout.png")}
            style={[styles.icon]}
          ></Image>
          <Text style={[styles.merri28, styles.sideBuffer]}>Log out</Text>
        </Pressable>
      </SafeAreaView>
      <NavigationBar />
    </View>
  );
}
