import React from "react";
import { Text, Image, View, Pressable, SafeAreaView } from "react-native";
import styles from "../styles";
import profileData from "../data/fakeProfile.json";


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

    <SafeAreaView style={[styles.headerContainer]}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image
          source={require("../assets/backArrow.png")}
          style={[styles.headerBackArrow]}
        ></Image>
      </Pressable>
      <Pressable onPress={() => navigation.navigate(ProfileScreen)}>
        <Image
          source={{ uri: "https://placehold.co/100x100/" }}
          style={[styles.headerImage]}
        ></Image>
      </Pressable>
    </SafeAreaView>

  );
}
