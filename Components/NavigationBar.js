import React from "react";
import { View, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const icons = {
  HomeScreen: {
    active: require("../assets/icons/home_filled.svg"),
    inactive: require("../assets/icons/home_outline.svg"),
  },
  GenerateFoodTourScreen: {
    active: require("../assets/tour_filled.png"),
    inactive: require("../assets/tour.png"),
  },
  SavedScreen: {
    active: require("../assets/icons/saved_filled.svg"),
    inactive: require("../assets/icons/saved_outline.svg"),
  },
};

const NavigationBar = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const isRouteActive = (routeName) => route.name === routeName;

  const renderIcon = (routeName) => {
    const icon = isRouteActive(routeName)
      ? icons[routeName].active
      : icons[routeName].inactive;
    return icon;
  };

  return (
    <View style={styles.bottomNavigation}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Image style={styles.genericButton} source={renderIcon("HomeScreen")} />
      </Pressable>
      <Pressable
        style={styles.addButtonWrapper}
        onPress={() => navigation.navigate("GenerateFoodTourScreen")}
      >
        <Image
          style={styles.addButton}
          source={renderIcon("GenerateFoodTourScreen")}
        />
      </Pressable>
      <View style={styles.navigationSpacer}></View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("SavedScreen")}
      >
        <Image
          style={styles.genericButton}
          source={renderIcon("SavedScreen")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#EBECEB",
    borderTopWidth: 1,
    borderTopColor: "rgba(0, 0, 0, 0.2)",
  },
  button: {
    alignItems: "center",
    height: 100,
    width: 100,
  },
  navigationSpacer: {
    width: 128,
  },
  addButtonWrapper: {
    position: "absolute",
    top: -12,
    zIndex: 1,
    height: 58,
    width: 58,
    justifyContent: "center",
    alignItems: "center",
  },
  addButton: {
    width: 120,
    height: 120,
  },
  genericButton: {
    width: 100,
    height: 100,
  },
});

export default NavigationBar;
