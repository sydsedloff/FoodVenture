import React from "react";
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
  const handlePress = () => {
    navigation.navigate(RestaurantScreen);
  };

  return (
    <View
      style={[styles.container, styles.bottomMargins, styles.alignItemsLeft]}
    >
      <Pressable onPress={handlePress}>
        <View style={[styles.horizontalAlign, styles.justifySpaceBetween]}>
          <Text style={[styles.signa28]}>{name}</Text>
          <Image style={[styles.icon]} source={require("../assets/save.png")} />
        </View>
        <RatingImage star_rating={star_rating} />
      </Pressable>
      <Pressable onPress={handlePress}>
        <Image
          source={{ uri: image }}
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
