import {
  Button,
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
        style={{ width: 50, height: 50 }}
        source={require("../assets/FViconYellow.png")}
      />
      <TextInput placeholder="Search" />

      <Text>RESTAURANT NAME</Text>
      <Text>RESTAURANT IMAGE</Text>
      <Text>RESTAURANT ADDRESS</Text>
      <Text>RESTAURANT DESCRIPTION</Text>
      <Text>RESTAURANT LINK</Text>
    </View>
  );
}
