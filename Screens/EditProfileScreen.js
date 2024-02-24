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

  return (
    <SafeAreaView>
      <SafeAreaView style={[styles.headerContainer]}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/backArrow.png")}
            style={[styles.headerBackArrow]}
          ></Image>
        </Pressable>
      </SafeAreaView>
      <View style={[styles.container]}>
        <Text style={[styles.pageHeaders, styles.bottomMargins]}>
          Edit Profile
        </Text>
        {userData && ( // Render the Image component conditionally when userData is not null
          <Image
            style={[styles.logoR]}
            source={{ uri: userData.profilePicture }}
          />
        )}
        <View style={[styles.textInputContainer, styles.width80]}>
          <View>
            <Text style={[styles.signa28]}>Name</Text>
            <TextInput
              placeholder="Name"
              style={styles.thinInput}
              value={userData ? userData.fullName : ""}
            />
          </View>
          <View>
            <Text style={[styles.signa28]}>Username</Text>
            <TextInput
              placeholder="Username"
              style={styles.thinInput}
              value={userData ? userData.username : ""}
            />
          </View>
          {/* <View>
            <Text style={[styles.signa28]}>Dietary Restrictions</Text>
            <TextInput
              placeholder="Dietary Restrictions"
              style={styles.thinInput}
              value={userData ? userData.dietaryRestrictions : ""}
            />
          </View> */}
          <View>
            <Text style={[styles.signa28]}>Email</Text>
            <TextInput
              placeholder="Email"
              style={styles.thinInput}
              value={userData ? userData.email : ""}
            />
          </View>
          <View>
            <Text style={[styles.signa28]}>Phone Number</Text>
            <TextInput
              placeholder="123-456-7890"
              style={styles.thinInput}
              value={userData ? userData.phoneNumber : ""}
            />
          </View>
          <View>
            <Text style={[styles.signa28]}>Password</Text>
            <TextInput
              placeholder="Password"
              style={styles.thinInput}
              secureTextEntry={true}
              value={userData ? userData.password : ""}
            />
          </View>

          <Pressable style={[styles.buttonLarge.r]}>
            <Text
              style={[styles.buttonLargeText.y]}
              onPress={() => navigation.navigate(ProfileScreen)}
            >
              Save Changes
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
