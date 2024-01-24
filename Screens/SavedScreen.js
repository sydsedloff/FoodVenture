import React from "react";
import { ImageBackground, Text, Image, View, Pressable } from "react-native";
import styles from "../styles";

export default function SavedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.h2.r}>Saved</Text>
      <View style={styles.contentContainer.white}>
        <Text>Saved Restaurants</Text>
        <Image
          source={require("../assets/forkKnifeBW.png")}
          style={[styles.icon]}
        ></Image>
        <Text>Restaurants</Text>
        <Text>Breakfast, Lunch, Dinner, Desserts, & Drinks</Text>
      </View>
      <View style={styles.contentContainer.white}>
        <Text>Saved Tours</Text>
        <Image
          source={require("../assets/binoculars.png")}
          style={[styles.icon]}
        ></Image>
        <Text>Restaurants</Text>
        <Text>Breakfast, Lunch, Dinner, Desserts, & Drinks</Text>
      </View>
    </View>
  );
}
