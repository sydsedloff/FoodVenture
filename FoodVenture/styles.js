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
    borderWidth: "1px",
  },
  button: {
    r: { color: Colors.yellow, backgroundColor: Colors.red },
    y: { color: Colors.red, backgroundColor: Colors.yellow },
    w: {
      color: Colors.red,
      backgroundColor: Colors.white,
      borderColor: Colors.red,
      borderWidth: "1px",
    },
  },
  checkboxContainer: {
    flexDirection: "row",
  },
});
