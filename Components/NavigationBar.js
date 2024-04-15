import React from "react";
import { View, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const icons = {
  HomeScreen: {
    active: require("../assets/icons/home_filled.png"),
    inactive: require("../assets/icons/home_outline.png"),
  },
  GenerateFoodTourScreen: {
    active: require("../assets/tour_filled.png"),
    inactive: require("../assets/tour.png"),
  },
  SavedScreen: {
    active: require("../assets/icons/saved_filled.png"),
    inactive: require("../assets/icons/saved_outline.png"),
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
    height: 70,
    alignItems: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EBECEB",
    borderTopWidth: 1,
    borderTopColor: "rgba(0, 0, 0, 0.2)",
  },
  button: {
    alignItems: "center",
    height: 70,
    width: 70,
  },
  navigationSpacer: {
    width: 164,
  },
  addButtonWrapper: {
    position: "absolute",
    top: -12,
    height: 58,
    width: 58,
    justifyContent: "center",
    alignItems: "center",
  },
  addButton: {
    width: 130,
    height: 130,
    zIndex: 1,
    alignSelf: "center",
  },
  genericButton: {
    width: 40,
    maxHeight: 40,
    marginTop: 15,
    zIndex: 1,
  },
});

export default NavigationBar;
