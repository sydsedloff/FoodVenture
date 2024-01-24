import {
  ImageBackground,
  Image,
  Text,
  TextInput,
  Pressable,
  View,
} from "react-native";
import styles from "../styles";
import ProfileScreen from "./ProfileScreen";

export default function EditProfileScreen({ navigation }) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.h3.b]}>Edit Profile</Text>
      <Image
        style={styles.logo}
        source={require("../assets/FViconYellow.png")}
      />

      <View style={styles.textInputContainer}>
        <Text>Name</Text>
        <TextInput placeholder="Name" style={styles.input} />
        <Text>Username</Text>
        <TextInput placeholder="Username" style={styles.input} />
        <Text>Dietary Restrictions</Text>
        <TextInput placeholder="Dietary Restrictions" style={styles.input} />
        <Text>Email</Text>
        <TextInput placeholder="hello@foodventure.com" style={styles.input} />
        <Text>Phone Number</Text>
        <TextInput placeholder="123-456-7890" style={styles.input} />
        <Text>Password</Text>
        <TextInput placeholder="Password" style={styles.input} />
        <Pressable style={[styles.buttonLarge.r]}>
          <Text
            style={[styles.buttonLargeText.y]}
            onPress={() => navigation.navigate(ProfileScreen)}
          >
            Save Changes
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
