import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import styles from "../styles";
import myRestaurants from "../data/fakeRestaurants.json";
import RestaurantScreen from "../Screens/RestaurantScreen";

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
      <TouchableOpacity onPress={() => navigation.navigate(RestaurantScreen)}>
        <Text>{name}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(RestaurantScreen)}>
        <Image source={{ uri: image }} style={[styles.image]}></Image>
      </TouchableOpacity>
      <Text>{address}</Text>
      <Text>{description}</Text>
      <Text style={[styles.link]} href={[website]}>
        {website}
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate(RestaurantScreen)}>
        {/* Will need to grab key for restaurant screen */}
        <Text>See Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function HomeScreen({ navigation }) {
  return (
    <View style={[styles.container]}>
      <Image
        style={styles.logo}
        source={require("../assets/FViconYellow.png")}
      />
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
    </View>
  );
}
