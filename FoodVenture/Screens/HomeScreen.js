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

const Restaurants = ({ name, image, address, description, website }) => {
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
          />
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
}
