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
        <Image
          style={styles.genericButtonHome}
          source={renderIcon("HomeScreen")}
        />
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
          style={styles.genericButtonSaved}
          source={renderIcon("SavedScreen")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#EBECEB",
    flex: 1,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    overflow: "visible",
  },
  navigationSpacer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: 128,
  },
  addButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    top: -12,
    zIndex: 1,
    height: 58,
    width: 58,
  },
  addButton: {
    width: 128,
    height: 128,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  genericButtonHome: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    overflow: "visible",
    objectFit: "fill",
  },
  genericButtonSaved: {
    width: 27,
    height: 34,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    overflow: "visible",
    objectFit: "contain",
  },
});

export default NavigationBar;
