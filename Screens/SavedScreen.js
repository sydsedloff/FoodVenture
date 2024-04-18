import React from "react";
import { Text, Image, View, Pressable } from "react-native";
import styles from "../styles";
import SavedRestaurantScreen from "./SavedRestaurantsScreen";
import SavedFoodToursScreen from "./SavedFoodToursMenuScreen";
import HeaderComponent from "../Components/HeaderComponent";
import NavigationBar from "../Components/NavigationBar";
import SavedFoodToursMenuScreen from "./SavedFoodToursMenuScreen";
import { Colors } from "../colors";

export default function SavedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <HeaderComponent />
      <Text
        style={[
          styles.pageHeaders,
          styles.bottomMargins,
          styles.paddingTopHeader,
        ]}
      >
        Saved
      </Text>
      <View style={[styles.width100]}>
        <Pressable
          style={[
            styles.contentContainer.red,
            styles.alignSelfCenter,
            { borderColor: Colors.red },
          ]}
          onPress={() => navigation.navigate(SavedRestaurantScreen)}
        >
          <Text
            style={[styles.pageHeaders, styles.bottomMargins, { fontSize: 34 }]}
          >
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
      </View>

      <View style={[styles.width100]}>
        <Pressable
          style={[
            styles.contentContainer.red,
            styles.alignSelfCenter,
            { marginBottom: "5%" },
          ]}
          onPress={() => navigation.navigate(SavedFoodToursMenuScreen)}
        >
          <Text
            style={[styles.pageHeaders, styles.bottomMargins, { fontSize: 34 }]}
          >
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
      </View>

      <NavigationBar />
    </View>
  );
}
