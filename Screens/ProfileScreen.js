import {
  ImageBackground,
  Image,
  Text,
  TextInput,
  Pressable,
  View,
} from "react-native";
import styles from "../styles";
import EditProfileScreen from "./EditProfileScreen";
import EditDietaryRestrictionsScreen from "./EditDietaryRestrictionsScreen";
import WelcomeScreen from "./WelcomeScreen";
import SavedScreen from "./SavedScreen";
import NotificationsScreen from "./NotificationsScreen";
import SettingsScreen from "./SettingsScreen";
import { SafeAreaView } from "react-native-web";
import NavigationBar from "../Components/NavigationBar";
import HeaderComponent from "../Components/HeaderComponent";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={[styles.container]}>
      <HeaderComponent />
      <Image
        style={[styles.logoR, styles.bottomMargins]}
        source={{ uri: "https://placehold.co/100x100/" }}
      />
      <Text style={[styles.h3.b]}>USERNAME</Text>
      <Text style={[styles.signa28, styles.bottomPadding]}>
        FIRSTNAME LASTNAME
      </Text>
      <SafeAreaView>
        <Pressable
          onPress={() => navigation.navigate(EditProfileScreen)}
          style={[styles.horizontalAlign, styles.bottomMargins]}
        >
          <Image
            source={require("../assets/profileIcon.png")}
            style={[styles.icon]}
          ></Image>
          <Text style={[styles.merri28]}>Edit Profile</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate(EditDietaryRestrictionsScreen)}
          style={[styles.horizontalAlign, styles.bottomMargins]}
        >
          <Image
            source={require("../assets/forkKnifeRed.png")}
            style={[styles.icon]}
          ></Image>
          <Text style={[styles.merri28]}>Edit Dietary Restrictions</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate(SavedScreen)}
          style={[styles.horizontalAlign, styles.bottomMargins]}
        >
          <Image
            source={require("../assets/saveFilled.png")}
            style={[styles.icon]}
          ></Image>
          <Text style={[styles.merri28]}>Saved</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate(NotificationsScreen)}
          style={[styles.horizontalAlign, styles.bottomMargins]}
        >
          <Image
            source={require("../assets/noti.png")}
            style={[styles.icon]}
          ></Image>
          <Text style={[styles.merri28]}>Notifications</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate(SettingsScreen)}
          style={[styles.horizontalAlign, styles.bottomMargins]}
        >
          <Image
            source={require("../assets/settingGear.png")}
            style={[styles.icon]}
          ></Image>
          <Text style={[styles.merri28]}>Settings</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate(WelcomeScreen)}
          style={[styles.horizontalAlign, styles.bottomMargins]}
        >
          <Image
            source={require("../assets/logout.png")}
            style={[styles.icon]}
          ></Image>
          <Text style={[styles.merri28]}>Log out</Text>
        </Pressable>
      </SafeAreaView>
      <NavigationBar />
    </View>
  );
}
