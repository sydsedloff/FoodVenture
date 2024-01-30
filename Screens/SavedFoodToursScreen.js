import {
  Image,
  Text,
  TextInput,
  SafeAreaView,
  View,
  FlatList,
  Pressable,
} from "react-native";
import styles from "../styles";
import myRestaurants from "../data/fakeRestaurants.json";
import HeaderComponent from "../Components/HeaderComponent";
import NavigationBar from "../Components/NavigationBar";
import SavedRestaurants from "../Components/SavedRestaurantsComponent";
import RatingImage from "../Components/RatingImageComponent";

const RestaurantSingle = ({
  name,
  image,
  address,
  description,
  website,
  myMealName,
}) => {
  return (
    <SafeAreaView
      style={[
        styles.container,
        styles.alignItemsLeft,
        styles.contentContainer.sharpCorner,
        styles.alignItemsLeft,
        styles.width80,
      ]}
    >
      <Text style={[styles.signa32, styles.bold]}>{myMealName}</Text>
      <Image
        source={{ uri: image }}
        style={[styles.image, styles.alignSelfCenter]}
      ></Image>
      <View
        style={[
          styles.horizontalAlign,
          styles.justifySpaceBetween,
          styles.width100,
        ]}
      >
        <Text style={[styles.signa24, styles.bold]}>{name}</Text>
        <RatingImage
          star_rating={4}
          style={{ position: "relative", zIndex: 1, opacity: 1 }}
        />
      </View>
      <Text style={[styles.dollarText, styles.lessBottomMargins]}>
        {address}
      </Text>

      <Text style={[styles.link]} href={[website]}>
        {website}
      </Text>
    </SafeAreaView>
  );
};

export default function SavedFoodToursScreen({ navigation }) {
  return (
    <View>
      <HeaderComponent />
      <View style={[styles.container]}>
        <Text style={[styles.pageHeaders]}>Saved Food Tour</Text>
        <Pressable>
          <Image
            style={[styles.icon]}
            source={require("../assets/save.png")}
          ></Image>
        </Pressable>

        <RestaurantSingle
          name="Restaurant Name"
          image="https://placehold.co/300x200/"
          address="123 Roady Rd, Orlando, FL 12345"
          description="This is a description of a restaurant that serves food. Ideally it would be good food, but you never know."
          website="https://www.google.com"
          myMealName="Breakfast"
        />
        <RestaurantSingle
          name="Restaurant Name"
          image="https://placehold.co/300x200/"
          address="123 Roady Rd, Orlando, FL 12345"
          description="This is a description of a restaurant that serves food. Ideally it would be good food, but you never know."
          website="https://www.google.com"
          myMealName="Lunch"
        />
        <RestaurantSingle
          name="Restaurant Name"
          image="https://placehold.co/300x200/"
          address="123 Roady Rd, Orlando, FL 12345"
          description="This is a description of a restaurant that serves food. Ideally it would be good food, but you never know."
          website="https://www.google.com"
          myMealName="Dinner"
        />
        <RestaurantSingle
          name="Restaurant Name"
          image="https://placehold.co/300x200/"
          address="123 Roady Rd, Orlando, FL 12345"
          description="This is a description of a restaurant that serves food. Ideally it would be good food, but you never know."
          website="https://www.google.com"
          myMealName="Dessert"
        />
        <RestaurantSingle
          name="Restaurant Name"
          image="https://placehold.co/300x200/"
          address="123 Roady Rd, Orlando, FL 12345"
          description="This is a description of a restaurant that serves food. Ideally it would be good food, but you never know."
          website="https://www.google.com"
          myMealName="Drinks"
        />
      </View>
      <NavigationBar />
    </View>
  );
}
