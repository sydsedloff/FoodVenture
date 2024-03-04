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
          setRestaurantData(response.data.businesses); // Adjusted to access the businesses array
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
  console.log(restaurantData);
  const restaurantResults = restaurantData;
  function filterRestaurants(restaurants, filterData) {
    if (!filterData) {
      return restaurants;
    }

    return restaurants.filter((restaurant) => {
      if (
        filterData.isGlutenFree &&
        !restaurant.keywords.includes("gluten-free")
      ) {
        return false;
      }
      if (filterData.isKosher && !restaurant.keywords.includes("kosher")) {
        return false;
      }
      if (
        filterData.isPescatarian &&
        !restaurant.keywords.includes("pescatarian")
      ) {
        return false;
      }
      if (filterData.isVegan && !restaurant.keywords.includes("vegan")) {
        return false;
      }
      if (
        filterData.isVegetarian &&
        !restaurant.keywords.includes("vegetarian")
      ) {
        return false;
      }
      if (filterData.isDistance0_10 && restaurant.distance !== "0-10") {
        return false;
      }
      if (filterData.isDistance12_30 && restaurant.distance !== "12-30") {
        return false;
      }
      if (filterData.isDistance11_20 && restaurant.distance !== "11-20") {
        return false;
      }
      if (filterData.isDistance31_plus && restaurant.distance === "31 plus") {
        return false;
      }
      if (filterData.isAmerican && !restaurant.keywords.includes("american")) {
        return false;
      }
      if (filterData.isJapanese && !restaurant.keywords.includes("japanese")) {
        return false;
      }
      if (filterData.isIndian && !restaurant.keywords.includes("indian")) {
        return false;
      }
      if (
        filterData.isCaribbean &&
        !restaurant.keywords.includes("caribbean")
      ) {
        return false;
      }
      if (filterData.isKorean && !restaurant.keywords.includes("korean")) {
        return false;
      }
      if (filterData.isFrench && !restaurant.keywords.includes("french")) {
        return false;
      }
      if (filterData.isBBQ && !restaurant.keywords.includes("bbq")) {
        return false;
      }
      if (filterData.isItalian && !restaurant.keywords.includes("italian")) {
        return false;
      }
      if (filterData.isChinese && !restaurant.keywords.includes("chinese")) {
        return false;
      }
      if (filterData.isGreek && !restaurant.keywords.includes("greek")) {
        return false;
      }
      if (filterData.isMexican && !restaurant.keywords.includes("mexican")) {
        return false;
      }
      if (filterData.isThai && !restaurant.keywords.includes("thai")) {
        return false;
      }
      if (filterData.isSeafood && !restaurant.keywords.includes("seafood")) {
        return false;
      }
      if (filterData.isPizza && !restaurant.keywords.includes("pizza")) {
        return false;
      }

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
          <View style={[styles.searchBar, styles.horizontalAlign, styles.width80]}>
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
                address={item.location.address1}
                description={item.categories
                  .map((category) => category.title)
                  .join(", ")}
                website={item.url}
                navigation={navigation}
                star_rating={item.rating}
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
