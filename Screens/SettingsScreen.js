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
  // PRIVACY & SETTINGS
  const [wantsLocation, setLocation] = useState(false);
  const [wantsLoginAlerts, setLoginAlerts] = useState(false);
  // ACCESSIBILITY
  const [wantsDarkMode, setDarkMode] = useState(false);
  const [wantsHighContrast, setHighContrast] = useState(false);
  const [wantsCaptions, setCaptions] = useState(false);
  // HISTORY
  const [wantsSavedPastFoodTours, setSavedPastFoodTours] = useState(false);
  const [wantsSaveSearchHistory, setSaveSearchHistory] = useState(false);
  // const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={{ flex: 1 }}>
      {/* HEADER */}
      <SafeAreaView style={[styles.headerContainer]}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/backArrow.png")}
            style={[styles.headerBackArrow]}
          ></Image>
        </Pressable>
      </SafeAreaView>

      <View style={[styles.container]}>
        <Text style={[styles.pageHeaders, styles.moreBottomMargins]}>
          Settings
        </Text>

        {/* PRIVACY & SECURITY */}
        <View style={[styles.width80, styles.sideSpacing]}>
          <Text style={[styles.profileSectionHeaders, styles.bottomMargins]}>
            Privacy & Security
          </Text>
          <View style={[styles.horizontalAlign, styles.justifySpaceBetween]}>
            <Text style={[styles.profileText, styles.bottomMargins]}>
              Location
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#9b0000" }}
              activeThumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setLocation}
              value={wantsLocation}
            />
          </View>
          <View style={[styles.horizontalAlign, styles.justifySpaceBetween]}>
            <Text style={[styles.profileText, styles.moreBottomMargins]}>
              Login alerts
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#9b0000" }}
              activeThumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setLoginAlerts}
              value={wantsLoginAlerts}
            />
          </View>
        </View>

        {/* ACCESSIBILITY */}
        <View style={[styles.width80, styles.sideSpacing]}>
          <Text style={[styles.profileSectionHeaders, styles.bottomMargins]}>
            Accessibility
          </Text>
          <View style={[styles.horizontalAlign, styles.justifySpaceBetween]}>
            <Text style={[styles.profileText, styles.bottomMargins]}>
              Dark mode
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#9b0000" }}
              activeThumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setDarkMode}
              value={wantsDarkMode}
            />
          </View>
          <View style={[styles.horizontalAlign, styles.justifySpaceBetween]}>
            <Text style={[styles.profileText, styles.bottomMargins]}>
              High constrast mode
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#9b0000" }}
              activeThumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setHighContrast}
              value={wantsHighContrast}
            />
          </View>
          <View style={[styles.horizontalAlign, styles.justifySpaceBetween]}>
            <Text style={[styles.profileText, styles.moreBottomMargins]}>
              Captions
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#9b0000" }}
              activeThumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setCaptions}
              value={wantsCaptions}
            />
          </View>
        </View>

        {/* HISTORY */}
        <View style={[styles.width80, styles.moreBottomMargins]}>
          <Text style={[styles.profileSectionHeaders, styles.bottomMargins]}>
            History
          </Text>
          <View style={[styles.horizontalAlign, styles.justifySpaceBetween]}>
            <Text style={[styles.profileText, styles.bottomMargins]}>
              Save past food tours
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#9b0000" }}
              activeThumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setSavedPastFoodTours}
              value={wantsSavedPastFoodTours}
            />
          </View>
          <View style={[styles.horizontalAlign, styles.justifySpaceBetween]}>
            <Text style={[styles.profileText, styles.bottomMargins]}>
              Save search history
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#9b0000" }}
              activeThumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setSaveSearchHistory}
              value={wantsSaveSearchHistory}
            />
          </View>
          <Pressable style={[styles.buttonLarge.y, styles.moreBottomMargins]}>
            <Text style={[styles.buttonLargeText.r]}>Clear History</Text>
          </Pressable>
        </View>
        <Pressable
          style={[styles.buttonLarge.r, styles.width80]}
          onPress={() => navigation.navigate(ProfileScreen)}
        >
          <Text style={[styles.buttonLargeText.y]}>Save Changes</Text>
        </Pressable>
      </View>
    </View>
  );
}
