import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable, Linking } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles";
import RatingImage from "./RatingImageComponent";
import { localhost } from "./localHostID";
const SavedRestaurants = ({
  name,
  image,
  address,
  description,
  website,
  navigation,
  star_rating,
  restaurantId,
}) => {
  const [saved, setSaved] = useState(false); // Initialize as false

  const restaurantData = {
    name,
    image,
    address,
    description,
    website,
    star_rating,
    restaurantId,
  };

  const fetchSavedRestaurants = async () => {
    try {
      const userEmail = await AsyncStorage.getItem("userEmail");
      const response = await fetch(
        `http://${localhost}/api/userData/${userEmail}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch saved restaurants");
      }
      const userData = await response.json();
      const savedRestaurants = userData.savedRestaurants || [];
      setSaved(
        savedRestaurants.some(
          (restaurant) => restaurant.restaurantId === restaurantId
        )
      );
    } catch (error) {
      console.error("Error fetching saved restaurants:", error);
    }
  };

  useEffect(() => {
    fetchSavedRestaurants();
  }, [restaurantId]);

  async function saveRestaurantDB(restaurantData) {
    try {
      const userEmail = await AsyncStorage.getItem("userEmail");
      console.log("user email is: " + userEmail);

      // Update the database with the new restaurant data
      const response = await fetch(
        `http://${localhost}/api/saveRestaurant/${userEmail}`,
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
    const {
      name,
      address,
      description,
      website,
      star_rating,
      restaurantId,
      image,
    } = restaurantData;
    const dataToSave = {
      name,
      address,
      description,
      website,
      star_rating,
      restaurantId,
      image,
    };
    console.log(image);
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

export default SavedRestaurants;
