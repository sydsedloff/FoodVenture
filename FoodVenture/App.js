import { StatusBar } from "expo-status-bar";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  NavigationContainer,
  useFocusEffect,
  useRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function handlePress() {
  navigation.navigate(LoginScreen);
}
function WelcomeScreen({ navigation }) {
  return (
    <View style={[styles.container]}>
      <Text>Welcome</Text>
      <Text>to FoodVenture</Text>
      <TouchableOpacity onPress={()=navigation.navigate(LoginScreen)}>
        Log In
      </TouchableOpacity>
      <Button>Sign Up</Button>
    </View>
  );
}

function LoginScreen({ navigation }) {
  return (
    <View style={[styles.container]}>
      <Text>This is the Login screen</Text>
    </View>
  );
}

function SignUpScreen({ navigation }) {
  return (
    <View style={[styles.container]}>
      <Text>This is the Sign Up screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
