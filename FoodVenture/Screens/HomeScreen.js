import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={[styles.container]}>
      <Image
        style={styles.logo}
        source={require("../assets/FViconYellow.png")}
      />
      <TextInput placeholder="Search" style={[styles.input]} />

      <Text>RESTAURANT NAME</Text>
      <Text>RESTAURANT IMAGE</Text>
      <Text>RESTAURANT ADDRESS</Text>
      <Text>RESTAURANT DESCRIPTION</Text>
      <Text>RESTAURANT LINK</Text>
    </View>
  );
}
