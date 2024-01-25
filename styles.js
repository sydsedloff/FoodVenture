import { StyleSheet } from "react-native";
import { Colors } from "./colors";

const baseButtonLargeStyle = {
  borderRadius: 15,
  boxSizing: "border-box",
  alignItems: "center",
  padding: "0.5rem",
  width: "100%",
  marginVertical: 10,
};

const baseButtonLargeTextStyle = {
  fontFamily: "MerriweatherSans-Bold",
  fontSize: 24,
};

const baseH1Style = {
  fontSize: 64,
  fontFamily: "FugazOne-Regular",
  margin: 0,
};

const baseH2Style = {
  fontSize: 48,
  fontFamily: "FugazOne-Regular",
  margin: 0,
};

const baseH3Style = {
  fontSize: 32,
  fontFamily: "FugazOne-Regular",
};

const baseParagraphStyle = {
  fontSize: 21,
  fontFamily: "SignikaNegative-Regular",
};

export default StyleSheet.create({
  //TEXT

  //Headers
  h1: {
    r: {
      ...baseH1Style,
      color: Colors.red,
      lineHeight: 55,
      paddingTop: 21,
    },
    b: {
      ...baseH1Style,
      color: Colors.black,
      paddingBottom: 21,
    },
  },
  h2: {
    r: {
      ...baseH2Style,
      color: Colors.red,
      paddingBottom: 16,
      fontFamily: "FugazOne-Regular",
    },
    b: {
      ...baseH2Style,
      color: Colors.black,
      fontFamily: "FugazOne-Regular",
    },
  },
  h3: {
    r: {
      ...baseH3Style,
      color: Colors.red,
      paddingBottom: 16,
    },
    b: {
      ...baseH3Style,
      color: Colors.black,
    },
  },

  //Other Text
  paragraph: {
    centered: { ...baseParagraphStyle, textAlign: "center" },
  },
  link: {
    color: Colors.red,
    textDecorationLine: "underline",
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    height: 48,
    width: "100%",
    padding: "0.5rem",
    fontSize: 24,
    fontFamily: "SignikaNegative-Regular",
    placeholderTextColor: Colors.grey,
  },
  forgotPasswordText: {
    color: Colors.red, // Change color as needed
    fontSize: 16, // Adjust font size as needed
  },
  orText: {
    fontFamily: "SignikaNegative-Regular",
    marginHorizontal: 10,
    fontSize: 16,
    color: Colors.grey,
  },
  checkBoxText: {
    fontFamily: "MerriweatherSans-Regular",
    fontSize: 18,
  },
  smallText: {
    fontFamily: "MerriweatherSans-Regular",
    fontSize: 14,
    fontStyle: "italic",
  },
  profileText: {
    fontFamily: "MerriweatherSans-Regular",
    fontSize: 24,
  },
  profileSectionHeaders: {
    fontFamily: "MerriweatherSans-Regular",
    fontSize: 28,
    fontWeight: "bold",
  },
  profilePageHeaders: {
    fontFamily: "SignikaNegative-Regular",
    fontSize: 37,
    fontWeight: "bold",
  },

  //IMAGES
  logo: {
    width: 132,
    height: 132,
  },
  image: {
    height: 200,
    width: 300,
  },
  icon: {
    height: 50,
    width: 50,
  },

  //BUTTONS
  buttonLarge: {
    r: {
      ...baseButtonLargeStyle,
      backgroundColor: Colors.red,
      color: Colors.yellow,
    },
    y: {
      ...baseButtonLargeStyle,
      backgroundColor: Colors.yellow,
    },
    w: {
      ...baseButtonLargeStyle,
      backgroundColor: Colors.white,
      borderColor: Colors.red,
      borderWidth: 3,
    },
  },
  buttonLargeText: {
    r: {
      ...baseButtonLargeTextStyle,
      color: Colors.red,
    },
    y: {
      ...baseButtonLargeTextStyle,
      color: Colors.yellow,
    },
    b: {
      ...baseButtonLargeTextStyle,
      color: Colors.white,
    },
  },

  //CONTAINERS
  container: {
    display: "flex",
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    white: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      width: "80%",
      backgroundColor: Colors.white,
      borderRadius: 15,
      border: "1px solid #4A4F4A80",
      padding: "5%",
      height: "fit-content",
      marginVertical: 15,
      textAlign: "center",
    },
    transparent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "80%",
      justifyContent: "space-between",
      height: "13%",
      height: "fit-content",
    },
  },
  textInputContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    gap: 15,
    marginBottom: 10,
  },
  authenticationButtonContainer: {
    width: "100%",
    marginTop: 15,
  },
  checkboxCollectionContainer: {
    flexDirection: "column",
    width: "100%",
    paddingVertical: 10,
    height: "fit-content",
    marginLeft: 25,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },
  contentSeperatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
  },
  forgotPasswordContainer: {
    alignSelf: "flex-end", // Align to the right
  },

  //OTHER STYLES
  checkbox: {
    marginRight: 10,
    width: 18,
    height: 18,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.grey,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    resizeMode: "contain",
    alignItems: "center",
  },
  horizontalAlign: {
    flexDirection: "row",
  },
});
