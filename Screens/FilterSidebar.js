import {
  ImageBackground,
  Image,
  StyleSheet,
  TextInput,
  Text,
  CheckBox,
  View,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import {
  NavigationContainer,
  useFocusEffect,
  useRoute,
} from "@react-navigation/native";
import styles from "../styles";
import HomeScreen from "./HomeScreen";

// const [isSelected, setSelection] = useState(false);

export default function FilterSidebar({ navigation }) {
  return (
    <View style={[styles.container]}>
      <Image
        style={styles.logo}
        source={require("../assets/FViconYellow.png")}
      />
      <Text>Filters</Text>
      <Text>Price Range</Text>
      <View style={[styles.checkboxContainer]}>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          style={[styles.checkbox]}
        />
        <Text>$</Text>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          style={[styles.checkbox]}
        />
        <Text>$$</Text>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          style={[styles.checkbox]}
        />
        <Text>$$$</Text>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          style={[styles.checkbox]}
        />
        <Text>$$$$</Text>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          style={[styles.checkbox]}
        />
        <Text>$$$$$</Text>
      </View>
      <Text>Dietary Restrictions</Text>
      <View style={[styles.checkboxContainer]}>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          style={[styles.checkbox]}
        />
        <Text>Gluten Free</Text>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          style={[styles.checkbox]}
        />
        <Text>Kosher</Text>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          style={[styles.checkbox]}
        />
        <Text>Pescatarian</Text>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          style={[styles.checkbox]}
        />
        <Text>Vegan</Text>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          style={[styles.checkbox]}
        />
        <Text>Vegetarian</Text>
      </View>
      <Text>Distance</Text>
      <View style={[styles.checkboxContainer]}>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          style={[styles.checkbox]}
        />
        <Text>0-10 mi</Text>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          style={[styles.checkbox]}
        />
        <Text>12-30 mi</Text>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          style={[styles.checkbox]}
        />
        <Text>11-20 mi</Text>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          style={[styles.checkbox]}
        />
        <Text>31+ mi</Text>
      </View>
      <Text>Cuisine Type</Text>
      <View style={[styles.checkboxContainer]}>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          style={[styles.checkbox]}
        />
        <Text>American</Text>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          style={[styles.checkbox]}
        />
        <Text>Japanese</Text>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          style={[styles.checkbox]}
        />
        <Text>Indian</Text>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          style={[styles.checkbox]}
        />
        <Text>Carribean</Text>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          style={[styles.checkbox]}
        />
        <Text>Korean</Text>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          style={[styles.checkbox]}
        />
        <Text>French</Text>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          style={[styles.checkbox]}
        />
        <Text>BBQ</Text>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          style={[styles.checkbox]}
        />
        <Text>Italian</Text>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          style={[styles.checkbox]}
        />
        <Text>Chinese</Text>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          style={[styles.checkbox]}
        />
        <Text>Greek</Text>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          style={[styles.checkbox]}
        />
        <Text>Mexican</Text>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          style={[styles.checkbox]}
        />
        <Text>Thai</Text>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          style={[styles.checkbox]}
        />
        <Text>Seafood</Text>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          style={[styles.checkbox]}
        />
        <Text>Pizza</Text>
      </View>
      <Pressable onPress={() => navigation.navigate(HomeScreen)}>
        <Text style={[styles.buttonLarge.r]}>Apply</Text>
      </Pressable>
    </View>
  );
}
