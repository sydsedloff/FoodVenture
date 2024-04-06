import React, { useState, useEffect } from "react";
import { Text, Image, View, Pressable } from "react-native";
import styles from "../styles";
import SavedRestaurantScreen from "./SavedRestaurantsScreen";
import SavedFoodToursScreen from "./SavedFoodToursScreen";
import HeaderComponent from "../Components/HeaderComponent";
import NavigationBar from "../Components/NavigationBar";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SavedFoodToursMenuScreen({ navigation }) {
  const [savedTours, setSavedTours] = useState([]);

  useEffect(() => {
    async function fetchSavedTours() {
      try {
        const userEmail = await AsyncStorage.getItem("userEmail");
        const response = await axios.get(
          `http://localhost:3000/api/${userEmail}/savedTours`
        );
        if (response.status === 200) {
          setSavedTours(response.data.savedTours);
        }
      } catch (error) {
        console.log("Error fetching saved tours:", error);
      }
    }

    fetchSavedTours();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent navigation={navigation}></HeaderComponent>

      <View style={styles.container}>
        <Text style={[styles.pageHeaders, styles.bottomMargins]}>
          Saved Food Tours
        </Text>
        {savedTours.map((tour, index) => (
          <Pressable
            key={index}
            style={styles.contentContainer.red}
            onPress={() =>
              navigation.navigate(SavedFoodToursScreen, { tour: tour })
            }
          >
            <Text style={[styles.pageHeaders]}>Tour #{index + 1}</Text>
            <Image
              source={require("../assets/binoculars.png")}
              style={[styles.savedPageIcons]}
            ></Image>
          </Pressable>
        ))}
      </View>
      <NavigationBar />
    </View>
  );
}
