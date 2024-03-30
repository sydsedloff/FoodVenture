import React, { useState, useEffect } from "react";
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
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    async function getRestaurantData() {
      console.log("Fetching restaurant data...");
      try {
        const uniqueRestaurantIds = new Set();
        const restaurantDataArray = [];

        const responses = await Promise.all([
          axios.get("http://localhost:3000/api/searchRestaurants/", {
            params: { term: "food" },
          }),
          axios.get("http://localhost:3000/api/searchRestaurants/gluten_free", {
            params: { term: "gluten free" },
          }),
          axios.get("http://localhost:3000/api/searchRestaurants/pescatarian", {
            params: { term: "pescatarian" },
          }),
          axios.get("http://localhost:3000/api/searchRestaurants/vegan", {
            params: { term: "vegan" },
          }),
          axios.get("http://localhost:3000/api/searchRestaurants/vegetarian", {
            params: { term: "vegetarian" },
          }),
        ]);

        responses.forEach((response) => {
          response.data.businesses.forEach((restaurant) => {
            if (!uniqueRestaurantIds.has(restaurant.id)) {
              uniqueRestaurantIds.add(restaurant.id);
              restaurantDataArray.push(restaurant);
            }
          });
        });

        console.log("Response received:", restaurantDataArray);
        setRestaurantData(restaurantDataArray);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    }

    getRestaurantData();
  }, []);

  const { filterData } = route.params || {};

  const filteredRestaurants = restaurantData.filter((restaurant) => {
    // Implement your filtering logic here based on filterData
    // This is a placeholder for your actual filtering logic
    return true;
  });

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

        {restaurantData.length > 0 ? (
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
