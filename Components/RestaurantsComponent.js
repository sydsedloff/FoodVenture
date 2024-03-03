import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "../styles";
import RestaurantScreen from "../Screens/RestaurantScreen";
import RatingImage from "./RatingImageComponent";

const Restaurants = ({
  name,
  image,
  address,
  description,
  website,
  navigation,
  star_rating,
}) => {
  const [saved, setSaved] = useState(false);

  const handlePress = () => {
    navigation.navigate("RestaurantScreen");
  };

  const toggleSave = () => {
    setSaved(!saved);
  };

  const placeholderImage = require("../assets/FoodVenturePlaceholder.png");

  return (
    <View
      style={[styles.container, styles.bottomMargins, styles.alignItemsLeft]}
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
          source={image ? { uri: image } : placeholderImage}
          style={[styles.image, styles.lessBottomMargins]}
        />
      </Pressable>
      <Text style={[styles.merri19Bold, styles.lessBottomMargins]}>
        {address}
      </Text>
      <Text style={[styles.merri17, styles.lessBottomMargins]}>
        {description}
      </Text>
      <Text style={[styles.link, styles.bottomMargins]} href={[website]}>
        {website}
      </Text>
      <Pressable onPress={handlePress}>
        {/* Will need to grab key for restaurant screen */}
      </Pressable>
      <View style={[styles.contentSeperatorContainer]}>
        <View style={[styles.line, styles.bottomMargins]} />
      </View>
    </View>
  );
};

export default Restaurants;
