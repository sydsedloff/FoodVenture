import React from "react";
import { Text, Image, View, Pressable } from "react-native";
import styles from "../styles";
import SavedRestaurantScreen from "./SavedRestaurantsScreen";

export default function SavedFoodToursScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.pageHeaders]}>Saved Food Tours</Text>
      <Pressable
        style={styles.contentContainer.white}
        onPress={() => navigation.navigate(SavedRestaurantScreen)}
      >
        <Text style={[styles.pageHeaders]}>Tour 1</Text>
        <Image
          source={require("../assets/binoculars.png")}
          style={[styles.savedPageIcons]}
        ></Image>
      </Pressable>
      <View style={styles.contentContainer.white}>
        <Text style={[styles.pageHeaders]}>Tour 2</Text>
        <Image
          source={require("../assets/binoculars.png")}
          style={[styles.savedPageIcons]}
        ></Image>
      </View>
    </View>
  );
}
