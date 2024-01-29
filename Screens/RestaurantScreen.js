import { Image, Text, Pressable, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import styles from "../styles";
import ReservationScreen from "./ReservationScreen";
import NavigationBar from "../Components/NavigationBar";
import HeaderComponent from "../Components/HeaderComponent";
import RatingImage from "../Components/RatingImageComponent";

const RestaurantSingle = ({ name, image, address, description, website }) => {
  return (
    <SafeAreaView style={[styles.container, styles.alignItemsLeft]}>
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
const DropdownMenu = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <View style={[styles.container]}>
      <Text>Select an option:</Text>
      <DropDownPicker
        items={[
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" },
          { label: "Option 3", value: "option3" },
        ]}
        defaultValue={selectedValue}
        containerStyle={{ height: 40 }}
        style={{ backgroundColor: "#fafafa" }}
        itemStyle={{ justifyContent: "flex-start" }}
        dropDownStyle={{ backgroundColor: "#fafafa" }}
        onChangeItem={(item) => setSelectedValue(item.value)}
      />
      <Text>Selected Value: {selectedValue}</Text>
    </View>
  );
};

export default function RestaurantScreen({ navigation }) {
  return (
    <SafeAreaView style={[styles.container]}>
      <HeaderComponent />

      <View style={[styles.width80]}>
        <RestaurantSingle
          name="Restaurant Name"
          image="https://placehold.co/300x200/"
          address="123 Roady Rd, Orlando, FL 12345"
          description="This is a description of a restaurant that serves food. Ideally it would be good food, but you never know."
          website="https://www.google.com"
        />
        <View style={[styles.smallNegativeMargins]}>
          <Text style={[styles.signa28, styles.width80]}>
            Make a reservation
          </Text>
          <Text>Party Size (future dropdown)</Text>
          {/* <DropdownMenu></DropdownMenu> */}
          <Pressable style={[styles.buttonLarge.r]}>
            <Text
              style={[styles.buttonLargeText.y]}
              onPress={() => navigation.navigate(ReservationScreen)}
            >
              Make Reservation
            </Text>
          </Pressable>
        </View>
      </View>
      <NavigationBar />
      {/* keyExtractor={(item) => item.id} */}
    </SafeAreaView>
  );
}
