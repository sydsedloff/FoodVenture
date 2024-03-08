import { React, useState, useEffect } from "react";
import {
  Image,
  Text,
  TextInput,
  View,
  FlatList,
  Pressable,
} from "react-native";
import axios from "axios";
import styles from "../styles";
import FilterSidebar from "./FilterSidebar";
import NavigationBar from "../Components/NavigationBar";
import HeaderComponent from "../Components/HeaderComponent";
import Restaurants from "../Components/RestaurantsComponent";

export default function HomeScreen({ navigation, route }) {
  const [restaurantData, setRestaurantData] = useState(null);
  useEffect(() => {
    async function getRestaurantData() {
      console.log("Fetching restaurant data...");
      try {
        const response = await axios.get(
          "http://localhost:3000/api/searchRestaurants",
          {
            params: {
              term: "food",
            },
          }
        );
        console.log("Response received:", response.data);
        if (response.status === 200) {
          setRestaurantData(response.data.businesses);
        } else {
          console.error("Failed to fetch restaurant data");
        }
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    }

    getRestaurantData();
  }, []);
  const { filterData } = route.params || {};

  const restaurantResults = restaurantData;
  function filterRestaurants(restaurants, filterData) {
    if (!filterData) {
      return restaurants;
    }

    const allFiltersFalse = Object.values(filterData).every((value) => !value);

    // If all filters are false, return all restaurants
    if (allFiltersFalse) {
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

  // Apply filters to the restaurants data
  console.log("Filtered restaurants:", filteredRestaurants);
  const filteredRestaurants = filterRestaurants(restaurantResults, filterData);
  return (
    <View style={[styles.container]}>
      <HeaderComponent />
      <Image
        style={[styles.smallerLogo, styles.bottomMargins]}
        source={require("../assets/FViconYellow.png")}
      />
      <View style={[styles.bottomPadding]}>
        <View
          style={[
            styles.horizontalAlign,
            styles.bottomMargins,
            styles.contentJustify,
          ]}
        >
          <View
            style={[styles.searchBar, styles.horizontalAlign, styles.width80]}
          >
            <Image
              source={require("../assets/search.png")}
              style={[styles.searchBarIcon]}
            ></Image>
            <TextInput placeholder="Search" style={[styles.searchBarText]} />
          </View>

          <Pressable onPress={() => navigation.navigate(FilterSidebar)}>
            <Image
              source={require("../assets/filter.png")}
              style={[styles.smallerIcons]}
            ></Image>
          </Pressable>
        </View>
        {/*CONDITIONAL TO FILLED FILTER ICON IF FILTERING IS ON*/}

        {filteredRestaurants ? (
          <FlatList
            data={filteredRestaurants}
            renderItem={({ item }) => (
              <Restaurants
                name={item.name}
                image={item.image_url}
                address={item.location.display_address.join(", ")}
                description={item.categories
                  .map((category) => category.title)
                  .join(", ")}
                website={item.url}
                navigation={navigation}
                star_rating={item.rating}
                restaurantId={item.id}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
      <NavigationBar />
    </View>
  );
}
