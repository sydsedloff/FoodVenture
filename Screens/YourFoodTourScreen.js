import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Text, Image, SafeAreaView, Pressable } from "react-native";
import styles from "../styles";
import HeaderComponent from "../Components/HeaderComponent";
import NavigationBar from "../Components/NavigationBar";
import SavedRestaurants from "../Components/SavedRestaurantsComponent";
import RatingImage from "../Components/RatingImageComponent";

const RestaurantSingle = ({
  name,
  image,
  address,
  description,
  website,
  myMealName,
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
      <View style={[styles.horizontalAlign, styles.justifySpaceBetween]}>
        <Pressable style={[styles.horizontalAlign]}>
          <Image
            source={require("../assets/switchRed.png")}
            style={[styles.smallerIcons]}
          ></Image>
          <Text style={[styles.merri17]}>Swap</Text>
        </Pressable>
        <Pressable style={[styles.horizontalAlign]}>
          <Text style={[styles.merri17]}>Delete</Text>
          <Image
            source={require("../assets/trash.png")}
            style={[styles.smallerIcons]}
          ></Image>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default function YourFoodTourScreen({ navigation, route }) {
  const { filterData } = route.params || {};
  const [restaurantData, setRestaurantData] = useState(null);
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);
  const mealNames = ["Breakfast", "Lunch", "Dinner", "Dessert", "Drinks"];
  const restaurantResults = selectedRestaurants;
  function filterRestaurants(restaurants, filterData) {
    if (!filterData) {
      return restaurants;
    }

    return restaurants.filter((restaurant) => {
      // Check if the restaurant is closed
      // if (filterData.isOpen && restaurant.is_closed) {
      //   return false;
      // }

      // // Check if the restaurant offers delivery
      // if (
      //   filterData.isDelivery &&
      //   !restaurant.transactions.includes("delivery")
      // ) {
      //   return false;
      // }

      // Check if the restaurant matches the selected price range
      if (
        filterData.selectedButton &&
        restaurant.price !== filterData.selectedButton
      ) {
        return false;
      }

      // // Check if the restaurant matches any of the selected dietary restrictions
      // if (
      //   (filterData.isGlutenFree && !restaurant.is_gluten_free) ||
      //   (filterData.isKosher && !restaurant.is_kosher) ||
      //   (filterData.isPescatarian && !restaurant.is_pescatarian) ||
      //   (filterData.isVegan && !restaurant.is_vegan) ||
      //   (filterData.isVegetarian && !restaurant.is_vegetarian)
      // ) {
      //   return false;
      // }

      // Check if the restaurant matches any of the selected cuisines
      if (
        !restaurant.categories.some(
          (category) =>
            (filterData.isAmerican && category.title === "American") ||
            (filterData.isJapanese && category.title === "Japanese") ||
            (filterData.isIndian && category.title === "Indian") ||
            (filterData.isCaribbean && category.title === "Caribbean") ||
            (filterData.isKorean && category.title === "Korean") ||
            (filterData.isFrench && category.title === "French") ||
            (filterData.isBBQ && category.title === "BBQ") ||
            (filterData.isItalian && category.title === "Italian") ||
            (filterData.isChinese && category.title === "Chinese") ||
            (filterData.isGreek && category.title === "Greek") ||
            (filterData.isMexican && category.title === "Mexican") ||
            (filterData.isThai && category.title === "Thai") ||
            (filterData.isSeafood && category.title === "Seafood") ||
            (filterData.isPizza && category.title === "Pizza")
        )
      ) {
        return false;
      }

      // Convert distance from meters to miles
      const distanceInMiles = restaurant.distance / 1609.34;
      // Check if the restaurant matches the selected distance
      // Check if the restaurant matches the selected distance
      if (
        (filterData.isDistance0_10 && distanceInMiles > 10) ||
        (filterData.isDistance12_30 &&
          (distanceInMiles < 12 || distanceInMiles > 30)) ||
        (filterData.isDistance11_20 &&
          (distanceInMiles < 11 || distanceInMiles > 20)) ||
        (filterData.isDistance31_plus && distanceInMiles <= 31)
      ) {
        return false;
      }

      // Add more conditions here based on your filterData structure and requirements

      return true;
    });
  }

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
          setRestaurantData(response.data.businesses);
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
  const filteredRestaurants = filterRestaurants(restaurantResults, filterData);
  return (
    <View>
      <HeaderComponent />
      <View style={[styles.container]}>
        <Text style={[styles.pageHeaders]}>Your Food Tour</Text>
        <Pressable
          style={[styles.buttonLarge.r, styles.horizontalAlign, styles.width70]}
        >
          <Text style={[styles.buttonLargeText.y]}>Regenerate Tour</Text>
          <Image
            style={[styles.icon]}
            source={require("../assets/switchYellow.png")}
          ></Image>
        </Pressable>
        <Pressable
          style={[styles.buttonLarge.y, styles.horizontalAlign, styles.width70]}
        >
          <Text style={[styles.buttonLargeText.r]}>Save Tour</Text>
          <Image
            style={[styles.icon]}
            source={require("../assets/save.png")}
          ></Image>
        </Pressable>

        <View style={[styles.container]}>
          {filteredRestaurants.map((restaurant, index) => (
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
