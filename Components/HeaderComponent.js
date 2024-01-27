import React from "react";
import { Text, Image, View, Pressable, SafeAreaView } from "react-native";
import styles from "../styles";
import profileData from "../data/fakeProfile.json";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function HeaderComponent() {
  const navigation = useNavigation();
  const route = useRoute();

  // Check if there's a page to go back to
  const canGoBack = navigation.canGoBack();

  // Check if the current route is the ProfileScreen
  const isProfileScreen = route.name === "ProfileScreen";

  return (
    <View style={[styles.headerContainer]}>
      {canGoBack && (
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/backArrow.png")}
            style={[styles.headerBackArrow]}
          />
        </Pressable>
      )}
      {!isProfileScreen && (
        <Pressable onPress={() => navigation.navigate("ProfileScreen")}>
          <Image
            source={{ uri: "https://placehold.co/100x100/" }}
            style={[styles.headerImage]}
          />
        </Pressable>
      )}
    </View>
  );
}
