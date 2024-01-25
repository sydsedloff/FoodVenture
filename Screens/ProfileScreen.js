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

export default function ProfileScreen({ navigation }) {
  return (
    <View style={[styles.container]}>
      <Image
        style={styles.logo}
        source={require("../assets/FViconYellow.png")}
      />
      <Text style={[styles.h3.b]}>USERNAME</Text>
      <Text>FIRSTNAME LASTNAME</Text>

      <Pressable
        onPress={() => navigation.navigate(EditProfileScreen)}
        style={[styles.horizontalAlign]}
      >
        <Image
          source={require("../assets/profileIcon.png")}
          style={[styles.icon]}
        ></Image>
        <Text>Edit Profile</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate(EditDietaryRestrictionsScreen)}
        style={[styles.horizontalAlign]}
      >
        <Image
          source={require("../assets/forkKnifeRed.png")}
          style={[styles.icon]}
        ></Image>
        <Text>Edit Dietary Restrictions</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate(SavedScreen)}
        style={[styles.horizontalAlign]}
      >
        <Image
          source={require("../assets/saveFilled.png")}
          style={[styles.icon]}
        ></Image>
        <Text>Saved</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate(NotificationsScreen)}
        style={[styles.horizontalAlign]}
      >
        <Image
          source={require("../assets/noti.png")}
          style={[styles.icon]}
        ></Image>
        <Text>Notifications</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate(SettingsScreen)}
        style={[styles.horizontalAlign]}
      >
        <Image
          source={require("../assets/settingGear.png")}
          style={[styles.icon]}
        ></Image>
        <Text>Settings</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate(WelcomeScreen)}
        style={[styles.horizontalAlign]}
      >
        <Image
          source={require("../assets/logout.png")}
          style={[styles.icon]}
        ></Image>
        <Text>Log out</Text>
      </Pressable>
    </View>
  );
}