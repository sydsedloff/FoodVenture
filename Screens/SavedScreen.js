import React from "react";
import { ImageBackground, Text, Image, View, Pressable } from "react-native";
import styles from "../styles";

export default function SavedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.pageHeaders]}>Saved</Text>
      <View style={styles.contentContainer.white}>
        <Text style={[styles.pageHeaders]}>Saved Restaurants</Text>
        <Image
          source={require("../assets/forkKnifeBW.png")}
          style={[styles.savedPageIcons]}
        ></Image>
        <Text style={[styles.signa32]}>Restaurants</Text>
        <Text style={[styles.smallText]}>
          Breakfast, Lunch, Dinner, Desserts, & Drinks
        </Text>
      </View>
      <View style={styles.contentContainer.white}>
        <Text style={[styles.pageHeaders]}>Saved Tours</Text>
        <Image
          source={require("../assets/binoculars.png")}
          style={[styles.savedPageIcons]}
        ></Image>
        <Text style={[styles.signa32]}>Restaurants</Text>
        <Text style={[styles.smallText]}>
          Breakfast, Lunch, Dinner, Desserts, & Drinks
        </Text>
      </View>
    </View>
  );
}
