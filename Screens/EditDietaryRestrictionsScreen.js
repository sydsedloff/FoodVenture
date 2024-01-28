import React, { useState } from "react";
import {
  ImageBackground,
  Image,
  Text,
  View,
  Pressable,
  SafeAreaView,
} from "react-native";
import Checkbox from "expo-checkbox";
import styles from "../styles";
import { Colors } from "../colors";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";

export default function EditDietaryRestrictionsScreen({ navigation }) {
  const [isGlutenFree, setGlutenFree] = useState(false);
  const [isKosher, setKosher] = useState(false);
  const [isPescatarian, setPescatarian] = useState(false);
  const [isVegan, setVegan] = useState(false);
  const [isVegetarian, setVegetarian] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container]}>
        <ImageBackground
          source={require("../assets/Foodventure_Background_Image.png")}
          style={styles.backgroundImage}
        >
          <SafeAreaView
            style={[styles.headerContainerClear, styles.negativeMargins]}
          >
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                source={require("../assets/backArrow.png")}
                style={[styles.headerBackArrow]}
              ></Image>
            </Pressable>
          </SafeAreaView>
          <View style={[styles.contentContainer.whiteNoBorder]}>
            <Text style={[styles.pageHeadersRed]}>
              Edit Dietary Restrictions
            </Text>
            <View style={styles.contentSeperatorContainer}>
              <View style={styles.line} />
            </View>
            <Text style={styles.paragraph.centered}>
              Please select any dietary restriction(s)
            </Text>
          </View>
          <View style={[styles.contentContainer.white]}>
            <View style={styles.checkboxCollectionContainer}>
              <Pressable
                style={[styles.checkboxContainer, styles.bottomMargins]}
                onPress={() => setGlutenFree(!isGlutenFree)}
              >
                <Checkbox
                  style={styles.checkbox}
                  value={isGlutenFree}
                  onValueChange={setGlutenFree}
                  color={isGlutenFree ? Colors.red : undefined}
                />
                <Text style={[styles.checkBoxText, styles.bold]}>
                  Gluten Free
                </Text>
              </Pressable>
              <Pressable
                style={[styles.checkboxContainer, styles.bottomMargins]}
                onPress={() => setKosher(!isKosher)}
              >
                <Checkbox
                  style={styles.checkbox}
                  value={isKosher}
                  onValueChange={setKosher}
                  color={isKosher ? Colors.red : undefined}
                />
                <Text style={[styles.checkBoxText, styles.bold]}>Kosher</Text>
              </Pressable>
              <Pressable
                style={[styles.checkboxContainer, styles.bottomMargins]}
                onPress={() => setPescatarian(!isPescatarian)}
              >
                <Checkbox
                  style={styles.checkbox}
                  value={isPescatarian}
                  onValueChange={setPescatarian}
                  color={isPescatarian ? Colors.red : undefined}
                />
                <Text style={[styles.checkBoxText, styles.bold]}>
                  Pescatarian
                </Text>
              </Pressable>
              <Pressable
                style={[styles.checkboxContainer, styles.bottomMargins]}
                onPress={() => setVegan(!isVegan)}
              >
                <Checkbox
                  style={styles.checkbox}
                  value={isVegan}
                  onValueChange={setVegan}
                  color={isVegan ? Colors.red : undefined}
                />
                <Text style={[styles.checkBoxText, styles.bold]}>Vegan</Text>
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
                <Text style={[styles.checkBoxText, styles.bold]}>
                  Vegetarian
                </Text>
              </Pressable>
            </View>
          </View>
          <Pressable
            style={[styles.buttonLarge.r, styles.width80]}
            onPress={() => navigation.navigate(ProfileScreen)}
          >
            <Text style={[styles.buttonLargeText.y]}>Save Changes</Text>
          </Pressable>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
