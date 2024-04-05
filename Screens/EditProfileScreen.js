import {
  Image,
  Text,
  TextInput,
  Pressable,
  View,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles";
import ProfileScreen from "./ProfileScreen";
import ChoosePfpScreen from "./ChoosePfpScreen";
import { Colors } from "../colors";

export default function EditProfileScreen({ navigation }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    try {
      const userEmail = await AsyncStorage.getItem("userEmail");
      const response = await fetch(
        `http://localhost:3000/api/userData/${userEmail}`
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

  async function saveChanges() {
    try {
      const userEmail = await AsyncStorage.getItem("userEmail");
      console.log(userEmail);
      const response = await fetch(
        `http://localhost:3000/api/userData/${userEmail}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            fullName: userData.fullName,
            email: userData.email,
            username: userData.username,
            password: userData.password,
            dietaryRestriction: userData.dietaryRestriction,
            notifications: userData.notifications,
            settings: userData.settings,
          }),
        }
      );
    } catch (error) {
      console.log("There was an error:", error);
    }
    console.log(userData);
    navigation.navigate(ProfileScreen);
  }

  return (
    <SafeAreaView style={[{ height: "100%" }]}>
      <SafeAreaView style={[styles.headerContainer]}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/backArrow.png")}
            style={[styles.headerBackArrow]}
          />
        </Pressable>
      </SafeAreaView>
      <View style={[styles.container]}>
        <Text style={[styles.pageHeaders, styles.bottomMargins]}>
          Edit Profile
        </Text>
        {userData && (
          <Image
            style={[styles.logoR]}
            source={{ uri: userData.profilePicture }}
          />
        )}
        <Pressable onPress={() => navigation.navigate(ChoosePfpScreen)}>
          <Text style={[styles.merri17, { color: Colors.red }]}>
            Edit Profile Picture
          </Text>
        </Pressable>
        {userData && (
          <View style={[styles.textInputContainer, styles.width80]}>
            <View>
              <Text style={[styles.signa28]}>Name</Text>
              <TextInput
                placeholder="Name"
                style={[styles.thinInput, styles.input]}
                value={userData.fullName}
                onChangeText={(text) =>
                  setUserData({ ...userData, fullName: text })
                }
              />
            </View>
            <View>
              <Text style={[styles.signa28]}>Username</Text>
              <TextInput
                placeholder="Username"
                style={[styles.thinInput, styles.input]}
                value={userData.username}
                onChangeText={(text) =>
                  setUserData({ ...userData, username: text })
                }
              />
            </View>
            <View>
              <Text style={[styles.signa28]}>Email</Text>
              <TextInput
                placeholder="Email"
                style={[styles.thinInput, styles.input]}
                value={userData.email}
                onChangeText={(text) =>
                  setUserData({ ...userData, email: text })
                }
              />
            </View>
            <View>
              <Text style={[styles.signa28]}>Password</Text>
              <TextInput
                placeholder="Password"
                style={[styles.thinInput, styles.input]}
                secureTextEntry={true}
                value={userData.password}
                onChangeText={(text) =>
                  setUserData({ ...userData, password: text })
                }
              />
            </View>

            <Pressable
              style={[styles.buttonLarge.r]}
              onPress={() => saveChanges()}
            >
              <Text style={[styles.buttonLargeText.y]}>Save Changes</Text>
            </Pressable>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
