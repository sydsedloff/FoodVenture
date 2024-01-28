import {
  Image,
  Text,
  TextInput,
  View,
  FlatList,
  Pressable,
} from "react-native";
import styles from "../styles";
import myRestaurants from "../data/fakeRestaurants.json";
import FilterSidebar from "./FilterSidebar";
import NavigationBar from "../Components/NavigationBar";
import HeaderComponent from "../Components/HeaderComponent";
import Restaurants from "../Components/RestaurantsComponent";

export default function HomeScreen({ navigation }) {
  return (
    <View style={[styles.container]}>
      <HeaderComponent />
      <Image
        style={[styles.smallerLogo, styles.bottomMargins]}
        source={require("../assets/FViconYellow.png")}
      />
      <View>
        <View
          style={[
            styles.horizontalAlign,
            styles.bottomMargins,
            styles.contentJustify,
          ]}
        >
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
      </View>
      <NavigationBar />
    </View>
  );
}
