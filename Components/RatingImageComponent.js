
import React from "react";
import { Image } from "react-native";
import styles from "../styles";

const RatingImage = ({ star_rating }) => {
  const displayedRating = Math.max(parseFloat(star_rating || 0), 1); // Ensure minimum of 1
  const roundedRating = Math.round(displayedRating * 2) / 2; // Round to nearest half star

  const getRatingImage = () => {
    return require(`../assets/${roundedRating}stars.png`); // Assumes images like "1stars.png", "1.5stars.png", etc.
  };

  return (
    <Image source={getRatingImage()} style={[styles.starIcons]} />
  );
};

export default RatingImage;