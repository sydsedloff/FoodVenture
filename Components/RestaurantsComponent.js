import { StyleSheet, Image, Text, View, Pressable } from "react-native";
import styles from "../styles";
import RestaurantScreen from "../Screens/RestaurantScreen";
const Restaurants = ({
  name,
  image,
  address,
  description,
  website,
  navigation,
}) => {
  return (
    <View
      style={[styles.container, styles.bottomMargins, styles.alignItemsLeft]}
    >
      <Pressable onPress={() => navigation.navigate(RestaurantScreen)}>
        <Text style={[styles.signa28]}>{name}</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate(RestaurantScreen)}>
        <Image
          source={{ uri: image }}
          style={[styles.image, styles.lessBottomMargins]}
        ></Image>
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
      <Pressable onPress={() => navigation.navigate(RestaurantScreen)}>
        {/* Will need to grab key for restaurant screen */}
      </Pressable>
      <View style={[styles.contentSeperatorContainer]}>
        <View style={[styles.line, styles.bottomMargins]} />
      </View>
    </View>
  );
};
export default Restaurants;
