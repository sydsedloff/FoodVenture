import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable, Linking } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles";
import RatingImage from "./RatingImageComponent";
import { localhost } from "./localHostID";

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

  useEffect(() => {
    const checkSavedStatus = async () => {
      try {
        const userEmail = await AsyncStorage.getItem("userEmail");

        const response = await fetch(
          `http://${localhost}/api/checkSavedRestaurant/${userEmail}/${restaurantId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch saved status");
        }
        const data = await response.json();
        setSaved(data.saved);
      } catch (error) {
        console.error("Error checking saved status:", error);
      }
    };

    checkSavedStatus();
  }, [restaurantId]);

  const saveRestauranttoAsync = async (restaurantData) => {
    try {
      const serializedData = JSON.stringify(restaurantData);
      await AsyncStorage.setItem("savedRestaurant", serializedData);
      console.log("Restaurant saved successfully to async!");
    } catch (error) {
      console.error("Error saving restaurant to async:", error);
    }
  };

  const handlePress = () => {
    saveRestauranttoAsync(restaurantData);
    navigation.navigate("RestaurantScreen", { params: { restaurantId } });
  };

  const toggleSave = async () => {
    try {
      const restaurantData = {
        name,
        image,
        address,
        description,
        website,
        star_rating,
        restaurantId,
      };
      if (saved) {
        // If restaurant is already saved, unsave it
        setSaved(false);
        await unsaveRestaurant(restaurantId);
      } else {
        // If restaurant is not saved, save it
        setSaved(true);
        await saveRestaurantDB(restaurantData);
      }
    } catch (error) {
      console.error("Error toggling save status:", error);
    }
  };

  const saveRestaurantDB = async (restaurantData) => {
    try {
      const userEmail = await AsyncStorage.getItem("userEmail");
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
  };

  const unsaveRestaurant = async (restaurantId) => {
    try {
      const userEmail = await AsyncStorage.getItem("userEmail");
      const response = await fetch(
        `http://${localhost}/api/unsaveRestaurant/${userEmail}/${restaurantId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to unsave restaurant");
      }
      console.log("Restaurant unsaved successfully");
    } catch (error) {
      console.error("Error unsaving restaurant:", error);
    }
  };

  const placeholderImage = require("../assets/FoodVenturePlaceholder.png");

  return (
    <View
      style={[
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
      <Pressable onPress={handlePress}>
        <Image
          source={{ uri: image } || placeholderImage}
          style={[
            styles.image,
            styles.lessBottomMargins,
            styles.alignSelfCenter,
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
        <Text style={[styles.link, styles.bottomMargins]}>
          View Restaurant's Yelp Page
        </Text>
      </Pressable>
      <Pressable onPress={handlePress}></Pressable>
      <View style={[styles.contentSeperatorContainer]}>
        <View style={[styles.line, styles.bottomMargins]} />
      </View>
    </View>
  );
};

export default Restaurants;
