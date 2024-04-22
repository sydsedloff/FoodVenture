import React, { useState, useEffect } from "react";
import { Text, Image, View, Pressable, SafeAreaView } from "react-native";
import styles from "../styles";
import HeaderComponent from "../Components/HeaderComponent";
import NavigationBar from "../Components/NavigationBar";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { localhost } from "../Components/localHostID";

export default function SavedFoodToursMenuScreen({ navigation }) {
  const [savedTours, setSavedTours] = useState([]);

  useEffect(() => {
    async function fetchSavedTours() {
      try {
        const userEmail = await AsyncStorage.getItem("userEmail");
        const response = await axios.get(
          `http://${localhost}/api/${userEmail}/savedTours`
        );
        if (response.status === 200) {
          await AsyncStorage.setItem(
            "savedFoodTours",
            JSON.stringify(response.data.savedTours)
          );
          setSavedTours(response.data.savedTours);
          console.log(response.data);
          console.log(savedTours);
        }
      } catch (error) {
        console.log("Error fetching saved tours:", error);
      }
    }

    fetchSavedTours();
  }, []);

  const handleTourPress = (tour) => {
    console.log(tour);
    navigation.navigate("SavedFoodToursScreen", { tour });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderComponent navigation={navigation} />
      <View style={[styles.container, styles.paddingTopHeader]}>
        <Text style={[styles.pageHeaders, styles.bottomMargins]}>
          Saved Food Tours
        </Text>
        {savedTours.map((tour, index) => (
          <Pressable
            key={index}
            style={styles.contentContainer.red}
            onPress={() => handleTourPress(tour)}
          >
            <Text style={[styles.pageHeaders]}>Tour #{index + 1}</Text>
            <Image
              source={require("../assets/binoculars.png")}
              style={[styles.savedPageIcons]}
            />
          </Pressable>
        ))}
      </View>
      <NavigationBar />
    </SafeAreaView>
  );
}
