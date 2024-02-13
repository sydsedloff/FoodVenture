import React from "react";
import { Image } from "react-native";
import styles from "../styles";

const RatingImage = ({ star_rating }) => {
  const numericRating = parseFloat(star_rating);
  const roundedRating = Math.round(numericRating * 2) / 2;

  const getRatingImage = () => {
    return require(`../assets/${roundedRating}stars.png`);
  };

  return <Image source={getRatingImage()} style={[styles.starIcons]} />;
};

export default RatingImage;
