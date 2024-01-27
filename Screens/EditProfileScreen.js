import {
  Image,
  Text,
  TextInput,
  Pressable,
  View,
  SafeAreaView,
} from "react-native";
import styles from "../styles";
import ProfileScreen from "./ProfileScreen";

export default function EditProfileScreen({ navigation }) {
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
        <Text style={[styles.pageHeaders]}>Edit Profile</Text>
        <Image
          style={styles.logoR}
          source={{ uri: "https://placehold.co/100x100/" }}
        />

        <View style={[styles.textInputContainer]}>
          <Text style={[styles.signa28, styles.negativeMargins]}>Name</Text>
          <TextInput placeholder="Name" style={styles.thinInput} />
          <Text style={[styles.signa28, styles.negativeMargins]}>Username</Text>
          <TextInput placeholder="Username" style={styles.thinInput} />
          <Text style={[styles.signa28, styles.negativeMargins]}>
            Dietary Restrictions
          </Text>
          <TextInput
            placeholder="Dietary Restrictions"
            style={styles.thinInput}
          />
          <Text style={[styles.signa28, styles.negativeMargins]}>Email</Text>
          <TextInput
            placeholder="hello@foodventure.com"
            style={styles.thinInput}
          />
          <Text style={[styles.signa28, styles.negativeMargins]}>
            Phone Number
          </Text>
          <TextInput placeholder="123-456-7890" style={styles.thinInput} />
          <Text style={[styles.signa28, styles.negativeMargins]}>Password</Text>
          <TextInput placeholder="Password" style={styles.thinInput} />
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
    </View>
  );
}
