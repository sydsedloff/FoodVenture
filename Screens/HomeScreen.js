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
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate(RestaurantScreen)}>
        <Text>{name}</Text>
        <Image source={{ uri: image }} style={[styles.image]}></Image>
        <Text>{address}</Text>
        <Text>{description}</Text>
        <Text style={[styles.link]} href={[website]}>
          {website}
        </Text>
        {/* Will need to grab key for restaurant screen */}
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

export default function HomeScreen({ navigation }) {
  return (
    <View style={[styles.container]}>
      <HeaderComponent />
      <Image
        style={styles.logo}
        source={require("../assets/FViconYellow.png")}
      />
      {/*CONDITIONAL TO FILLED FILTER ICON IF FILTERING IS ON*/}
      <Pressable onPress={() => navigation.navigate(FilterSidebar)}>
        <Image
          source={require("../assets/filter.png")}
          style={[styles.icon]}
        ></Image>
      </Pressable>
      <TextInput placeholder="Search" style={[styles.input]} />
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
