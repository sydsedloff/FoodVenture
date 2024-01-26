import React from "react";
import { ImageBackground, Text, Image, View, Pressable } from "react-native";
import styles from "../styles";
import NavigationBar from "../Components/NavigationBar";

export default function ReservationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Remove the title at the top of the screen */}
      <ImageBackground
        source={require("../assets/Foodventure_Background_Image.png")}
        style={styles.backgroundImage}
      >
        <Image
          style={styles.logo}
          source={require("../assets/FViconYellow.png")}
        />
        <View style={styles.contentContainer.white}>
          <Text style={styles.h2.r}>Reservation Confirmation</Text>
          {/* Style the input elements */}
          <Text>Party Size:</Text>
          <Text>Date:</Text>
          <Text>Time:</Text>
          <Text>See you soon!</Text>
        </View>
      </ImageBackground>
      <NavigationBar />
    </View>
  );
}
