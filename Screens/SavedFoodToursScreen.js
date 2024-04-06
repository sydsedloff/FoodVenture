import React, { useEffect } from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "../styles";
import HeaderComponent from "../Components/HeaderComponent";
import NavigationBar from "../Components/NavigationBar";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Define the RestaurantSingle component
const RestaurantSingle = ({
  name,
  image,
  address,
  website,
  description,
  myMealName,
}) => {
  return (
    <View style={[styles.container, styles.restaurantContainer]}>
      <Text style={styles.restaurantName}>{name}</Text>
      <Image source={{ uri: image }} style={styles.restaurantImage} />
      <Text style={styles.restaurantAddress}>{address}</Text>
      <Text style={styles.restaurantDescription}>{description}</Text>
      <Pressable onPress={() => Linking.openURL(website)}>
        <Text style={[styles.link, styles.bottomMargins]}>Restaurant Link</Text>
      </Pressable>
      <Text style={styles.mealName}>{myMealName}</Text>
    </View>
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
        {Object.keys(tour).map((key, index) => (
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
