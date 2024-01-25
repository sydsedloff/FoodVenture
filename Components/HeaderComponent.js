import React from "react";
import { Text, Image, View, Pressable } from "react-native";
import styles from "../styles";
import profileData from "../data/fakeProfile.json";

export default function HeaderComponent({ navigation }) {
  return (
    <View>
      <Image
        source={require("../assets/backArrow.png")}
        style={[styles.icon]}
      ></Image>
      <Image
        source={{ uri: "https://placehold.co/100x100/" }}
        style={[styles.icon]}
      ></Image>
    </View>
  );
}
