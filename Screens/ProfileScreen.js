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

export default function ProfileScreen({ navigation }) {
  return (
    <View style={[styles.container]}>
      <Image
        style={styles.logo}
        source={require("../assets/FViconYellow.png")}
      />
      <Text style={[styles.h3.b]}>USERNAME</Text>
      <Text>FIRSTNAME LASTNAME</Text>
      <Pressable onPress={() => navigation.navigate(EditProfileScreen)}>
        <Image
          source={require("../assets/profileIcon.png")}
          style={[styles.icon]}
        ></Image>
        <Text>Edit Profile</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate(EditDietaryRestrictionsScreen)}
      >
        <Image
          source={require("../assets/forkKnifeRed.png")}
          style={[styles.icon]}
        ></Image>
        <Text>Edit Dietary Restrictions</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate(SavedScreen)}>
        <Image
          source={require("../assets/saveFilled.png")}
          style={[styles.icon]}
        ></Image>
        <Text>Saved</Text>
      </Pressable>
      <Pressable>
        <Image
          source={require("../assets/noti.png")}
          style={[styles.icon]}
        ></Image>
        <Text>Notifications</Text>
      </Pressable>
      <Pressable>
        <Image
          source={require("../assets/settingGear.png")}
          style={[styles.icon]}
        ></Image>
        <Text>Setting</Text>
      </Pressable>
      <Pressable>
        <Image
          source={require("../assets/logout.png")}
          style={[styles.icon]}
        ></Image>
        <Text onPress={() => navigation.navigate(WelcomeScreen)}>Log out</Text>
      </Pressable>
      {/* keyExtractor={(item) => item.id} */}
    </View>
  );
}
