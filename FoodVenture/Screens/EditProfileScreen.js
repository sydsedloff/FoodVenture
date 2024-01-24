import {
  ImageBackground,
  Image,
  Text,
  TextInput,
  Pressable,
  View,
} from "react-native";
import styles from "../styles";

export default function EditProfileScreen({ navigation }) {
  return (
    <View style={[styles.container]}>
      <Image
        style={styles.logo}
        source={require("../assets/FViconYellow.png")}
      />
      <Text>Edit Profile</Text>
      <View style={styles.textInputContainer}>
        <TextInput placeholder="Name" style={styles.input} />
      </View>
      {/* keyExtractor={(item) => item.id} */}
    </View>
  );
}
