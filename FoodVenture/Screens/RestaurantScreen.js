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

const Restaurant = ({ name, image, address, description, website }) => {
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
      <Image
        style={styles.logo}
        source={require("../assets/FViconYellow.png")}
      />
      <TextInput placeholder="Search" style={[styles.input]} />
      <Text>This is the Restaurant Page</Text>
      <FlatList
        data={myRestaurants}
        renderItem={({ item }) => (
          <Restaurant
            name="Restaurant Name"
            image="https://placehold.co/300x200/"
            address="Restaurant Address"
            description="Restaurant Description"
            website="Restaurant Website"
          />
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
}
