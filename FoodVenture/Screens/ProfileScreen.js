import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Pressable,
  View,
  FlatList,
  Touchable,
} from "react-native";
import styles from "../styles";
import myRestaurants from "../data/fakeRestaurants.json";
import ReservationScreen from "./ReservationScreen";

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

export default function ProfileScreen({ navigation }) {
  return (
    <View style={[styles.container]}>
      <Image
        style={styles.logo}
        source={require("../assets/FViconYellow.png")}
      />
      <Text>USERNAME</Text>
      <Text>FIRSTNAME LASTNAME</Text>
      <Pressable>
        <Text>Edit Profile</Text>
      </Pressable>
      <Pressable>
        <Text>Edit Dietary Restrictions</Text>
      </Pressable>
      <Pressable>
        <Text>Saved</Text>
      </Pressable>
      <Pressable>
        <Text>Notifications</Text>
      </Pressable>
      <Pressable>
        <Text>Setting</Text>
      </Pressable>
      <Pressable>
        <Text>Log out</Text>
      </Pressable>
      {/* keyExtractor={(item) => item.id} */}
    </View>
  );
}
