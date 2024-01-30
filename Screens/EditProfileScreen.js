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
    <SafeAreaView>
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
          Edit Profile
        </Text>
        <Image
          style={[styles.logoR]}
          source={{ uri: "https://placehold.co/100x100/" }}
        />

        <View style={[styles.textInputContainer, styles.width80]}>
          <View>
            <Text style={[styles.signa28]}>Name</Text>
            <TextInput placeholder="Name" style={styles.thinInput} />
          </View>
          <View>
            <Text style={[styles.signa28]}>Username</Text>
            <TextInput placeholder="Username" style={styles.thinInput} />
          </View>
          <View>
            <Text style={[styles.signa28]}>Dietary Restrictions</Text>
            <TextInput
              placeholder="Dietary Restrictions"
              style={styles.thinInput}
            />
          </View>
          <View>
            <Text style={[styles.signa28]}>Email</Text>
            <TextInput
              placeholder="hello@foodventure.com"
              style={styles.thinInput}
            />
          </View>
          <View>
            <Text style={[styles.signa28]}>Phone Number</Text>
            <TextInput placeholder="123-456-7890" style={styles.thinInput} />
          </View>
          <View>
            <Text style={[styles.signa28]}>Password</Text>
            <TextInput placeholder="Password" style={styles.thinInput} />
          </View>

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
    </SafeAreaView>
  );
}
