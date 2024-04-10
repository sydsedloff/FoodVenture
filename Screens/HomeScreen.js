import React, { useState, useEffect } from "react";
import {
  Image,
  Text,
  TextInput,
  View,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import styles from "../styles";
import FilterSidebar from "./FilterSidebar";
import NavigationBar from "../Components/NavigationBar";
import HeaderComponent from "../Components/HeaderComponent";
import Restaurants from "../Components/RestaurantsComponent";

export default function HomeScreen({ navigation, route }) {
  const [restaurantData, setRestaurantData] = useState(null);
  const [filterIcon, setFilterIcon] = useState(require("../assets/filter.png"));
  const [isLoading, setIsLoading] = useState(true); // Loading state

  const { filterData } = route.params || {};
  console.log("Received filter data:", filterData);

  useEffect(() => {
    async function getRestaurantData() {
      setIsLoading(true); // Start loading
      try {
        const response = await axios.get(
          `http://localhost:3000/api/searchRestaurants?${filterData}`
        );
        console.log(
          "API call URL:",
          `http://localhost:3000/api/searchRestaurants?${filterData}`
        );
        if (response.status === 200) {
          console.log("API response data:", response.data);
          const allRestaurants = response.data.businesses;
          setRestaurantData(allRestaurants);
        }
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      } finally {
        setIsLoading(false); // End loading
      }
    }

    getRestaurantData();
  }, [filterData]);

  // useEffect(() => {
  //   // Parse the filterData string into an object
  //   const filters = new URLSearchParams(filterData);
  //   const filtersObject = {};
  //   if (filters instanceof URLSearchParams) {
  //     for (const [key, value] of filters.entries()) {
  //       filtersObject[key] = value === "true";
  //     }
  //   } else {
  //     console.error("filters is not a URLSearchParams object:", filters);
  //   }

  //   // Check if any filter (excluding selectedButton) is true
  //   const isAnyFilterTrue = Object.keys(filtersObject).some(
  //     (key) => key !== "selectedButton" && filtersObject[key]
  //   );

  //   if (isAnyFilterTrue) {
  //     console.log("Filter data is present, updating filter icon.");
  //     setFilterIcon(require("../assets/filterFilled.png"));
  //   } else {
  //     console.log("No filter data, resetting filter icon.");
  //     setFilterIcon(require("../assets/filter.png"));
  //   }
  // }, [filterData]);

  // HomeScreen.js

  // Inside the return statement of the HomeScreen component
  return (
    <View style={styles.container}>
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
            />
            <TextInput placeholder="Search" style={[styles.searchBarText]} />
          </View>
          <Pressable onPress={() => navigation.navigate(FilterSidebar)}>
            <Image source={filterIcon} style={[styles.smallerIcons]} />
          </Pressable>
        </View>
        {isLoading ? (
          <ActivityIndicator size="large" color="#9a0000" />
        ) : restaurantData && restaurantData.length > 0 ? (
          <FlatList
            data={restaurantData}
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
          <Text style={styles.noResultsText}>No results found</Text>
        )}
      </View>
      <NavigationBar />
    </View>
  );
}
