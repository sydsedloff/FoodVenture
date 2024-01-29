import { Image, Text, View, Pressable } from "react-native";
import styles from "../styles";
import RestaurantScreen from "../Screens/RestaurantScreen";
import RatingImage from "./RatingImageComponent";
const SavedRestaurants = ({
  name,
  image,
  address,
  description,
  website,
  navigation,
  star_rating,
}) => {
  return (
    <View
      style={[
        styles.container,
        styles.bottomMargins,
        styles.alignItemsLeft,
        styles.contentContainer.sharpCorner,
        styles.sideSpacing,
        styles.alignSelfCenter,
      ]}
    >
      <Pressable
        onPress={() => navigation.navigate(RestaurantScreen)}
        style={[styles.width100]}
      >
        <View style={[styles.horizontalAlign, styles.justifySpaceBetween]}>
          <Text style={[styles.signa28]}>{name}</Text>
          <Image
            style={[styles.icon]}
            source={require("../assets/save.png")}
          ></Image>
        </View>
        <RatingImage star_rating={star_rating} />
      </Pressable>
      <Pressable onPress={() => navigation.navigate(RestaurantScreen)}>
        <Image
          source={{ uri: image }}
          style={[
            styles.image,
            styles.lessBottomMargins,
            styles.alignSelfCenter,
            styles.sideBuffer,
          ]}
        ></Image>
      </Pressable>
      <Text
        style={[styles.merri19Bold, styles.lessBottomMargins, styles.width100]}
      >
        {address}
      </Text>
      <Text
        style={[
          styles.link,
          styles.bottomMargins,
          styles.alignSelfLeft,
          styles.width100,
        ]}
        href={[website]}
      >
        {website}
      </Text>
      <Pressable onPress={() => navigation.navigate(RestaurantScreen)}>
        {/* Will need to grab key for restaurant screen */}
      </Pressable>
    </View>
  );
};
export default SavedRestaurants;
