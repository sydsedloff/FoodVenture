import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Pressable,
  View,
  FlatList,
} from "react-native";
import styles from "../styles";
import myRestaurants from "../data/fakeRestaurants.json";
import ReservationScreen from "./ReservationScreen";
import NavigationBar from "../Components/NavigationBar";
import HeaderComponent from "../Components/HeaderComponent";

const RestaurantSingle = ({ name, image, address, description, website }) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Image source={{ uri: image }} style={[styles.image]}></Image>
      <Text>{address}</Text>
      <Text>{description}</Text>
      <Text style={[styles.link]} href={[website]}>
        {website}
      </Text>
    </View>
  );
};

export default function RestaurantScreen({ navigation }) {
  return (
    <View style={[styles.container]}>
      <HeaderComponent />
      <Image
        style={styles.logo}
        source={require("../assets/FViconYellow.png")}
      />
      <View>
        <RestaurantSingle
          name="Restaurant Name"
          image="https://placehold.co/300x200/"
          address="123 Roady Rd, Orlando, FL 12345"
          description="This is a description of a restaurant that serves food. Ideally it would be good food, but you never know."
          website="https://www.google.com"
        />
        <Text>Make a reservation</Text>
        <Text>Party Size (future dropdown)</Text>
        <Pressable>
          <Text
            style={[styles.buttonLarge.r]}
            onPress={() => navigation.navigate(ReservationScreen)}
          >
            Make Reservation
          </Text>
        </Pressable>
      </View>
      <NavigationBar />
      {/* keyExtractor={(item) => item.id} */}
    </View>
  );
}
