import React from "react";
import { Text, Image, View, Pressable } from "react-native";
import styles from "../styles";
import SavedRestaurantScreen from "./SavedRestaurantsScreen";
import SavedFoodToursScreen from "./SavedFoodToursMenuScreen";
import HeaderComponent from "../Components/HeaderComponent";
import NavigationBar from "../Components/NavigationBar";
import SavedFoodToursMenuScreen from "./SavedFoodToursMenuScreen";

export default function SavedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <HeaderComponent />
      <Text style={[styles.pageHeaders, styles.bottomMargins]}>Saved</Text>
      <Pressable
        style={styles.contentContainer.red}
        onPress={() => navigation.navigate(SavedRestaurantScreen)}
      >
        <Text style={[styles.pageHeaders, styles.bottomMargins]}>
          Saved Restaurants
        </Text>
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
        onPress={() => navigation.navigate(SavedFoodToursMenuScreen)}
      >
        <Text style={[styles.pageHeaders, styles.bottomMargins]}>
          Saved Tours
        </Text>
        <Image
          source={require("../assets/binoculars.png")}
          style={[styles.savedPageIcons]}
        ></Image>
        <Text style={[styles.signa32]}>Restaurants</Text>
        <Text style={[styles.smallText]}>
          Breakfast, Lunch, Dinner, Desserts, & Drinks
        </Text>
      </Pressable>
      <NavigationBar />
    </View>
  );
}
