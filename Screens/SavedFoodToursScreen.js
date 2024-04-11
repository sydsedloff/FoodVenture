import React, { useEffect } from "react";
import { View, Text, Image, Pressable, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles";
import HeaderComponent from "../Components/HeaderComponent";
import NavigationBar from "../Components/NavigationBar";
import RatingImage from "../Components/RatingImageComponent";
import SavedFoodToursMenuScreen from "./SavedFoodToursMenuScreen";
import SavedScreen from "./SavedScreen";
import { localhost } from "../Components/localHostID";

// Define the RestaurantSingle component
const RestaurantSingle = ({
  name,
  image,
  address,
  description,
  website,
  myMealName,
  onSwapPress,
}) => {
  return (
    <SafeAreaView
      style={[
        styles.container,
        styles.alignItemsLeft,
        styles.contentContainer.sharpCorner,
        styles.alignItemsLeft,
        styles.width80,
      ]}
    >
      <Text style={[styles.signa32, styles.bold]}>{myMealName}</Text>
      <Image
        source={{ uri: image }}
        style={[styles.image, styles.alignSelfCenter]}
      ></Image>
      <View
        style={[
          styles.horizontalAlign,
          styles.justifySpaceBetween,
          styles.width100,
        ]}
      >
        <Text style={[styles.signa24, styles.bold]}>{name}</Text>
        <RatingImage
          star_rating={4}
          style={{ position: "relative", zIndex: 1, opacity: 1 }}
        />
      </View>
      <Text style={[styles.dollarText, styles.lessBottomMargins]}>
        {address}
      </Text>

      <Pressable onPress={() => Linking.openURL(website)}>
        <Text style={[styles.link, styles.bottomMargins]}>Restaurant Link</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default function SavedFoodToursScreen({ navigation, route }) {
  const mealNames = ["Breakfast", "Lunch", "Dinner", "Dessert", "Drinks"];
  const { tour } = route.params;
  console.log(tour._id);

  const unsaveFoodTour = async () => {
    try {
      console.log("unsaving food tour...");
      const userEmail = await AsyncStorage.getItem("userEmail");
      const response = await fetch(
        `http://${localhost}/api/unsaveFoodTour/${userEmail}/${tour._id}`,
        {
          method: "DELETE",
        }
      ).then(navigation.navigate(SavedScreen));

      if (response.ok) {
        console.log("Tour unsaved successfully");
      } else {
        console.error("Failed to unsave food tour");
      }
    } catch (error) {
      console.error("Error unsaving food tour:", error);
    }
  };

  return (
    <View>
      <HeaderComponent />
      <View style={[styles.container]}>
        <Pressable
          style={[styles.buttonLarge.r, styles.width80]}
          onPress={() => unsaveFoodTour()}
        >
          <Text style={[styles.buttonLargeText.y]}>Unsave</Text>
        </Pressable>
        {Object.keys(tour)
          .slice(0, 5)
          .map((key, index) => (
            <RestaurantSingle
              key={index}
              name={tour[key].name}
              image={tour[key].image}
              address={tour[key].address}
              description={tour[key].description}
              website={tour[key].website}
              myMealName={mealNames[index % mealNames.length]}
            />
          ))}
      </View>
      <NavigationBar />
    </View>
  );
}
