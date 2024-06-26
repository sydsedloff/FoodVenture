import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Pressable,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import axios from "axios";
import styles from "../styles";
import HeaderComponent from "../Components/HeaderComponent";
import NavigationBar from "../Components/NavigationBar";
import RatingImage from "../Components/RatingImageComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SavedFoodToursMenuScreen from "./SavedFoodToursMenuScreen";
import { Colors } from "../colors";
import { localhost } from "../Components/localHostID";

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
      <View
        style={[
          styles.horizontalAlign,
          { justifyContent: "center", width: "100%" },
        ]}
      >
        <Pressable style={[styles.horizontalAlign]} onPress={onSwapPress}>
          <Image
            source={require("../assets/switchRed.png")}
            style={[styles.smallerIcons]}
          ></Image>
          <Text style={[styles.merri17]}>Swap</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default function YourFoodTourScreen({ navigation, route }) {
  const [restaurantData, setRestaurantData] = useState([]);
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);
  const [tourSaved, setTourSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const mealNames = ["Breakfast", "Lunch", "Dinner", "Dessert", "Drinks"];

  useEffect(() => {
    async function getRestaurantData() {
      setIsLoading(true); // Start loading
      try {
        const { filterData } = route.params || {};
        const response = await axios.get(
          `http://${localhost}/api/searchRestaurants?${filterData}`
        );
        if (response.status === 200) {
          const allRestaurants = response.data.businesses;
          setRestaurantData(allRestaurants);
          const uniqueRandomIndices = new Set();
          while (uniqueRandomIndices.size < 5) {
            uniqueRandomIndices.add(
              Math.floor(Math.random() * allRestaurants.length)
            );
          }
          const selectedRestaurants = Array.from(uniqueRandomIndices).map(
            (index) => allRestaurants[index]
          );
          setSelectedRestaurants(selectedRestaurants);
        }
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      } finally {
        setIsLoading(false); // End loading
      }
    }

    getRestaurantData();
  }, []);

  function handleSwap(index) {
    const updatedSelectedRestaurants = [...selectedRestaurants];
    const allRestaurants = restaurantData || [];
    const newIndex = Math.floor(Math.random() * allRestaurants.length);
    updatedSelectedRestaurants[index] = allRestaurants[newIndex];
    setSelectedRestaurants(updatedSelectedRestaurants);
  }

  async function saveTour() {
    try {
      const userEmail = await AsyncStorage.getItem("userEmail");
      console.log("user email is: " + userEmail);

      const restaurantsArray = selectedRestaurants.map((restaurant) => ({
        name: restaurant.name,
        image: restaurant.image_url,
        address: restaurant.location.display_address.join(", "),
        description: `Rating: ${restaurant.rating}`,
        website: restaurant.url,
      }));

      console.log("filtered restaurants:", restaurantsArray);
      setTourSaved(true);
      console.log(tourSaved);
      // Update the database with the new tour data
      const response = await fetch(
        `http://${localhost}/api/${userEmail}/${restaurantsArray}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userEmail: userEmail,
            savedTours: restaurantsArray,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save tour");
      }

      console.log("Tour saved successfully");
    } catch (error) {
      console.log("Error saving tour:", error);
    }
  }

  return (
    <SafeAreaView style={[{ flex: 1, height: "100%" }]}>
      <HeaderComponent />
      <ScrollView>
        {isLoading ? (
          <ActivityIndicator size="large" color="#9a0000" />
        ) : (
          <View
            style={[
              styles.container,
              styles.paddingTopHeader,
              { paddingBottom: 100 },
            ]}
          >
            {tourSaved ? (
              <View>
                <Text style={[styles.buttonLargeText.y]}>
                  Your food tour has been saved
                </Text>
                <Pressable
                  onPress={() => navigation.navigate(SavedFoodToursMenuScreen)}
                >
                  <Text
                    style={[
                      styles.alignSelfCenter,
                      styles.merri17,
                      { color: Colors.red, textDecorationLine: "underline" },
                    ]}
                  >
                    View Saved Food Tours
                  </Text>
                </Pressable>
              </View>
            ) : (
              <Pressable
                style={[
                  styles.buttonLarge.y,
                  styles.horizontalAlign,
                  styles.width70,
                  styles.contentJustify,
                ]}
                onPress={() => saveTour()}
              >
                <Text style={[styles.buttonLargeText.r]}>Save Tour</Text>
                <Image
                  style={[styles.icon]}
                  source={require("../assets/save.png")}
                ></Image>
              </Pressable>
            )}

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
                  onSwapPress={() => handleSwap(index)}
                />
              ))}
            </View>
          </View>
        )}
      </ScrollView>
      <NavigationBar />
    </SafeAreaView>
  );
}
