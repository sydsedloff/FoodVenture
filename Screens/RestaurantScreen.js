import {
  Image,
  Text,
  TextInput,
  Pressable,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";
import styles from "../styles";
import myRestaurants from "../data/fakeRestaurants.json";
import ReservationScreen from "./ReservationScreen";
import NavigationBar from "../Components/NavigationBar";
import HeaderComponent from "../Components/HeaderComponent";
import RatingImage from "../Components/RatingImageComponent";

const RestaurantSingle = ({ name, image, address, description, website }) => {
  return (
    <SafeAreaView
      style={[styles.container, styles.bottomMargins, styles.alignItemsLeft]}
    >
      <View style={[styles.horizontalAlign, styles.justifySpaceBetween]}>
        <Text style={[styles.signa32]}>{name}</Text>
        <Image
          style={[styles.icon]}
          source={require("../assets/save.png")}
        ></Image>
      </View>

      <Image
        source={{ uri: image }}
        style={[styles.image, styles.alignSelfCenter]}
      ></Image>

      {/* THIS RATING IMAGE ISN'T WORKING */}
      <View
        style={[
          styles.horizontalAlign,
          styles.justifySpaceBetween,
          styles.width70,
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
        {website}
      </Text>
    </SafeAreaView>
  );
};

export default function RestaurantScreen({ navigation }) {
  return (
    <View style={[styles.container]}>
      <HeaderComponent />

      <View style={[styles.width80]}>
        <RestaurantSingle
          name="Restaurant Name"
          image="https://placehold.co/300x200/"
          address="123 Roady Rd, Orlando, FL 12345"
          description="This is a description of a restaurant that serves food. Ideally it would be good food, but you never know."
          website="https://www.google.com"
        />
        <Text style={[styles.signa28, styles.width80]}>Make a reservation</Text>
        <Text>Party Size (future dropdown)</Text>
        <Pressable style={[styles.buttonLarge.r]}>
          <Text
            style={[styles.buttonLargeText.y]}
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
