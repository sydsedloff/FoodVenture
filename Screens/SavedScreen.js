import React from "react";
import { Text, Image, View, Pressable } from "react-native";
import styles from "../styles";
import SavedRestaurantScreen from "./SavedRestaurantsScreen";
import SavedFoodToursScreen from "./SavedFoodToursScreen";
import HeaderComponent from "../Components/HeaderComponent";

export default function SavedScreen({ navigation }) {
  return (
    <View>
      <HeaderComponent></HeaderComponent>
      <View style={styles.container}>
        <Text style={[styles.pageHeaders]}>Saved</Text>
        <Pressable
          style={styles.contentContainer.red}
          onPress={() => navigation.navigate(SavedRestaurantScreen)}
        >
          <Text style={[styles.pageHeaders]}>Saved Restaurants</Text>
          <Image
            source={require("../assets/forkKnifeBW.png")}
            style={[styles.savedPageIcons]}
          ></Image>
          <Text style={[styles.signa32]}>Restaurants</Text>
          <Text style={[styles.smallText]}>
            Breakfast, Lunch, Dinner, Desserts, & Drinks
          </Text>
        </Pressable>
        <Pressable
          style={styles.contentContainer.red}
          onPress={() => navigation.navigate(SavedFoodToursScreen)}
        >
          <Text style={[styles.pageHeaders]}>Saved Tours</Text>
          <Image
            source={require("../assets/binoculars.png")}
            style={[styles.savedPageIcons]}
          ></Image>
          <Text style={[styles.signa32]}>Restaurants</Text>
          <Text style={[styles.smallText]}>
            Breakfast, Lunch, Dinner, Desserts, & Drinks
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
