// RestaurantsComponent.js
import React, { useState } from "react";
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

  const restaurantData = {
    name,
    image,
    address,
    description,
    website,
    star_rating,
    restaurantId,
  };

  async function saveRestaurantDB(restaurantData) {
    try {
      const userEmail = await AsyncStorage.getItem("userEmail");
      console.log("user email is: " + userEmail);

      // Update the database with the new restaurant data
      const response = await fetch(
        `http://localhost:3000/api/saveRestaurant/${userEmail}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userEmail: userEmail,
            savedRestaurant: restaurantData,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save restaurant");
      }

      console.log("Restaurant saved successfully");
    } catch (error) {
      console.error("Error saving restaurant:", error);
    }
  }

  const saveRestaurant = async (restaurantData) => {
    try {
      const serializedData = JSON.stringify(restaurantData);
      await AsyncStorage.setItem("savedRestaurant", serializedData);
      console.log("Restaurant saved successfully!");
    } catch (error) {
      console.error("Error saving restaurant:", error);
    }
  };

  const handlePress = () => {
    saveRestaurant(restaurantData);
    navigation.navigate("RestaurantScreen", { params: { restaurantId } });
  };

  const toggleSave = async () => {
    setSaved(!saved);
    const { name, address, description, website, star_rating, restaurantId } =
      restaurantData;
    const dataToSave = {
      name,
      address,
      description,
      website,
      star_rating,
      restaurantId,
    };
    await saveRestaurantDB(dataToSave);
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
          <Text style={[styles.signa28]} onPress={handlePress}>
            {name}
          </Text>
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
      <Pressable onPress={handlePress}></Pressable>
      <View style={[styles.contentSeperatorContainer]}>
        <View style={[styles.line, styles.bottomMargins]} />
      </View>
    </View>
  );
};

export default Restaurants;
