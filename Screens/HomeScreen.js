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
import NavigationBar from "../Components/NavigationBar";
import HeaderComponent from "../Components/HeaderComponent";

// We will later need to limit how many restaurants are on the home page as this loads all of them
//  Also when clicking on the image or title, it will need to grab the restaurant id/key for the restaurant page
const Restaurants = ({
  name,
  image,
  address,
  description,
  website,
  navigation,
}) => {
  return (
    <View style={[styles.container, styles.bottomMargins]}>
      <Pressable onPress={() => navigation.navigate(RestaurantScreen)}>
        <Text style={[styles.signa28]}>{name}</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate(RestaurantScreen)}>
        <Image source={{ uri: image }} style={[styles.image]}></Image>
      </Pressable>
      <Text style={[styles.merri19Bold]}>{address}</Text>
      <Text style={[styles.merri17]}>{description}</Text>
      <Text style={[styles.link]} href={[website]}>
        {website}
      </Text>
      <Pressable onPress={() => navigation.navigate(RestaurantScreen)}>
        {/* Will need to grab key for restaurant screen */}
      </Pressable>
    </View>
  );
};

export default function HomeScreen({ navigation }) {
  return (
    <View style={[styles.container]}>
      <HeaderComponent />
      <Image
        style={[styles.smallerLogo, styles.bottomMargins]}
        source={require("../assets/FViconYellow.png")}
      />

      <View style={[styles.horizontalAlign, styles.bottomMargins]}>
        <View style={[styles.searchBar, styles.horizontalAlign]}>
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

      <FlatList
        data={myRestaurants}
        renderItem={({ item }) => (
          <Restaurants
            name={item.name}
            image={item.image}
            address={item.address}
            description={item.description}
            website={item.website}
            navigation={navigation}
          />
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
      <NavigationBar />
    </View>
  );
}
