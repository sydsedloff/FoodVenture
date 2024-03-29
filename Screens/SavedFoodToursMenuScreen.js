import React from "react";
import { Text, Image, View, Pressable } from "react-native";
import styles from "../styles";
import SavedRestaurantScreen from "./SavedRestaurantsScreen";
import SavedFoodToursScreen from "./SavedFoodToursScreen";
import HeaderComponent from "../Components/HeaderComponent";
import NavigationBar from "../Components/NavigationBar";

export default function SavedFoodToursMenuScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent navigation={navigation}></HeaderComponent>

      <View style={styles.container}>
        <Text style={[styles.pageHeaders, styles.bottomMargins]}>
          Saved Food Tours
        </Text>
        <Pressable
          style={styles.contentContainer.red}
          onPress={() => navigation.navigate(SavedFoodToursScreen)}
        >
          <Text style={[styles.pageHeaders]}>Tour #1</Text>
          <Image
            source={require("../assets/binoculars.png")}
            style={[styles.savedPageIcons]}
          ></Image>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate(SavedFoodToursScreen)}
          style={styles.contentContainer.red}
        >
          <Text style={[styles.pageHeaders]}>Tour #2</Text>
          <Image
            source={require("../assets/binoculars.png")}
            style={[styles.savedPageIcons]}
          ></Image>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate(SavedFoodToursScreen)}
          style={styles.contentContainer.red}
        >
          <Text style={[styles.pageHeaders]}>Tour #3</Text>
          <Image
            source={require("../assets/binoculars.png")}
            style={[styles.savedPageIcons]}
          ></Image>
        </Pressable>
      </View>
      <NavigationBar />
    </View>
  );
}
