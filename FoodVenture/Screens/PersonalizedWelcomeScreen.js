import React, { useState } from "react";
import { ImageBackground, Image, Text, View, Pressable } from "react-native";
import Checkbox from "expo-checkbox";
import styles from "../styles";
import { Colors } from "../colors";

export default function PersonalizedWelcomeScreen({ navigation }) {
  const [isGlutenFree, setGlutenFree] = useState(false);
  const [isKosher, setKosher] = useState(false);
  const [isPescatarian, setPescatarian] = useState(false);
  const [isVegan, setVegan] = useState(false);
  const [isVegetarian, setVegetarian] = useState(false);

  return (
    <View style={[styles.container]}>
      <ImageBackground
        source={require("../assets/Foodventure_Background_Image.png")}
        style={styles.backgroundImage}
      >
        <Image
          style={styles.logo}
          source={require("../assets/FViconYellow.png")}
        />
        <View style={[styles.contentContainer.white]}>
          <Text style={[styles.h2.b]}>Welcome</Text>
          <Text style={[styles.h3.b]}>USERNAME</Text>
          <View style={styles.contentSeperatorContainer}>
            <View style={styles.line} />
          </View>
          <Text style={styles.paragraph.centered}>
            Please select any dietary restrictions you may have:
          </Text>
          <View style={styles.checkboxCollectionContainer}>
            <Pressable
              style={[styles.checkboxContainer]}
              onPress={() => setGlutenFree(!isGlutenFree)}
            >
              <Checkbox
                style={styles.checkbox}
                value={isGlutenFree}
                onValueChange={setGlutenFree}
                color={isGlutenFree ? Colors.red : undefined}
              />
              <Text style={styles.checkBoxText}>Gluten Free</Text>
            </Pressable>
            <Pressable
              style={[styles.checkboxContainer]}
              onPress={() => setKosher(!isKosher)}
            >
              <Checkbox
                style={styles.checkbox}
                value={isKosher}
                onValueChange={setKosher}
                color={isKosher ? Colors.red : undefined}
              />
              <Text style={styles.checkBoxText}>Kosher</Text>
            </Pressable>
            <Pressable
              style={[styles.checkboxContainer]}
              onPress={() => setPescatarian(!isPescatarian)}
            >
              <Checkbox
                style={styles.checkbox}
                value={isPescatarian}
                onValueChange={setPescatarian}
                color={isPescatarian ? Colors.red : undefined}
              />
              <Text style={styles.checkBoxText}>Pescatarian</Text>
            </Pressable>
            <Pressable
              style={[styles.checkboxContainer]}
              onPress={() => setVegan(!isVegan)}
            >
              <Checkbox
                style={styles.checkbox}
                value={isVegan}
                onValueChange={setVegan}
                color={isVegan ? Colors.red : undefined}
              />
              <Text style={styles.checkBoxText}>Vegan</Text>
            </Pressable>
            <Pressable
              style={[styles.checkboxContainer]}
              onPress={() => setVegetarian(!isVegetarian)}
            >
              <Checkbox
                style={styles.checkbox}
                value={isVegetarian}
                onValueChange={setVegetarian}
                color={isVegetarian ? Colors.red : undefined}
              />
              <Text style={styles.checkBoxText}>Vegetarian</Text>
            </Pressable>
          </View>
          <Pressable
            style={[styles.buttonLarge.r]}
            onPress={() => navigation.navigate(HomeScreen)}
          >
            <Text style={[styles.buttonLargeText.y]}>Done</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
