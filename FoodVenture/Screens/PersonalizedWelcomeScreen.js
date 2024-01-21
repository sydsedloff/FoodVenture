import React, { useState } from "react";
import { ImageBackground, Image, Text, View, Pressable } from "react-native";
import {
  NavigationContainer,
  useFocusEffect,
  useRoute,
} from "@react-navigation/native";
import styles from "../styles";
import HomeScreen from "./HomeScreen";
import Checkbox from "expo-checkbox";

// const [isSelected, setSelection] = useState(false);

export default function PersonalizedWelcomeScreen({ navigation }) {
  const [isChecked, setChecked] = useState(false);

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
          <Text style={[styles.h3.b]}>USERNAME</Text>
          <Text>Please select any dietary restrictions you may have:</Text>
          {/* NEED CHECKBOX ICON. The current one doesn't work. */}
          <View style={[styles.checkboxContainer]}>
            <View>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#4630EB" : undefined}
              />
              <Text style={styles.paragraph}>Gluten Free</Text>
            </View>
          </View>
          <Pressable
            style={[styles.buttonLarge.r]}
            onPress={() => navigation.navigate(HomeScreen)}
          >
            <Text style={[styles.buttonLargeText.y]}>Done</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
