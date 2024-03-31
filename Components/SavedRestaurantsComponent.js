import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable, Linking } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles";
import RatingImage from "./RatingImageComponent";

const Restaurants = ({
  name,
  image,
  address,
  description,
  website,
  navigation,
  star_rating,
  restaurantId,
}) => {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    checkSavedStatus();
  }, []);

  const checkSavedStatus = async () => {
    try {
      const userEmail = await AsyncStorage.getItem("userEmail");
      if (!userEmail) return;

      const response = await fetch(
        `http://localhost:3000/api/userData/${userEmail}`
      );
      if (!response.ok) throw new Error("Failed to fetch user data");

      const userData = await response.json();
      const savedRestaurants = userData.savedRestaurants || [];
      const isSaved = savedRestaurants.some(
        (rest) => rest.restaurantId === restaurantId
      );
      setSaved(isSaved);
    } catch (error) {
      console.error("Error checking saved status:", error);
    }
  };

  const saveRestaurant = async () => {
    try {
      // Fetch the list of saved restaurants from AsyncStorage
      const savedRestaurants = await AsyncStorage.getItem("savedRestaurants");
      // Parse the saved restaurants list
      const parsedSavedRestaurants = savedRestaurants
        ? JSON.parse(savedRestaurants)
        : [];
      // Add the current restaurant to the list of saved restaurants
      const updatedSavedRestaurants = [
        ...parsedSavedRestaurants,
        {
          restaurantId,
          name,
          address,
          description,
          website,
          star_rating,
          image,
        },
      ];
      // Save the updated list of saved restaurants to AsyncStorage
      await AsyncStorage.setItem(
        "savedRestaurants",
        JSON.stringify(updatedSavedRestaurants)
      );
      setSaved(true);
      console.log("Restaurant saved successfully!");
    } catch (error) {
      console.error("Error saving restaurant:", error);
    }
  };

  const unsaveRestaurant = async () => {
    try {
      // Fetch the list of saved restaurants from AsyncStorage
      const savedRestaurants = await AsyncStorage.getItem("savedRestaurants");
      // Parse the saved restaurants list
      const parsedSavedRestaurants = savedRestaurants
        ? JSON.parse(savedRestaurants)
        : [];
      // Filter out the current restaurant from the list of saved restaurants
      const updatedSavedRestaurants = parsedSavedRestaurants.filter(
        (rest) => rest.restaurantId !== restaurantId
      );
      // Save the updated list of saved restaurants to AsyncStorage
      await AsyncStorage.setItem(
        "savedRestaurants",
        JSON.stringify(updatedSavedRestaurants)
      );
      setSaved(false);
      console.log("Restaurant unsaved successfully!");
    } catch (error) {
      console.error("Error unsaving restaurant:", error);
    }
  };

  const toggleSave = () => {
    if (saved) {
      unsaveRestaurant();
    } else {
      saveRestaurant();
    }
  };

  const placeholderImage = require("../assets/FoodVenturePlaceholder.png");

  return (
    <View
      style={[
        styles.container,
        styles.bottomMargins,
        styles.alignItemsLeft,
        styles.width80,
        styles.alignSelfCenter,
      ]}
    >
      <Pressable onPress={toggleSave}>
        <View style={[styles.horizontalAlign, styles.justifySpaceBetween]}>
          <Text style={[styles.signa28]}>{name}</Text>
          <Image
            style={[styles.icon]}
            source={
              saved
                ? require("../assets/saveFilled.png")
                : require("../assets/save.png")
            }
          />
        </View>
        <RatingImage star_rating={star_rating} />
      </Pressable>
      <Pressable
        onPress={() =>
          navigation.navigate("RestaurantScreen", { restaurantId })
        }
      >
        <Image
          source={image ? { uri: image } : placeholderImage}
          style={[
            styles.image,
            styles.lessBottomMargins,
            styles.alignSelfCenter,
            styles.width100,
          ]}
        />
      </Pressable>
      <Text style={[styles.merri19Bold, styles.lessBottomMargins]}>
        {address}
      </Text>
      <Text style={[styles.merri17, styles.lessBottomMargins]}>
        {description}
      </Text>
      <Pressable onPress={() => Linking.openURL(website)}>
        <Text style={[styles.link, styles.bottomMargins]}>Restaurant Link</Text>
      </Pressable>
      {/* <Pressable onPress={handlePress}></Pressable> */}
      <View style={[styles.contentSeperatorContainer]}>
        <View style={[styles.line, styles.bottomMargins]} />
      </View>
    </View>
  );
};

export default Restaurants;
