import React from "react";
import { Text, Image, View, Pressable, SafeAreaView } from "react-native";
import styles from "../styles";
import profileData from "../data/fakeProfile.json";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function HeaderComponent() {
  const { canGoBack, navigate, goBack } = useNavigation();
  const { name } = useRoute();

  const isProfileScreen = name === "ProfileScreen";
  const isHomeScreen = name === "HomeScreen";

  return (
    <View style={[styles.headerContainer]}>
      {canGoBack && !isHomeScreen && (
        <Pressable onPress={goBack}>
          <Image
            source={require("../assets/backArrow.png")}
            style={[styles.headerBackArrow]}
          />
        </Pressable>
      )}
      {!isProfileScreen && (
        <Pressable onPress={() => navigate("ProfileScreen")}>
          <Image
            source={{ uri: "https://placehold.co/100x100/" }}
            style={[styles.headerImage]}
          />
        </Pressable>
      )}
    </View>
  );
}
