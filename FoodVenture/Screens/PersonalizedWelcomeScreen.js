import {
  ImageBackground,
  Image,
  StyleSheet,
  TextInput,
  Text,
  CheckBox,
  View,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import {
  NavigationContainer,
  useFocusEffect,
  useRoute,
} from "@react-navigation/native";
import styles from "../styles";
import HomeScreen from "./HomeScreen";

// const [isSelected, setSelection] = useState(false);

export default function PersonalizedWelcomeScreen({ navigation }) {
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
        <View style={[styles.contentContainer]}>
          <Text>Welcome</Text>
          <Text>USERNAME</Text>
          <Text>Please select any dietary restrictions you may have:</Text>
          {/* NEED CHECKBOX ICON. The current one doesn't work. */}
          <View style={[styles.checkboxContainer]}>
            <CheckBox
              // value={isSelected}
              // onValueChange={setSelection}
              style={[styles.checkbox]}
            />
            <Text>Gluten Free</Text>
            <CheckBox
              // value={isSelected}
              // onValueChange={setSelection}
              style={[styles.checkbox]}
            />
            <Text>Kosher</Text>
            <CheckBox
              // value={isSelected}
              // onValueChange={setSelection}
              style={[styles.checkbox]}
            />
            <Text>Pescatarian</Text>
            <CheckBox
              // value={isSelected}
              // onValueChange={setSelection}
              style={[styles.checkbox]}
            />
            <Text>Vegan</Text>
            <CheckBox
              // value={isSelected}
              // onValueChange={setSelection}
              style={[styles.checkbox]}
            />
            <Text>Vegetarian</Text>
          </View>
        </View>

        <Pressable onPress={() => navigation.navigate(HomeScreen)}>
          <Text style={[styles.button.r]}>Done</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}
