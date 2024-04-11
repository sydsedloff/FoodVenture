import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles";
import HeaderComponent from "../Components/HeaderComponent";
import NavigationBar from "../Components/NavigationBar";
import Restaurants from "../Components/RestaurantsComponent";

export default function SavedRestaurantScreen({ navigation }) {
  const [savedRestaurants, setSavedRestaurants] = useState([]);

  useEffect(() => {
    fetchSavedRestaurants();
  }, []);

  const fetchSavedRestaurants = async () => {
    try {
      const userEmail = await AsyncStorage.getItem("userEmail");
      const response = await fetch(
        `http://localhost:3000/api/userData/${userEmail}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch saved restaurants");
      }
      const userData = await response.json();
      const savedRestaurants = userData.savedRestaurants || [];
      // Update the state with the fetched saved restaurants data
      console.log(savedRestaurants);
      setSavedRestaurants(savedRestaurants);
    } catch (error) {
      console.error("Error fetching saved restaurants:", error);
    }
  };

  return (
    <View>
      <HeaderComponent />
      <View style={[styles.container]}>
        <Text style={[styles.pageHeaders]}>Saved Restaurants</Text>

        {savedRestaurants.length === 0 ? (
          <View style={[styles.backgroundImage]}>
            <Text style={[styles.noSavedRestaurantsText]}>
              No saved restaurants found
            </Text>
          </View>
        ) : (
          <FlatList
            data={savedRestaurants}
            renderItem={({ item }) => (
              <Restaurants
                name={item.name}
                image={item.image}
                address={item.address}
                description={item.description}
                website={item.website}
                navigation={navigation}
                star_rating={item.star_rating}
                restaurantId={item.id}
              />
            )}
            keyExtractor={(item) => item.restaurantId}
          />
        )}
      </View>
      <NavigationBar />
    </View>
  );
}
