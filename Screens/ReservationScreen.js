import React from "react";
import {
  ImageBackground,
  Text,
  Image,
  View,
  Pressable,
  SafeAreaView,
} from "react-native";
import styles from "../styles";
import NavigationBar from "../Components/NavigationBar";

export default function ReservationScreen({ navigation }) {
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
            style={[styles.signa48Red, styles.textCenter, styles.bottomMargins]}
          >
            Reservation Request Confirmation
          </Text>
          <View>
            <View style={[styles.horizontalAlign]}>
              <Text style={[styles.profileText]}>Party Size:</Text>
              <Text style={[styles.merri19Bold, styles.marginLeft]}>3</Text>
            </View>
            <View style={[styles.horizontalAlign]}>
              <Text style={[styles.profileText]}>Date:</Text>
              <Text style={[styles.merri19Bold, styles.marginLeft]}>
                November 1, 2024
              </Text>
            </View>
            <View style={[styles.horizontalAlign, styles.bottomMargins]}>
              <Text style={[styles.profileText]}>Time:</Text>
              <Text style={[styles.merri19Bold, styles.marginLeft]}>
                5:30 pm
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
