import React, { useEffect } from "react";
import { View, Text, Image, Pressable, SafeAreaView } from "react-native";
import styles from "../styles";
import HeaderComponent from "../Components/HeaderComponent";
import NavigationBar from "../Components/NavigationBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RatingImage from "../Components/RatingImageComponent";

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

  useEffect(() => {
    async function fetchSavedTour() {
      const savedFoodTours = await AsyncStorage.getItem("savedFoodTours");
      // Handle your savedFoodTours data here if needed
    }
    fetchSavedTour();
  }, []);

  return (
    <View>
      <HeaderComponent />
      <View style={[styles.container]}>
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
