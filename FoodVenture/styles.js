import { StyleSheet } from "react-native";
import { Colors } from "./colors";

const baseButtonStyle = {
  borderColor: Colors.red,
  borderWidth: 1,
  borderRadius: 5,
  height: 40,
  boxSizing: "border-box",
  textAlign: "center",
  width: "100%", // Make the button take up 100% of its parent's width
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    display: "flex", // Use display: flex
    justifyContent: "space-between",
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
    display: "flex", // Use display: flex
    flexDirection: "column", // Stack child elements vertically
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
    width: "50%",
    marginBottom: 10,
    paddingHorizontal: 10, // Use a number for paddingHorizontal
  },
  button: {
    r: {
      ...baseButtonStyle,
      color: Colors.yellow,
      backgroundColor: Colors.red,
    },
    y: {
      ...baseButtonStyle,
      color: Colors.red,
      backgroundColor: Colors.yellow,
    },
    w: {
      ...baseButtonStyle,
      color: Colors.red,
      backgroundColor: Colors.white,
    },
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%", // Make the checkboxContainer take up 100% of its parent's width
  },
  link: {
    color: Colors.red,
    textDecorationLine: "underline",
  },
  image: {
    height: "200px",
    width: "300px",
  },
});
