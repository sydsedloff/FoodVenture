import { StyleSheet } from "react-native";
import { Colors } from "./colors";

const baseButtonStyle = {
  borderColor: Colors.red,
  borderWidth: 1,
  borderRadius: 5,
  height: 40,
  boxSizing: "border-box",
  textAlign: "center",
  width: "100%",
  justifyContent: "center", // Center vertically
  alignItems: "center", // Center horizontally
};

const baseContainerStyle = {};

export default StyleSheet.create({
  h1: {
    fontSize: 32, // Adjust the size as needed
    fontFamily: "FugazOne-Regular", // Use the registered font family
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    width: "80%",
    backgroundColor: Colors.white,
    borderRadius: 8,
    borderColor: Colors.grey,
    borderWidth: 1,
  },
  logo: {
    width: 128,
    height: 128,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: "100%",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    r: {
      ...baseButtonStyle,
      backgroundColor: Colors.red,
    },
    y: {
      ...baseButtonStyle,
      backgroundColor: Colors.yellow,
    },
    w: {
      ...baseButtonStyle,
      backgroundColor: Colors.white,
    },
  },
  buttonText: {
    r: { color: Colors.red, textAlign: "center", height: "100%" },
    y: {
      color: Colors.yellow,
      textAlign: "center",
    },
    w: { color: Colors.white, textAlign: "center", height: "100%" },
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
});
