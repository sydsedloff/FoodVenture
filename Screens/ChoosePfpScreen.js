import React, { useState, useEffect, useCallback } from "react";
import { ImageBackground, Image, Text, View, Pressable } from "react-native";
import Checkbox from "expo-checkbox";
import styles from "../styles";
import { Colors } from "../colors";
import HomeScreen from "./HomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ChoosePfpScreen({ navigation }) {
  const [isGlutenFree, setTasteBuddy] = useState("");

  async function saveDietRestrictions() {
    try {
      const userEmail = await AsyncStorage.getItem("userEmail");
      const response = await fetch(
        `http://localhost:3000/dietaryRestrictions/${userEmail}`,
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
        throw new Error("Failed to update dietary restrictions");
      }

      const data = await response.json();
      console.log("Dietary restrictions updated successfully:", data);
      // Optionally, navigate to another screen or refresh the current screen
    } catch (error) {
      console.error("Error updating dietary restrictions:", error);
      // Handle error, e.g., show a message to the user
    }
  }

  async function updateDietRestrictions() {
    console.log(isGlutenFree, isKosher, isPescatarian, isVegan, isVegetarian);
    await saveDietRestrictions();
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
          <Text style={[styles.paragraph.centered, styles.bottomMargins]}>
            Choose your Taste Buddy!
          </Text>

          {/* PROFILE PICTURES */}
          <View>
            <View style={[styles.horizontalAlign]}>

              <Pressable
                style={[styles.horizontalAlign, styles.sideBuffer]}
              // onPress={() => setTasteBuddy()}
              >
                <Image
                  style={[styles.tasteBuddies]}
                  source={require("../assets/pfp/chopstick_profile.svg")}
                />
                <Text style={[styles.merri17]}>Chopsticks</Text>
              </Pressable>
              <Pressable
                style={[styles.horizontalAlign, styles.sideBuffer]}
              // onPress={() => setTasteBuddy()}
              >
                <Image
                  style={[styles.tasteBuddies]}
                  source={require("../assets/pfp/profileSpoon.png")}
                />
                <Text style={[styles.merri17]}>Spoon</Text>
              </Pressable>

            </View>
            <View style={[styles.horizontalAlign]}>

              <Pressable
                style={[styles.horizontalAlign, styles.sideBuffer]}
              // onPress={() => setTasteBuddy()}
              >
                <Image
                  style={[styles.tasteBuddies]}
                  source={require("../assets/pfp/chopstick_profile.svg")}
                />
                <Text style={[styles.merri17]}>Chopsticks</Text>
              </Pressable>
              <Pressable
                style={[styles.horizontalAlign, styles.sideBuffer]}
              // onPress={() => setTasteBuddy()}
              >
                <Image
                  style={[styles.tasteBuddies]}
                  source={require("../assets/pfp/profileSpoon.png")}
                />
                <Text style={[styles.merri17]}>Spoon</Text>
              </Pressable>

            </View>
            <View style={[styles.horizontalAlign]}>

              <Pressable
                style={[styles.horizontalAlign, styles.sideBuffer]}
              // onPress={() => setTasteBuddy()}
              >
                <Image
                  style={[styles.tasteBuddies]}
                  source={require("../assets/pfp/chopstick_profile.svg")}
                />
                <Text style={[styles.merri17]}>Chopsticks</Text>
              </Pressable>
              <Pressable
                style={[styles.horizontalAlign, styles.sideBuffer]}
              // onPress={() => setTasteBuddy()}
              >
                <Image
                  style={[styles.tasteBuddies]}
                  source={require("../assets/pfp/profileSpoon.png")}
                />
                <Text style={[styles.merri17]}>Spoon</Text>
              </Pressable>

            </View>
          </View>


          {/* <Pressable
            style={[styles.buttonLarge.r, styles.topMargins]}
            onPress={() => navigation.navigate(HomeScreen)}
          >
            <Text
              style={[styles.buttonLargeText.y]}
              onPress={() => updateDietRestrictions()}
            >
              Done
            </Text>
          </Pressable> */}


        </View>
      </ImageBackground>
    </View>
  );
}
