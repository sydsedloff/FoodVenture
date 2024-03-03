import { Image, Text, Pressable, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import styles from "../styles";
import ReservationScreen from "./ReservationScreen";
import NavigationBar from "../Components/NavigationBar";
import HeaderComponent from "../Components/HeaderComponent";
import RatingImage from "../Components/RatingImageComponent";
import { searchRestaurants } from "../server";

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
      <View
        style={[
          styles.horizontalAlign,
          styles.justifySpaceBetween,
          styles.width100,
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
const PartySizeDropdown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6+", value: "6+" },
  ]);
  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
    </View>
  );
};
const MealtimeDropdown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Breakfast", value: "Breakfast" },
    { label: "Lunch", value: "Lunch" },
    { label: "Dinner", value: "Dinner" },
  ]);
  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
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
          <Text style={[styles.signa28, styles.width80, styles.bottomMargins]}>
            Request a reservation
          </Text>
          <View style={[styles.bottomMargins]}>
            <View>
              <Text style={[styles.merri19Bold]}>Party Size</Text>
              <PartySizeDropdown />
              <Text style={[styles.merri19Bold]}>Preferred Meal Time</Text>
              <MealtimeDropdown />
            </View>
          </View>

          <Pressable style={[styles.buttonLarge.r, { marginBottom: 100 }]}>
            <Text
              style={[styles.buttonLargeText.y]}
              onPress={() => navigation.navigate(ReservationScreen)}
            >
              Request Reservation
            </Text>
          </Pressable>
        </View>
      </View>

      <NavigationBar />
      {/* keyExtractor={(item) => item.id} */}
    </SafeAreaView>
  );
}
