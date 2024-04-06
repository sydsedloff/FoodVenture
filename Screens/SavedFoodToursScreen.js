import React from "react";
import { View, Text, Image, SafeAreaView, Pressable } from "react-native";
import styles from "../styles";
import HeaderComponent from "../Components/HeaderComponent";
import NavigationBar from "../Components/NavigationBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Linking } from "react-native";
import axios from "axios";

const RestaurantSingle = ({
  name,
  image,
  address,
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
        <Pressable style={[styles.horizontalAlign]} onPress={onSwapPress}>
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

export default function SavedFoodToursScreen({ navigation, route }) {
  const mealNames = ["Breakfast", "Lunch", "Dinner", "Dessert", "Drinks"];
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
    <View>
      <HeaderComponent />
      <View style={[styles.container]}>
        <Text style={[styles.pageHeaders]}>Saved Food Tour</Text>
        <Pressable>
          <Image
            style={[styles.icon]}
            source={require("../assets/save.png")}
          ></Image>
        </Pressable>
        <View style={[styles.container]}>
          {selectedRestaurants.map((restaurant, index) => (
            <RestaurantSingle
              key={index}
              name={restaurant.name}
              image={restaurant.image_url}
              address={restaurant.location.display_address.join(", ")}
              description={`Rating: ${restaurant.rating}`}
              website={restaurant.url}
              myMealName={mealNames[index % mealNames.length]}
              onSwapPress={() => handleSwap(index)}
            />
          ))}
        </View>
      </View>
      <NavigationBar />
    </View>
  );
}
