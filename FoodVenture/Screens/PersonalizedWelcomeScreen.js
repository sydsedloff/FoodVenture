import {
  ImageBackground,
  Image,
  StyleSheet,
  TextInput,
  Text,
  CheckBox,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  NavigationContainer,
  useFocusEffect,
  useRoute,
} from "@react-navigation/native";
import styles from "../styles";

// const [isSelected, setSelection] = useState(false);

export default function PersonalizedWelcomeScreen({ navigation }) {
  return (
    <View style={[styles.container]}>
      {/* I cannot for the life of me get this to cover the whole screen */}
      <ImageBackground
        source={require("../assets/Foodventure_Background_Image.png")}
        style={styles.backgroundImage}
      >
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../assets/FViconYellow.png")}
        />
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
      </ImageBackground>
    </View>
  );
}
