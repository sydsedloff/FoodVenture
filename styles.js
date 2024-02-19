import { StyleSheet } from "react-native";
import { Colors } from "./colors";

const baseButtonLargeStyle = {
  borderRadius: 15,
  boxSizing: "border-box",
  alignItems: "center",
  padding: "2%",
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
      fontSize: 60,
    },
  },
  h3: {
    r: {
      ...baseH3Style,
      color: Colors.red,
      paddingBottom: 16,
      textAlign: "center",
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
    fontFamily: "MerriweatherSans-Regular",
    fontSize: 15,
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    height: 48,
    width: "100%",
    padding: "3%",
    fontSize: 24,
    fontFamily: "SignikaNegative-Regular",
    placeholderTextColor: Colors.grey,
  },
  thinInput: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    height: 40,
    width: "100%",
    padding: "3%",
    fontSize: 24,
    fontFamily: "SignikaNegative-Regular",
    placeholderTextColor: Colors.grey,
  },
  searchBar: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    height: 35,
    width: "100%",
    fontSize: 24,
  },
  searchBarText: {
    fontSize: 20,
    fontFamily: "SignikaNegative-Regular",
    placeholderTextColor: Colors.grey,
  },

  forgotPasswordText: {
    color: Colors.red,
    fontSize: 16,
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
  pageHeaders: {
    fontFamily: "SignikaNegative-Regular",
    fontSize: 37,
    fontWeight: "bold",
  },
  pageHeadersRed: {
    fontFamily: "SignikaNegative-Regular",
    fontSize: 37,
    fontWeight: "bold",
    color: Colors.red,
    textAlign: "center",
  },
  signa32: {
    fontFamily: "SignikaNegative-Regular",
    fontSize: 32,
  },
  signa28: {
    fontFamily: "SignikaNegative-Regular",
    fontSize: 28,
  },
  merri28: {
    fontFamily: "MerriweatherSans-Regular",
    fontSize: 28,
  },
  merri19Bold: {
    fontFamily: "MerriweatherSans-Regular",
    fontSize: 19,
    fontWeight: "bold",
  },
  merri17: {
    fontFamily: "MerriweatherSans-Regular",
    fontSize: 17,
  },
  signa48Red: {
    fontFamily: "SignikaNegative-Regular",
    fontSize: 48,
    color: Colors.red,
    fontWeight: "bold",
  },
  signa36Red: {
    fontFamily: "SignikaNegative-Regular",
    fontSize: 36,
    color: Colors.red,
    fontWeight: "bold",
  },
  signa24: {
    fontFamily: "SignikaNegative-Regular",
    fontSize: 24,
  },
  textCenter: {
    textAlign: "center",
  },
  dollarText: {
    fontSize: 16,
    fontFamily: "MerriweatherSans-Regular",
  },
  errorText: {
    marginTop: -12,
    paddingTop: 0,
    color: Colors.red,
    textAlign: "center",
  },

  //IMAGES
  backgroundImage: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    resizeMode: "contain",
    alignItems: "center",
  },
  smallerLogo: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  logo: {
    width: 132,
    height: 132,
    borderRadius: 100,
  },
  logoR: {
    width: 132,
    height: 132,
    borderRadius: 100,
    borderColor: Colors.red,
    borderWidth: 2,
  },
  image: {
    height: 200,
    width: 300,
  },
  icon: {
    height: 50,
    width: 50,
  },
  starIcons: {
    height: 50,
    width: 100,
  },
  smallerIcons: {
    height: 35,
    width: 35,
  },
  savedPageIcons: {
    height: 125,
    width: 125,
  },
  headerImage: {
    position: "absolute",
    top: 10,
    right: 20,
    zIndex: 1,
    height: 58,
    width: 58,
    borderRadius: 100,
    zIndex: 1,
  },
  searchBarIcon: {
    height: 35,
    width: 35,
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
  dollarButtons: {
    border: "1px solid black",
    borderRadius: 10,
    minWidth: 30,
    textAlign: "center",
    alignItems: "center",
  },

  //CONTAINERS
  container: {
    display: "flex",
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  headerContainer: {
    position: "sticky",
    height: 75,
    width: "100%",
    top: 0,
    left: 0,
    right: 0, 
    zIndex: 2,
    backgroundColor: "#fff",
  },
  headerContainerClear: {
    position: "sticky",
    height: 75,
    width: "100%",
    backgroundColor: "transparent", 
    top: 0,
    left: 0, 
    right: 0, 
    zIndex: 2,
  },
  profileContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start", 
    padding: 10, 
  },
  buttonContainer: {
    alignSelf: "flex-end", 
    marginTop: 10, 
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
      height: "auto",
      marginVertical: 15,
      textAlign: "center",
    },
    whiteNoBorder: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      width: "90%",
      backgroundColor: Colors.white,
      borderRadius: 15,
      padding: "5%",
      height: "auto",
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
      height: "auto",
    },
    red: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      width: "85%",
      backgroundColor: Colors.white,
      borderRadius: 6,
      border: "1px solid #9B0000",
      padding: "5%",
      height: "auto",
      marginVertical: 15,
      textAlign: "center",
    },
    sharpCorner: {
      alignItems: "center",
      width: "95%",
      borderRadius: 6,
      border: "1px solid black",
      padding: "5%",
      height: "auto",
      marginVertical: 15,
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
    height: "auto",
    marginLeft: 25,
  },
  filterContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginVertical: 6,
  },
  columnContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginVertical: 6,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "start",
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

  //OTHER STYLES BC IDK ANYMORE
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
  horizontalAlign: {
    flexDirection: "row",
    alignItems: "center",
  },
  verticalAlign: {
    flexDirection: "column",
    alignItems: "center",
  },
  headerBackArrow: {
    position: "absolute",
    top: 10,
    left: 20,
    zIndex: 1,
    height: 58,
    width: 58,
  },
  topMargins: {
    marginTop: 15,
  },
  bottomMargins: {
    marginBottom: 15,
  },
  moreBottomMargins: {
    marginBottom: 35,
  },
  lessBottomMargins: {
    marginBottom: 7,
  },
  bottomPadding: {
    paddingBottom: 50,
  },
  negativeMargins: {
    marginTop: -200,
  },
  smallNegativeMargins: {
    marginTop: -50,
  },
  sideSpacing: {
    marginRight: 25,
    marginLeft: 25,
  },
  sideBuffer: {
    marginRight: 15,
    marginLeft: 15,
  },
  marginLeft: {
    marginLeft: 50,
  },
  width100: {
    width: "100%",
  },
  width80: {
    width: "80%",
  },
  width70: {
    width: "70%",
  },
  width50: {
    width: "50%",
  },
  bold: {
    fontWeight: "bold",
  },
  contentJustify: {
    justifyContent: "center",
  },
  justifySpaceBetween: {
    justifyContent: "space-between",
  },
  alignItemsLeft: {
    alignItems: "left",
  },
  alignSelfCenter: {
    alignSelf: "center",
  },
  alignSelfLeft: {
    alignSelf: "left",
  },
  flexColumn: {
    flexDirection: "column",
  },
  heightmatch: {
    height: "auto",
  },
});
