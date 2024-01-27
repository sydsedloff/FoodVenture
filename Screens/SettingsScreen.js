import {
  Image,
  Text,
  TextInput,
  Pressable,
  View,
  Switch,
  SafeAreaView,
} from "react-native";
import styles from "../styles";
import React, { useState } from "react";
import ProfileScreen from "./ProfileScreen";

export default function SettingsScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View>
      <SafeAreaView style={[styles.headerContainer]}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/backArrow.png")}
            style={[styles.headerBackArrow]}
          ></Image>
        </Pressable>
      </SafeAreaView>

      <View style={[styles.container]}>
        <Text style={[styles.pageHeaders, styles.bottomMargins]}>Settings</Text>
        <View>
          <Text style={[styles.profileSectionHeaders]}>Privacy & Security</Text>
          <View style={[styles.horizontalAlign]}>
            <Text style={[styles.profileText]}>Location</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#9b0000" }}
              activeThumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={[styles.horizontalAlign]}>
            <Text style={[styles.profileText]}>Login alerts</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#9b0000" }}
              activeThumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>

        <View>
          <Text style={[styles.profileSectionHeaders]}>Accessibility</Text>
          <View style={[styles.horizontalAlign]}>
            <Text style={[styles.profileText]}>Dark mode</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#9b0000" }}
              activeThumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={[styles.horizontalAlign]}>
            <Text style={[styles.profileText]}>High constrast mode</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#9b0000" }}
              activeThumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={[styles.horizontalAlign]}>
            <Text style={[styles.profileText, styles.bottomMargins]}>
              Captions
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#9b0000" }}
              activeThumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>

        <View>
          <Text style={[styles.profileSectionHeaders]}>History</Text>
          <View style={[styles.horizontalAlign]}>
            <Text style={[styles.profileText]}>Save past food tours</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#9b0000" }}
              activeThumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={[styles.horizontalAlign]}>
            <Text style={[styles.profileText]}>Save search history</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#9b0000" }}
              activeThumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <Pressable style={[styles.buttonLarge.y]}>
            <Text style={[styles.buttonLargeText.r]}>Clear History</Text>
          </Pressable>
        </View>
        <Pressable
          style={[styles.buttonLarge.r]}
          onPress={() => navigation.navigate(ProfileScreen)}
        >
          <Text style={[styles.buttonLargeText.y]}>Save Changes</Text>
        </Pressable>
      </View>
    </View>
  );
}
