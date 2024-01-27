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
import HeaderComponent from "../Components/HeaderComponent";

export default function NotificationsScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  // PUSH NOTIFICATIONS
  const [isPaused, setPause] = useState(false);
  const [wantsLoginAlerts, setLoginAlerts] = useState(false);
  const [wantsPromoDeals, setPromoDeals] = useState(false);
  const [wantsReservationReminders, setReservationReminders] = useState(false);
  const [wantsReservationCreated, setReservationCreated] = useState(false);

  // EMAIL REMINDERS

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
        <Text style={[styles.pageHeaders, styles.bottomMargins]}>
          Notifications
        </Text>

        {/* PUSH NOTIFICATIONS */}
        <Text style={[styles.profileSectionHeaders, styles.bottomMargins]}>
          Push Notifications
        </Text>

        <View style={[styles.sideSpacing]}>
          <View style={[styles.horizontalAlign]}>
            <Text style={[styles.profileText, styles.bottomMargins]}>
              Pause all
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#9b0000" }}
              activeThumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setPause}
              value={isPaused}
            />
          </View>
          <View style={[styles.horizontalAlign]}>
            <Text style={[styles.profileText, styles.bottomMargins]}>
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
          <View style={[styles.horizontalAlign]}>
            <Text style={[styles.profileText, styles.bottomMargins]}>
              Promotions & deals
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#9b0000" }}
              activeThumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setPromoDeals}
              value={wantsPromoDeals}
            />
          </View>
          <View style={[styles.horizontalAlign]}>
            <Text style={[styles.profileText, styles.bottomMargins]}>
              Reservation reminders
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#9b0000" }}
              activeThumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setReservationReminders}
              value={wantsReservationReminders}
            />
          </View>
          <View style={[styles.horizontalAlign]}>
            <Text style={[styles.profileText, styles.bottomMargins]}>
              Reservation created
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#9b0000" }}
              activeThumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setReservationCreated}
              value={wantsReservationCreated}
            />
          </View>
          <View style={[styles.horizontalAlign]}>
            <Text style={[styles.profileText, styles.bottomMargins]}>
              Reservation canceled
            </Text>
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
          <Text style={[styles.smallText, styles.bottomMargins]}>
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
          <Text style={[styles.smallText, styles.bottomMargins]}>
            This place is booking fast, make your reservation now!
          </Text>
        </View>

        {/* EMAIL NOTIFICATIONS */}

        <Text style={[styles.profileSectionHeaders, styles.bottomMargins]}>
          Email Notifications
        </Text>

        <View style={[styles.sideSpacing]}>
          <View style={[styles.horizontalAlign]}>
            <Text style={[styles.profileText, styles.bottomMargins]}>
              Reservation made
            </Text>
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
              Reservation canceled
            </Text>
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
              FoodVenture updates
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

        <Pressable
          style={[styles.buttonLarge.r, styles.sideSpacing]}
          onPress={() => navigation.navigate(ProfileScreen)}
        >
          <Text style={[styles.buttonLargeText.y]}>Save Changes</Text>
        </Pressable>
      </View>
    </View>
  );
}
