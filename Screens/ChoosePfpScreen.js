import React, { useState, useEffect, useCallback } from "react";
import { ImageBackground, Image, Text, View, Pressable } from "react-native";
import Checkbox from "expo-checkbox";
import styles from "../styles";
import { Colors } from "../colors";
import HomeScreen from "./HomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ChoosePfpScreen({ navigation }) {
  const [profilePicture, setTasteBuddy] = useState("");

  async function saveProfilePicture() {
    try {
      const userEmail = await AsyncStorage.getItem("userEmail");
      const response = await fetch(
        `http://localhost:3000/profilePicture/${userEmail}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            dietaryRestrictions: {
              glutenFree: isGlutenFree,
              kosher: isKosher,
              pescatarian: isPescatarian,
              vegan: isVegan,
              vegetarian: isVegetarian,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update profile picture");
      }

      const data = await response.json();
      console.log("Profile Picture updated successfully:", data);
    } catch (error) {
      console.error("Error updating profile picture:", error);
    }
  }

  async function updateProfilePicture() {
    console.log();
    await saveProfilePicture();
    navigation.navigate(HomeScreen);
  }
  useEffect(() => {
    getUserData();
  }, []);
  const [userData, setUserData] = useState(null);
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

  console.log(AsyncStorage.getItem("userEmail"));
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
        <View style={[styles.contentContainer.white]}>
          <Text style={[styles.h2.b]}>Welcome</Text>
          <Text style={[styles.h3.b, styles.bottomMargins]}>
            {userData && userData.username ? userData.username : ""}
          </Text>
          <View style={[styles.contentSeperatorContainer]}>
            <View style={[styles.line, styles.bottomMargins]} />
          </View>
          <Text style={[styles.paragraph.centered, styles.bottomMargins, {fontSize:24}]}>
            Choose your Taste Buddy!
          </Text>

          {/* PROFILE PICTURES */}
          <View>

            <View style={[styles.horizontalAlign, styles.width100]}>
              {/* LEFT COLUMN */}
              <View>
            <Pressable
                style={[styles.horizontalAlign, styles.sideBuffer, {paddingBottom:"10%"}]}
              onPress={() => setTasteBuddy("chopsticks")}
              >
                <Image
                  style={[styles.tasteBuddies]}
                  source={require("../assets/pfp/chopstick_profile.svg")}
                />
                <Text style={[styles.merri19Bold, {paddingLeft:"2%"}]}>Chopsticks</Text>
              </Pressable>
              <Pressable
                style={[styles.horizontalAlign, styles.sideBuffer, {paddingBottom:"10%"}]}
              onPress={() => setTasteBuddy("fork")}
              >
                <Image
                  style={[styles.tasteBuddies]}
                  source={require("../assets/pfp/profileFork.png")}
                />
                <Text style={[styles.merri19Bold, {paddingLeft:"2%"}]}>Fork</Text>
              </Pressable>
              <Pressable
                style={[styles.horizontalAlign, styles.sideBuffer, {paddingBottom:"10%"}]}
              onPress={() => setTasteBuddy("knife")}
              >
                <Image
                  style={[styles.tasteBuddies]}
                  source={require("../assets/pfp/knifeProfileIcon.png")}
                />
                <Text style={[styles.merri19Bold, {paddingLeft:"2%"}]}>Knife</Text>
              </Pressable>
              </View>
              
              {/* RIGHT COLUMN */}
              <View>
                <Pressable
                style={[styles.horizontalAlign, styles.sideBuffer, {paddingBottom:"10%"}]}
              onPress={() => setTasteBuddy("spoon")}
              >
                <Image
                  style={[styles.tasteBuddies]}
                  source={require("../assets/pfp/profileSpoon.png")}
                />
                <Text style={[styles.merri19Bold, {paddingLeft:"2%"}]}>Spoon</Text>
              </Pressable>
              <Pressable
                style={[styles.horizontalAlign, styles.sideBuffer, {paddingBottom:"10%"}]}
              onPress={() => setTasteBuddy("spork")}
              >
                <Image
                  style={[styles.tasteBuddies]}
                  source={require("../assets/pfp/sporkProfileIcon.png")}
                />
                <Text style={[styles.merri19Bold, {paddingLeft:"2%"}]}>Spork</Text>
              </Pressable>
              <Pressable
                style={[styles.horizontalAlign, styles.sideBuffer, {paddingBottom:"10%"}]}
              onPress={() => setTasteBuddy("straws")}
              >
                <Image
                  style={[styles.tasteBuddies]}
                  source={require("../assets/pfp/straws-profile.svg")}
                />
                <Text style={[styles.merri19Bold, {paddingLeft:"2%"}]}>Straws</Text>
              </Pressable>
              </View>

            </View>

            <View style={[styles.horizontalAlign]}>

            </View>
          </View>
<View style={[styles.tasteBuddies]}>
  {/* SPACER */}
</View>

        </View><Pressable
            style={[styles.buttonLarge.r, styles.topMargins, styles.horizontalAlign, styles.justifySpaceBetween, {alignSelf:"flex-end", marginRight:"5%", width:"35%", paddingRight:"5%", paddingLeft:"5%"}]}
            onPress={() => navigation.navigate(HomeScreen)}
          >
            <Text
              style={[styles.buttonLargeText.y]}
              onPress={() => updateProfilePicture()}
            >
              Done
            </Text>
            <Image
                  style={[{height: 25, width: 25}]}
                  source={require("../assets/checkYellow.png")}
                />
          </Pressable>
      </ImageBackground>
    </View>
  );
}
