import React from "react";
import { Image } from "react-native";
import styles from "../styles";

const RatingImage = ({ star_rating }) => {
  const numericRating = parseFloat(star_rating);
  const roundedRating = Math.round(numericRating * 2) / 2;

  const getRatingImage = () => {
    switch (roundedRating) {
      case 0.5:
        return require(`../assets/0.5stars.png`);
      case 1:
        return require(`../assets/1stars.png`);
      case 1.5:
        return require(`../assets/1.5stars.png`);
      case 2:
        return require(`../assets/2stars.png`);
      case 2.5:
        return require(`../assets/2.5stars.png`);
      case 3:
        return require(`../assets/3stars.png`);
      case 3.5:
        return require(`../assets/3.5stars.png`);
      case 4:
        return require(`../assets/4stars.png`);
      case 4.5:
        return require(`../assets/4.5stars.png`);
      case 5:
        return require(`../assets/5stars.png`);
      default:
        return require("../assets/x.png");
    }
  };

  return <Image source={getRatingImage()} style={[styles.starIcons]} />;
};

export default RatingImage;
