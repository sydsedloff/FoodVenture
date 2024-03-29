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
  // PUSH NOTIFICATIONS
  const [isPaused, setPause] = useState(false);
  const [wantsLoginAlerts, setLoginAlerts] = useState(false);
  const [wantsPromoDeals, setPromoDeals] = useState(false);
  const [wantsReservationReminders, setReservationReminders] = useState(false);
  const [wantsReservationCreated, setReservationCreated] = useState(false);
  const [wantsReservationCanceledPush, setReservationCanceledPush] =
    useState(false);
  const [wantsReservationComplete, setReservationComplete] = useState(false);
  const [wantsReservationAlerts, setReservationAlerts] = useState(false);
  // EMAIL NOTIFICATIONS
  const [wantsReservationCanceledEmail, setReservationCanceledEmail] =
    useState(false);
  const [wantsReservationMade, setReservationMade] = useState(false);
  const [wantsFoodventureUpdates, setFoodventureUpdates] = useState(false);

  // const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View>
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
        <Text style={[styles.pageHeaders, styles.bottomMargins]}>
          Notifications
        </Text>

        {/* PUSH NOTIFICATIONS */}
        <Text
          style={[
            styles.profileSectionHeaders,
            styles.bottomMargins,
            styles.width100,
            styles.marginLeft,
          ]}
        >
          Push Notifications
        </Text>

        <View style={[styles.sideSpacing, styles.width80]}>
          <View style={[styles.horizontalAlign, styles.justifySpaceBetween]}>
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
          <View style={[styles.horizontalAlign, styles.justifySpaceBetween]}>
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
          <View style={[styles.horizontalAlign, styles.justifySpaceBetween]}>
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
          <View style={[styles.horizontalAlign, styles.justifySpaceBetween]}>
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
          <View style={[styles.horizontalAlign, styles.justifySpaceBetween]}>
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
          <View style={[styles.horizontalAlign, styles.justifySpaceBetween]}>
            <Text style={[styles.profileText, styles.bottomMargins]}>
              Reservation canceled
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#9b0000" }}
              activeThumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setReservationCanceledPush}
              value={wantsReservationCanceledPush}
            />
          </View>
          <View style={[styles.horizontalAlign, styles.justifySpaceBetween]}>
            <Text style={[styles.profileText]}>Complete Reservation</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#9b0000" }}
              activeThumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setReservationComplete}
              value={wantsReservationComplete}
            />
          </View>
          <Text style={[styles.smallText, styles.bottomMargins]}>
            Looks like you forgot to finish this reservation, complete it now!
          </Text>
          <View style={[styles.horizontalAlign, styles.justifySpaceBetween]}>
            <Text style={[styles.profileText]}>Reservation alerts</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#9b0000" }}
              activeThumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setReservationAlerts}
              value={wantsReservationAlerts}
            />
          </View>
          <Text style={[styles.smallText, styles.bottomMargins]}>
            This place is booking fast, make your reservation now!
          </Text>
        </View>

        {/* EMAIL NOTIFICATIONS */}

        <Text
          style={[
            styles.profileSectionHeaders,
            styles.bottomMargins,
            styles.width100,
            styles.marginLeft,
          ]}
        >
          Email Notifications
        </Text>

        <View style={[styles.sideSpacing, styles.width80]}>
          <View style={[styles.horizontalAlign, styles.justifySpaceBetween]}>
            <Text style={[styles.profileText, styles.bottomMargins]}>
              Reservation made
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#9b0000" }}
              activeThumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setReservationMade}
              value={wantsReservationMade}
            />
          </View>
          <View style={[styles.horizontalAlign, styles.justifySpaceBetween]}>
            <Text style={[styles.profileText, styles.bottomMargins]}>
              Reservation canceled
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#9b0000" }}
              activeThumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setReservationCanceledEmail}
              value={wantsReservationCanceledEmail}
            />
          </View>
          <View style={[styles.horizontalAlign, styles.justifySpaceBetween]}>
            <Text style={[styles.profileText, styles.bottomMargins]}>
              FoodVenture updates
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#9b0000" }}
              activeThumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setFoodventureUpdates}
              value={wantsFoodventureUpdates}
            />
          </View>
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
