import React from "react";
import { Image } from "react-native";
import styles from "../styles";

// Import all possible images at the top
import oneStar from "../assets/1stars.png";
import oneHalfStar from "../assets/1.5stars.png";
import twoStars from "../assets/2stars.png";
import twoHalfStars from "../assets/2.5stars.png";
import threeStars from "../assets/3stars.png";
import threeHalfStars from "../assets/3.5stars.png";
import fourStars from "../assets/4stars.png";
import fourHalfStars from "../assets/4.5stars.png";
import fiveStars from "../assets/5stars.png";

// Create a mapping object
const ratingImages = {
  1: oneStar,
  1.5: oneHalfStar,
  2: twoStars,
  2.5: twoHalfStars,
  3: threeStars,
  3.5: threeHalfStars,
  4: fourStars,
  4.5: fourHalfStars,
  5: fiveStars,
};

const RatingImage = ({ star_rating }) => {
  let displayedRating = Math.max(parseFloat(star_rating || 0), 1); // Ensure minimum of 1
  let roundedRating = Math.round(displayedRating * 2) / 2; // Round to nearest half star

  // Use the mapping object to get the image path
  let getRatingImage = () => {
    return ratingImages[roundedRating.toString()];
  };

  return <Image source={getRatingImage()} style={[styles.starIcons]} />;
};

export default RatingImage;
