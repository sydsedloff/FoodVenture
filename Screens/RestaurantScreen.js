import React, { useState, useEffect } from "react";
import { View, SafeAreaView, Text, Pressable, Image } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import styles from "../styles";
import ReservationScreen from "./ReservationScreen";
import NavigationBar from "../Components/NavigationBar";
import HeaderComponent from "../Components/HeaderComponent";
import RatingImage from "../Components/RatingImageComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RestaurantSingle = ({ name, image, address, description, website }) => {
  return (
    <SafeAreaView style={[styles.container, styles.alignItemsLeft]}>
      <View style={[styles.horizontalAlign, styles.justifySpaceBetween]}>
        <Text style={[styles.signa32]}>{name}</Text>
        <Image
          style={[styles.icon]}
          source={require("../assets/save.png")}
        ></Image>
      </View>

      <Image
        source={{ uri: image }}
        style={[
          styles.image,
          styles.alignSelfCenter,
          styles.width100,
          styles.bottomPadding,
        ]}
      ></Image>
      <View
        style={[
          styles.horizontalAlign,
          styles.justifySpaceBetween,
          styles.width100,
        ]}
      >
        <Text style={[styles.merri17]}>2.5 miles</Text>
        <RatingImage
          star_rating={4}
          style={{ position: "relative", zIndex: 1, opacity: 1 }}
        />
      </View>

      <Text style={[styles.merri19Bold, styles.lessBottomMargins]}>
        {address}
      </Text>
      <Text style={[styles.merri17, styles.lessBottomMargins]}>
        {description}
      </Text>
      <Text style={[styles.link]} href={[website]}>
        Restaurant Link
      </Text>
    </SafeAreaView>
  );
};

export default function RestaurantScreen({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(null);
  const [partySize, setPartySize] = useState(null);
  const [mealTime, setMealTime] = useState(null);
  useEffect(() => {
    async function getSavedRestaurantData() {
      try {
        const savedData = await AsyncStorage.getItem("savedRestaurant");
        console.log(savedData);
        if (savedData) {
          const parsedData = JSON.parse(savedData);
          setRestaurantData(parsedData);
        } else {
          console.log("No saved restaurant data found.");
        }
      } catch (error) {
        console.error("Error retrieving saved restaurant data:", error);
      }
    }

    getSavedRestaurantData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent />

      <View style={styles.width80}>
        {restaurantData === null ? (
          <Text>Loading restaurant data...</Text> // Display loading message
        ) : (
          <RestaurantSingle
            name={restaurantData.name}
            image={restaurantData.image}
            address={restaurantData.address}
            description={restaurantData.description}
            website={restaurantData.website}
          />
        )}

        <View style={[styles.smallNegativeMargins, { marginTop: -180 }]}>
          <Text style={[styles.signa28, styles.width100, styles.bottomMargins]}>
            Request a reservation
          </Text>
          <View style={styles.bottomMargins}>
            <View>
              <Text style={styles.merri19Bold}>Party Size</Text>
              <DropDownPicker
                open={partySize !== null}
                value={partySize}
                items={[
                  { label: "1", value: "1" },
                  { label: "2", value: "2" },
                  { label: "3", value: "3" },
                  { label: "4", value: "4" },
                  { label: "5", value: "5" },
                  { label: "6+", value: "6+" },
                ]}
                setOpen={() => setPartySize(null)}
                setValue={setPartySize}
                setItems={() => {}}
              />
              <Text style={styles.merri19Bold}>Preferred Meal Time</Text>
              <DropDownPicker
                open={mealTime !== null}
                value={mealTime}
                items={[
                  { label: "Breakfast", value: "Breakfast" },
                  { label: "Lunch", value: "Lunch" },
                  { label: "Dinner", value: "Dinner" },
                ]}
                setOpen={() => setMealTime(null)}
                setValue={setMealTime}
                setItems={() => {}}
              />
            </View>
          </View>

          <Pressable
            style={[styles.buttonLarge.r, { marginBottom: 100 }]}
            onPress={() => navigation.navigate(ReservationScreen)}
          >
            <Text style={[styles.buttonLargeText.y]}>Request Reservation</Text>
          </Pressable>
        </View>
      </View>

      <NavigationBar />
    </SafeAreaView>
  );
}
