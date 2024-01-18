import { StyleSheet } from "react-native";
import { Colors } from "./colors";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
  },
  input: {
    borderColor: "black",
    borderWidth: "2px",
  },
  button: {
    r: { color: Colors.yellow, backgroundColor: Colors.red },
    y: {},
  },
});
