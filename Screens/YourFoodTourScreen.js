import {
  Image,
  Text,
  SafeAreaView,
  View,
  FlatList,
  Pressable,
} from "react-native";
import styles from "../styles";
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

      <Text style={[styles.link, styles.bottomPadding]} href={[website]}>
        {website}
      </Text>
      <View style={[styles.horizontalAlign, styles.justifySpaceBetween]}>
        <Pressable style={[styles.horizontalAlign]}>
        <Image
        source={require("../assets/switchRed.png")}
        style={[styles.smallerIcons]}
      ></Image>
      <Text style={[styles.merri17]}>Swap</Text>
        </Pressable>
        <Pressable style={[styles.horizontalAlign]}>
        <Text style={[styles.merri17]}>Delete</Text><Image
        source={require("../assets/trash.png")}
        style={[styles.smallerIcons]}
      ></Image>
      
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default function YourFoodTourScreen({ navigation }) {
  return (
    <View>
      <HeaderComponent />
      <View style={[styles.container]}>
        <Text style={[styles.pageHeaders]}>Your Food Tour</Text>
        <Pressable style={[styles.buttonLarge.r, styles.horizontalAlign, styles.width70]}>
          <Text style={[styles.buttonLargeText.y]}>Regenerate Tour</Text>
          <Image
            style={[styles.icon]}
            source={require("../assets/switchYellow.png")}
          ></Image>
        </Pressable>
        <Pressable style={[styles.buttonLarge.y, styles.horizontalAlign, styles.width70]}>
          <Text style={[styles.buttonLargeText.r]}>Save Tour</Text>
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
