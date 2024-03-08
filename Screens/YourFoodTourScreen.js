import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Pressable,
  Alert,
} from "react-native";
import styles from "../styles";
import HeaderComponent from "../Components/HeaderComponent";
import NavigationBar from "../Components/NavigationBar";
import RestaurantSingle from "../Components/RestaurantSingle"; // Import your RestaurantSingle component

export default function YourFoodTourScreen({ navigation, route }) {
  const { filterData } = route.params || {};
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);
  const mealNames = ["Breakfast", "Lunch", "Dinner", "Dessert", "Drinks"];

  useEffect(() => {
    async function getRestaurantData() {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/searchRestaurants",
          {
            params: { term: "food" },
          }
        );
        if (response.status === 200) {
          const uniqueRandomIndices = new Set();
          while (uniqueRandomIndices.size < 5) {
            uniqueRandomIndices.add(
              Math.floor(Math.random() * response.data.businesses.length)
            );
          }
          const selectedRestaurants = Array.from(uniqueRandomIndices).map(
            (index) => response.data.businesses[index]
          );
          setSelectedRestaurants(selectedRestaurants);
        }
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    }

    getRestaurantData();
  }, []);

  const handleSaveTour = async () => {
    try {
      // Send selected restaurants data to server to save in the database
      const response = await axios.post(
        "http://localhost:3000/api/saveTour",
        selectedRestaurants
      );
      if (response.status === 200) {
        Alert.alert("Success", "Tour saved successfully!");
      } else {
        Alert.alert("Error", "Failed to save tour. Please try again later.");
      }
    } catch (error) {
      console.error("Error saving tour:", error);
      Alert.alert("Error", "Failed to save tour. Please try again later.");
    }
  };

  return (
    <View>
      <HeaderComponent />
      <View style={[styles.container]}>
        <Text style={[styles.pageHeaders]}>Your Food Tour</Text>
        <Pressable
          style={[
            styles.buttonLarge.r,
            styles.horizontalAlign,
            styles.width70,
            styles.contentJustify,
          ]}
          onPress={handleSaveTour} // Call handleSaveTour function on button press
        >
          <Text style={[styles.buttonLargeText.y]}>Regenerate Tour</Text>
          <Image
            style={[styles.icon]}
            source={require("../assets/switchYellow.png")}
          ></Image>
        </Pressable>
        <Pressable
          style={[
            styles.buttonLarge.y,
            styles.horizontalAlign,
            styles.width70,
            styles.contentJustify,
          ]}
          onPress={handleSaveTour} // Call handleSaveTour function on button press
        >
          <Text style={[styles.buttonLargeText.r]}>Save Tour</Text>
          <Image
            style={[styles.icon]}
            source={require("../assets/save.png")}
          ></Image>
        </Pressable>

        <View style={[styles.container]}>
          {selectedRestaurants.map((restaurant, index) => (
            <RestaurantSingle
              key={index}
              name={restaurant.name}
              image={restaurant.image_url}
              address={restaurant.location.display_address.join(", ")}
              description={`Rating: ${restaurant.rating}`}
              website={restaurant.url}
              myMealName={mealNames[index % mealNames.length]} // Cycle through meal names
            />
          ))}
        </View>
        <NavigationBar />
      </View>
    </View>
  );
}
