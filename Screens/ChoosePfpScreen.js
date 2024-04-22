import React, { useState, useEffect } from "react";
import { ImageBackground, Image, Text, View, Pressable } from "react-native";
import styles from "../styles";
import HomeScreen from "./HomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { localhost } from "../Components/localHostID";

export default function ChoosePfpScreen({ navigation }) {
  const [profilePicture, setTasteBuddy] = useState("");

  async function saveProfilePicture() {
    try {
      const userEmail = await AsyncStorage.getItem("userEmail");
      const response = await fetch(
        `http://${localhost}/profilePicture/${userEmail}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            profilePicture,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update profile picture");
      }

      const data = await response.json();
      console.log("Profile Picture updated successfully:", data);
    } catch (error) {
      console.error("Error updating profile picture:", error);
    }
  }

  async function updateProfilePicture() {
    console.log(profilePicture);
    await saveProfilePicture();
    navigation.navigate(HomeScreen);
  }
  useEffect(() => {
    getUserData();
  }, []);
  const [userData, setUserData] = useState(null);
  async function getUserData() {
    try {
      const userEmail = await AsyncStorage.getItem("userEmail");
      const response = await fetch(
        `http://${localhost}/api/userData/${userEmail}`
      );
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  console.log(AsyncStorage.getItem("userEmail"));
  return (
    <View style={[styles.container]}>
      <ImageBackground
        source={require("../assets/Foodventure_Background_Image.png")}
        style={styles.backgroundImage}
      >
        <Image
          style={styles.logo}
          source={require("../assets/FViconYellow.png")}
        />
        <View style={[styles.contentContainer.white]}>
          <Text style={[styles.h2.b]}>Welcome</Text>
          <Text style={[styles.h3.b, styles.bottomMargins]}>
            {userData && userData.username ? userData.username : ""}
          </Text>
          <View style={[styles.contentSeperatorContainer]}>
            <View style={[styles.line, styles.bottomMargins]} />
          </View>
          <Text
            style={[
              styles.paragraph.centered,
              styles.bottomMargins,
              { fontSize: 24 },
            ]}
          >
            Choose your Taste Buddy!
          </Text>

          {/* PROFILE PICTURES */}
          <View>
            <View style={[styles.horizontalAlign, styles.width100]}>
              {/* LEFT COLUMN */}
              <View style={[styles.width50]}>
                <Pressable
                  style={[
                    styles.horizontalAlign,
                    styles.sideBuffer,
                    { paddingBottom: "10%" },
                  ]}
                  onPress={() =>
                    setTasteBuddy(
                      "https://raw.githubusercontent.com/sydsedloff/FoodVenture/06ce0f0c1f0f8bbb01f28338766b1bf3d8d36d94/assets/pfp/chopstick_profile.svg"
                    )
                  }
                >
                  <Image
                    style={[styles.tasteBuddies]}
                    source={require("../assets/pfp/chopstick_profile.png")}
                  />
                  <Text style={[styles.merri19Bold, { paddingLeft: "2%" }]}>
                    Daniel & Miyagi
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    styles.horizontalAlign,
                    styles.sideBuffer,
                    { paddingBottom: "10%" },
                  ]}
                  onPress={() =>
                    setTasteBuddy(
                      "https://github.com/sydsedloff/FoodVenture/blob/main/assets/pfp/profileFork.png?raw=true"
                    )
                  }
                >
                  <Image
                    style={[styles.tasteBuddies]}
                    source={require("../assets/pfp/profileFork.png")}
                  />
                  <Text style={[styles.merri19Bold, { paddingLeft: "2%" }]}>
                    Ariel
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    styles.horizontalAlign,
                    styles.sideBuffer,
                    { paddingBottom: "10%" },
                  ]}
                  onPress={() =>
                    setTasteBuddy(
                      "https://github.com/sydsedloff/FoodVenture/blob/main/assets/pfp/knifeProfileIcon.png?raw=true"
                    )
                  }
                >
                  <Image
                    style={[styles.tasteBuddies]}
                    source={require("../assets/pfp/knifeProfileIcon.png")}
                  />
                  <Text style={[styles.merri19Bold, { paddingLeft: "2%" }]}>
                    Butter
                  </Text>
                </Pressable>
              </View>

              {/* RIGHT COLUMN */}
              <View style={[styles.width50]}>
                <Pressable
                  style={[
                    styles.horizontalAlign,
                    styles.sideBuffer,
                    styles.width50,

                    { paddingBottom: "10%" },
                  ]}
                  onPress={() =>
                    setTasteBuddy(
                      "https://github.com/sydsedloff/FoodVenture/blob/main/assets/pfp/profileSpoon.png?raw=true"
                    )
                  }
                >
                  <Image
                    style={[styles.tasteBuddies]}
                    source={require("../assets/pfp/profileSpoon.png")}
                  />
                  <Text style={[styles.merri19Bold, { paddingLeft: "2%" }]}>
                    Sugar
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    styles.horizontalAlign,
                    styles.sideBuffer,
                    { paddingBottom: "10%" },
                  ]}
                  onPress={() =>
                    setTasteBuddy(
                      "https://github.com/sydsedloff/FoodVenture/blob/main/assets/pfp/sporkProfileIcon.png"
                    )
                  }
                >
                  <Image
                    style={[styles.tasteBuddies]}
                    source={require("../assets/pfp/sporkProfileIcon.png")}
                  />
                  <Text style={[styles.merri19Bold, { paddingLeft: "2%" }]}>
                    Craig
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    styles.horizontalAlign,
                    styles.sideBuffer,
                    { paddingBottom: "10%" },
                  ]}
                  onPress={() =>
                    setTasteBuddy(
                      "https://raw.githubusercontent.com/sydsedloff/FoodVenture/06ce0f0c1f0f8bbb01f28338766b1bf3d8d36d94/assets/pfp/straws-profile.svg"
                    )
                  }
                >
                  <Image
                    style={[styles.tasteBuddies]}
                    source={require("../assets/pfp/straws-profile.png")}
                  />
                  <Text style={[styles.merri19Bold, { paddingLeft: "2%" }]}>
                    Ed, Edd, & Eddy
                  </Text>
                </Pressable>
              </View>
            </View>

            <View style={[styles.horizontalAlign]}></View>
          </View>
          <View style={[styles.tasteBuddies]}>{/* SPACER */}</View>
        </View>
        <Pressable
          style={[
            styles.buttonLarge.r,
            styles.topMargins,
            styles.horizontalAlign,
            styles.justifySpaceBetween,
            {
              alignSelf: "flex-end",
              marginRight: "5%",
              width: "35%",
              paddingRight: "5%",
              paddingLeft: "5%",
            },
          ]}
          onPress={() => updateProfilePicture()}
        >
          <Text style={[styles.buttonLargeText.y]}>Done</Text>
          <Image
            style={[{ height: 25, width: 25 }]}
            source={require("../assets/checkYellow.png")}
          />
        </Pressable>
      </ImageBackground>
    </View>
  );
}
