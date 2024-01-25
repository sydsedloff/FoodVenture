import { Image, Text, TextInput, Pressable, View, Switch } from "react-native";
import styles from "../styles";
import React, { useState } from "react";
import ProfileScreen from "./ProfileScreen";

export default function NotificationsScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={[styles.container]}>
      <Text style={[styles.paragraph.centered]}>Notifications</Text>
      <View>
        <Text style={[styles.paragraph.centered]}>Push Notifications</Text>
      </View>
      <View style={[styles.horizontalAlign]}>
        <Text>Pause all</Text>
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
      <View style={[styles.horizontalAlign]}>
        <Text>Promotions & deals</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#9b0000" }}
          activeThumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={[styles.horizontalAlign]}>
        <Text>Reservation reminders</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#9b0000" }}
          activeThumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={[styles.horizontalAlign]}>
        <Text>Reservation created</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#9b0000" }}
          activeThumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={[styles.horizontalAlign]}>
        <Text>Reservation canceled</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#9b0000" }}
          activeThumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={[styles.horizontalAlign]}>
        <Text>Complete Reservation</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#9b0000" }}
          activeThumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={[styles.horizontalAlign]}>
        <Text>Reservation alerts</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#9b0000" }}
          activeThumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      <View>
        <Text style={[styles.paragraph.centered]}>Email Notifications</Text>
      </View>
      <View style={[styles.horizontalAlign]}>
        <Text>Reservation made</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#9b0000" }}
          activeThumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={[styles.horizontalAlign]}>
        <Text>Reservation canceled</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#9b0000" }}
          activeThumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={[styles.horizontalAlign]}>
        <Text>FoodVenture updates</Text>
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
