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
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate(RestaurantScreen)}>
        <Text>{name}</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate(RestaurantScreen)}>
        <Image source={{ uri: image }} style={[styles.image]}></Image>
      </Pressable>
      <Text>{address}</Text>
      <Text>{description}</Text>
      <Text style={[styles.link]} href={[website]}>
        {website}
      </Text>
      <Pressable onPress={() => navigation.navigate(RestaurantScreen)}>
        {/* Will need to grab key for restaurant screen */}
        <Text>See Details</Text>
      </Pressable>
    </View>
  );
};

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* <Tab.Screen name="CreateFoodTourScreen" component={CreatFoodTourScreen} /> */}
      {/* <Tab.Screen name="SavedScreen" component={SavedScreen} /> */}
    </Tab.Navigator>
  );
}

export default function SavedRestaurantScreen({ navigation }) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.pageHeaders]}>Saved Restaurants</Text>
      <TextInput placeholder="Search" style={[styles.input]} />
      <FlatList
        data={myRestaurants}
        renderItem={({ item }) => (
          <View style={[styles.contentContainer.white]}>
            <Restaurants
              name={item.name}
              image={item.image}
              address={item.address}
              description={item.description}
              website={item.website}
              navigation={navigation}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
}