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

import HeaderComponent from "../Components/HeaderComponent";
import NavigationBar from "../Components/NavigationBar";
import SavedRestaurants from "../Components/SavedRestaurantsComponent";

export default function YourFoodTourScreen({ navigation }) {
  return (
    <View>
      <HeaderComponent />
      <View style={[styles.container]}>
        <Text style={[styles.pageHeaders]}>Your Food Tour</Text>

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
