import { Image, Text, TextInput, Pressable, View, Switch } from "react-native";
import styles from "../styles";
import React, { useState } from "react";
import ProfileScreen from "./ProfileScreen";

export default function NotificationsScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={[styles.container]}>
      <Text style={[styles.profilePageHeaders]}>Notifications</Text>
      <View>
        <Text style={[styles.profileSectionHeaders]}>Push Notifications</Text>
      </View>
      <View style={[styles.horizontalAlign]}>
        <Text style={[styles.profileText]}>Pause all</Text>
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
      <View style={[styles.horizontalAlign]}>
        <Text style={[styles.profileText]}>Promotions & deals</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#9b0000" }}
          activeThumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={[styles.horizontalAlign]}>
        <Text style={[styles.profileText]}>Reservation reminders</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#9b0000" }}
          activeThumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={[styles.horizontalAlign]}>
        <Text style={[styles.profileText]}>Reservation created</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#9b0000" }}
          activeThumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={[styles.horizontalAlign]}>
        <Text style={[styles.profileText]}>Reservation canceled</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#9b0000" }}
          activeThumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={[styles.horizontalAlign]}>
        <Text style={[styles.profileText]}>Complete Reservation</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#9b0000" }}
          activeThumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <Text style={[styles.smallText]}>
        Looks like you forgot to finish this reservation, complete it now!
      </Text>
      <View style={[styles.horizontalAlign]}>
        <Text style={[styles.profileText]}>Reservation alerts</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#9b0000" }}
          activeThumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <Text style={[styles.smallText]}>
        This place is booking fast, make your reservation now!
      </Text>

      <View>
        <Text style={[styles.profileSectionHeaders]}>Email Notifications</Text>
      </View>
      <View style={[styles.horizontalAlign]}>
        <Text style={[styles.profileText]}>Reservation made</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#9b0000" }}
          activeThumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={[styles.horizontalAlign]}>
        <Text style={[styles.profileText]}>Reservation canceled</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#9b0000" }}
          activeThumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={[styles.horizontalAlign]}>
        <Text style={[styles.profileText]}>FoodVenture updates</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#9b0000" }}
          activeThumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <Pressable
        style={[styles.buttonLarge.r]}
        onPress={() => navigation.navigate(ProfileScreen)}
      >
        <Text style={[styles.buttonLargeText.y]}>Save Changes</Text>
      </Pressable>
    </View>
  );
}
