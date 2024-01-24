import { Image, Text, TextInput, Pressable, View } from "react-native";
import styles from "../styles";
import EditProfileScreen from "./EditProfileScreen";
import EditDietaryRestrictionsScreen from "./EditDietaryRestrictionsScreen";
import SavedScreen from "./SavedScreen";

export default function NotificationsScreen({ navigation }) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.h3.b]}>Notifications</Text>
      <Text>Push Notifications</Text>
      <Text>Pause all</Text>
      <Text>Login alerts</Text>
      <Text>Promotions & deals</Text>
      <Text>Reservation reminders</Text>
      <Text>Reservation created</Text>
      <Text>Reservation canceled</Text>
      <Text>Complete Reservation</Text>
      <Text>Reservation alerts</Text>
      <Text>Email Notifications</Text>
      <Text>Reservation made</Text>
      <Text>Reservation canceled</Text>
      <Text>FoodVenture updates</Text>
      <Pressable
        style={[styles.buttonLarge.r]}
        onPress={() => navigation.navigate(ProfileScreen)}
      >
        <Text style={[styles.buttonLargeText.y]}>Save Changes</Text>
      </Pressable>
    </View>
  );
}
