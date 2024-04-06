import React, { useState, useEffect, useCallback } from "react";
import { ImageBackground, Image, Text, View, Pressable } from "react-native";
import Checkbox from "expo-checkbox";
import styles from "../styles";
import { Colors } from "../colors";
import HomeScreen from "./HomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ChoosePfpScreen from "./ChoosePfpScreen";

export default function PersonalizedWelcomeScreen({ navigation }) {
  const [isGlutenFree, setGlutenFree] = useState(false);
  const [isPescatarian, setPescatarian] = useState(false);
  const [isVegan, setVegan] = useState(false);
  const [isVegetarian, setVegetarian] = useState(false);

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
    console.log(isGlutenFree, isPescatarian, isVegan, isVegetarian);
    await saveDietRestrictions();
    navigation.navigate(ChoosePfpScreen);
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
            Please select any dietary restrictions you may have:
          </Text>
          <View style={[styles.checkboxCollectionContainer]}>
            <Pressable
              style={[styles.checkboxContainer]}
              onPress={() => setGlutenFree(!isGlutenFree)}
            >
              <Checkbox
                style={styles.checkbox}
                value={isGlutenFree}
                onValueChange={setGlutenFree}
                color={isGlutenFree ? Colors.red : undefined}
              />
              <Text style={[styles.checkBoxText]}>Gluten Free</Text>
            </Pressable>
            <Pressable
              style={[styles.checkboxContainer]}
              onPress={() => setPescatarian(!isPescatarian)}
            >
              <Checkbox
                style={styles.checkbox}
                value={isPescatarian}
                onValueChange={setPescatarian}
                color={isPescatarian ? Colors.red : undefined}
              />
              <Text style={styles.checkBoxText}>Pescatarian</Text>
            </Pressable>
            <Pressable
              style={[styles.checkboxContainer]}
              onPress={() => setVegan(!isVegan)}
            >
              <Checkbox
                style={styles.checkbox}
                value={isVegan}
                onValueChange={setVegan}
                color={isVegan ? Colors.red : undefined}
              />
              <Text style={styles.checkBoxText}>Vegan</Text>
            </Pressable>
            <Pressable
              style={[styles.checkboxContainer]}
              onPress={() => setVegetarian(!isVegetarian)}
            >
              <Checkbox
                style={styles.checkbox}
                value={isVegetarian}
                onValueChange={setVegetarian}
                color={isVegetarian ? Colors.red : undefined}
              />
              <Text style={styles.checkBoxText}>Vegetarian</Text>
            </Pressable>
          </View>
          <Pressable
            style={[styles.buttonLarge.r]}
            onPress={() => navigation.navigate(ChoosePfpScreen)}
          >
            <Text
              style={[styles.buttonLargeText.y]}
              onPress={() => updateDietRestrictions()}
            >
              Done
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
