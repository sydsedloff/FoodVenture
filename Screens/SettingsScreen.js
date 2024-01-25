import { Image, Text, TextInput, Pressable, View, Switch } from "react-native";
import styles from "../styles";
import React, { useState } from "react";
import ProfileScreen from "./ProfileScreen";

export default function SettingsScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={[styles.container]}>
      <Text style={[styles.paragraph.centered]}>Settings</Text>
      <View>
        <Text style={[styles.paragraph.centered]}>Privacy & Security</Text>
      </View>
      <View style={[styles.horizontalAlign]}>
        <Text>Location</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#9b0000" }}
          activeThumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={[styles.horizontalAlign]}>
        <Text>Login alerts</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#9b0000" }}
          activeThumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      <View>
        <Text style={[styles.paragraph.centered]}>Accessibility</Text>
      </View>
      <View style={[styles.horizontalAlign]}>
        <Text>Dark mode</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#9b0000" }}
          activeThumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={[styles.horizontalAlign]}>
        <Text>High constrast mode</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#9b0000" }}
          activeThumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={[styles.horizontalAlign]}>
        <Text>Captions</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#9b0000" }}
          activeThumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      <View>
        <Text style={[styles.paragraph.centered]}>History</Text>
      </View>
      <View style={[styles.horizontalAlign]}>
        <Text>Save past food tours</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#9b0000" }}
          activeThumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={[styles.horizontalAlign]}>
        <Text>Save search history</Text>
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

      <Pressable
        style={[styles.buttonLarge.r]}
        onPress={() => navigation.navigate(ProfileScreen)}
      >
        <Text style={[styles.buttonLargeText.y]}>Save Changes</Text>
      </Pressable>
    </View>
  );
}
