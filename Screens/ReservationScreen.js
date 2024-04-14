import React from "react";
import {
  ImageBackground,
  Text,
  Image,
  View,
  Pressable,
  SafeAreaView,
  LogBox,
} from "react-native";
import styles from "../styles";
import NavigationBar from "../Components/NavigationBar";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

export default function ReservationScreen({ navigation, route }) {
  const { selectedDate, selectedTime, partySize } = route.params;
  const formattedDate = selectedDate.toLocaleDateString(); // Format the date as needed
  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Set to false for 24-hour format
  }).format(selectedTime);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/Foodventure_Background_Image.png")}
        style={styles.backgroundImage}
      >
        <SafeAreaView
          style={[styles.headerContainerClear, styles.negativeMargins]}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={require("../assets/backArrow.png")}
              style={[styles.headerBackArrow]}
            ></Image>
          </Pressable>
        </SafeAreaView>
        <Image
          style={styles.logo}
          source={require("../assets/FViconYellow.png")}
        />
        <View style={styles.contentContainer.white}>
          <Text
            style={[styles.signa36Red, styles.textCenter, styles.bottomMargins]}
          >
            Reservation Request Confirmation
          </Text>
          <View>
            <View style={[{ flexDirection: "row", alignItems: "center" }]}>
              <Text style={[styles.profileText]}>Party Size:</Text>
              <Text style={[styles.merri19Bold, styles.marginLeft]}>
                {partySize}
              </Text>
            </View>
            <View style={[{ flexDirection: "row", alignItems: "center" }]}>
              <Text style={[styles.profileText]}>Date:</Text>
              <Text style={[styles.merri19Bold, styles.marginLeft]}>
                {formattedDate}
              </Text>
            </View>
            <View style={[{ flexDirection: "row", alignItems: "center" }]}>
              <Text style={[styles.profileText]}>Time:</Text>
              <Text style={[styles.merri19Bold, styles.marginLeft]}>
                {formattedTime}
              </Text>
            </View>
          </View>

          <Text style={[styles.signa36Red]}>See you soon!</Text>
        </View>
      </ImageBackground>
      <NavigationBar />
    </View>
  );
}
