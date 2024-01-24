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

export default function ProfileScreen({ navigation }) {
  return (
    <View style={[styles.container]}>
      <Image
        style={styles.logo}
        source={require("../assets/FViconYellow.png")}
      />
      <Text>USERNAME</Text>
      <Text>FIRSTNAME LASTNAME</Text>
      <Pressable onPress={() => navigation.navigate(EditProfileScreen)}>
        <Text>Edit Profile</Text>
      </Pressable>
      <Pressable>
        <Text
          onPress={() => navigation.navigate(EditDietaryRestrictionsScreen)}
        >
          Edit Dietary Restrictions
        </Text>
      </Pressable>
      <Pressable>
        <Text>Saved</Text>
      </Pressable>
      <Pressable>
        <Text>Notifications</Text>
      </Pressable>
      <Pressable>
        <Text>Setting</Text>
      </Pressable>
      <Pressable>
        <Text onPress={() => navigation.navigate(WelcomeScreen)}>Log out</Text>
      </Pressable>
      {/* keyExtractor={(item) => item.id} */}
    </View>
  );
}
