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

const createButtonStyle = (textColor, bgColor) => ({
  ...baseButtonStyle,
  color: textColor,
  backgroundColor: bgColor,
});

export default StyleSheet.create({
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
    width: "50%",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    r: {
      ...baseButtonStyle,
      backgroundColor: Colors.red,
      width: "8rem",
      justifyContent: "center",
      flex: 1,
      padding: "0.5rem",
      margin: "0.5rem",
    },
    y: {
      ...baseButtonStyle,
      backgroundColor: Colors.yellow,
      width: "8rem",
      justifyContent: "center",
      flex: 1,
      padding: "0.5rem",
    },
    w: {
      ...baseButtonStyle,
      backgroundColor: Colors.white,
      width: "8rem",
      justifyContent: "center",
      flex: 1,
      padding: "0.5rem",
      textAlign: "center",
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
  link: {
    color: Colors.red,
    textDecorationLine: "underline",
  },
  image: {
    height: "200px",
    width: "300px",
  },
});
