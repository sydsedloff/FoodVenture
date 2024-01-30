import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  FlatList,
  Pressable,
} from "react-native";
import styles from "../styles";
import myRestaurants from "../data/fakeRestaurants.json";
import RestaurantScreen from "./RestaurantScreen";
import FilterSidebar from "./FilterSidebar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabNavigator } from "../App";
import HeaderComponent from "../Components/HeaderComponent";
import NavigationBar from "../Components/NavigationBar";
import SavedRestaurants from "../Components/SavedRestaurantsComponent";

export default function SavedRestaurantScreen({ navigation }) {
  return (
    <View>
      <HeaderComponent />
      <View style={[styles.container]}>
        <Text style={[styles.pageHeaders]}>Saved Restaurants</Text>

        <FlatList
          data={myRestaurants}
          renderItem={({ item }) => (
            <SavedRestaurants
              name={item.name}
              image={item.image}
              address={item.address}
              description={item.description}
              website={item.website}
              navigation={navigation}
              star_rating={item.star_rating}
            />
          )}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </View>
      <NavigationBar />
    </View>
  );
}
