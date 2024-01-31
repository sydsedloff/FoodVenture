import {
  Image,
  SafeAreaView,
  Text,
  CheckBox,
  View,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../colors";
import Checkbox from "expo-checkbox";
import HeaderComponent from "../Components/HeaderComponent";
import styles from "../styles";
import NavigationBar from "../Components/NavigationBar";
import YourFoodTourScreen from "./YourFoodTourScreen";

export default function GenerateFoodTourScreen({ navigation }) {
  // DIETARY RESTRICTIONS
  const [isGlutenFree, setGlutenFree] = useState(false);
  const [isKosher, setKosher] = useState(false);
  const [isPescatarian, setPescatarian] = useState(false);
  const [isVegan, setVegan] = useState(false);
  const [isVegetarian, setVegetarian] = useState(false);

  //DISTANCES
  const [isDistance0_10, setDistance0_10] = useState(false);
  const [isDistance12_30, setDistance12_30] = useState(false);
  const [isDistance11_20, setDistance11_20] = useState(false);
  const [isDistance31_plus, setDistance31_plus] = useState(false);

  // CUISINES
  const [isAmerican, setAmerican] = useState(false);
  const [isJapanese, setJapanese] = useState(false);
  const [isIndian, setIndian] = useState(false);
  const [isCaribbean, setCaribbean] = useState(false);
  const [isKorean, setKorean] = useState(false);
  const [isFrench, setFrench] = useState(false);
  const [isBBQ, setBBQ] = useState(false);
  const [isItalian, setItalian] = useState(false);
  const [isChinese, setChinese] = useState(false);
  const [isGreek, setGreek] = useState(false);
  const [isMexican, setMexican] = useState(false);
  const [isThai, setThai] = useState(false);
  const [isSeafood, setSeafood] = useState(false);
  const [isPizza, setPizza] = useState(false);
  return (
    <SafeAreaView style={[styles.container]}>
      <HeaderComponent />
      <View style={[styles.container]}>
        <Text style={[styles.pageHeaders, styles.width70, styles.textCenter]}>
          Generate Your Food Tour
        </Text>
        <Text style={[styles.profileText]}>Price Range</Text>

        <View style={[styles.checkboxContainer]}>
          <Pressable style={[styles.dollarButtons]}>
            <Text style={[styles.dollarText, styles.sideBuffer]}>$</Text>
          </Pressable>
          <Pressable style={[styles.dollarButtons]}>
            <Text style={[styles.dollarText, styles.sideBuffer]}>$$</Text>
          </Pressable>
          <Pressable style={[styles.dollarButtons]}>
            <Text style={[styles.dollarText, styles.sideBuffer]}>$$$</Text>
          </Pressable>
          <Pressable style={[styles.dollarButtons]}>
            <Text style={[styles.dollarText, styles.sideBuffer]}>$$$$</Text>
          </Pressable>
          <Pressable style={[styles.dollarButtons]}>
            <Text style={[styles.dollarText, styles.sideBuffer]}>$$$$$</Text>
          </Pressable>
        </View>
        <Text style={[styles.profileText]}>Dietary Restrictions</Text>
        <View
          style={[styles.filterContainer, styles.flexColumn, styles.width80]}
        >
          <View>
            <Pressable
              style={[
                styles.horizontalAlign,
                styles.bottomMargins,
                styles.width50,
              ]}
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
              style={[
                styles.horizontalAlign,
                styles.bottomMargins,
                styles.width50,
              ]}
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
              style={[
                styles.horizontalAlign,
                styles.bottomMargins,
                styles.width50,
              ]}
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
          </View>

          <View>
            <Pressable
              style={[
                styles.horizontalAlign,
                styles.bottomMargins,
                styles.width50,
              ]}
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
              style={[
                styles.horizontalAlign,
                styles.bottomMargins,
                styles.width50,
              ]}
              onPress={() => setVegetarian(!isVegetarian)}
            >
              <Checkbox
                style={styles.checkbox}
                value={isVegetarian}
                onValueChange={setVegetarian}
                color={isVegetarian ? Colors.red : undefined}
              />
              <Text style={[styles.checkBoxText, styles.bold]}>Vegetarian</Text>
            </Pressable>
          </View>
        </View>
        <Text style={[styles.profileText]}>Distance</Text>
        <View
          style={[styles.filterContainer, styles.flexColumn, styles.width80]}
        >
          <View>
            <Pressable
              style={[
                styles.horizontalAlign,
                styles.bottomMargins,
                styles.width50,
              ]}
              onPress={() => setDistance0_10(!isDistance0_10)}
            >
              <Checkbox
                style={styles.checkbox}
                value={isDistance0_10}
                onValueChange={setDistance0_10}
                color={isDistance0_10 ? Colors.red : undefined}
              />
              <Text style={[styles.checkBoxText, styles.bold, styles.width100]}>
                0-10 mi
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.horizontalAlign,
                styles.bottomMargins,
                styles.width50,
              ]}
              onPress={() => setDistance12_30(!isDistance12_30)}
            >
              <Checkbox
                style={styles.checkbox}
                value={isDistance12_30}
                onValueChange={setDistance12_30}
                color={isDistance12_30 ? Colors.red : undefined}
              />
              <Text style={[styles.checkBoxText, styles.bold]}>12-30 mi</Text>
            </Pressable>
          </View>
          <View>
            <Pressable
              style={[
                styles.horizontalAlign,
                styles.bottomMargins,
                styles.width50,
              ]}
              onPress={() => setDistance11_20(!isDistance11_20)}
            >
              <Checkbox
                style={styles.checkbox}
                value={isDistance11_20}
                onValueChange={setDistance11_20}
                color={isDistance11_20 ? Colors.red : undefined}
              />
              <Text style={[styles.checkBoxText, styles.bold]}>11-20 mi</Text>
            </Pressable>
            <Pressable
              style={[
                styles.horizontalAlign,
                styles.bottomMargins,
                styles.width50,
              ]}
              onPress={() => setDistance31_plus(!isDistance31_plus)}
            >
              <Checkbox
                style={styles.checkbox}
                value={isDistance31_plus}
                onValueChange={setDistance31_plus}
                color={isDistance31_plus ? Colors.red : undefined}
              />
              <Text style={[styles.checkBoxText, styles.bold]}>31+ mi</Text>
            </Pressable>
          </View>
        </View>

        {/* CUISINE TYPE */}
        <Text style={[styles.profileText]}>Cuisine Type</Text>
        <View
          style={[
            styles.filterContainer,
            styles.flexColumn,
            styles.width80,
            styles.moreBottomMargins,
            styles.heightmatch,
          ]}
        >
          <View>
            <Pressable
              style={[
                styles.horizontalAlign,
                styles.bottomMargins,
                styles.width50,
              ]}
              onPress={() => setAmerican(!isAmerican)}
            >
              <Checkbox
                style={styles.checkbox}
                value={isAmerican}
                onValueChange={setAmerican}
                color={isAmerican ? Colors.red : undefined}
              />
              <Text style={[styles.checkBoxText, styles.bold]}>American</Text>
            </Pressable>
            <Pressable
              style={[
                styles.horizontalAlign,
                styles.bottomMargins,
                styles.width50,
              ]}
              onPress={() => setJapanese(!isJapanese)}
            >
              <Checkbox
                style={styles.checkbox}
                value={isJapanese}
                onValueChange={setJapanese}
                color={isJapanese ? Colors.red : undefined}
              />
              <Text style={[styles.checkBoxText, styles.bold]}>Japanese</Text>
            </Pressable>
            <Pressable
              style={[
                styles.horizontalAlign,
                styles.bottomMargins,
                styles.width50,
              ]}
              onPress={() => setIndian(!isIndian)}
            >
              <Checkbox
                style={styles.checkbox}
                value={isIndian}
                onValueChange={setIndian}
                color={isIndian ? Colors.red : undefined}
              />
              <Text style={[styles.checkBoxText, styles.bold]}>Indian</Text>
            </Pressable>
            <Pressable
              style={[
                styles.horizontalAlign,
                styles.bottomMargins,
                styles.width50,
              ]}
              onPress={() => setCaribbean(!isCaribbean)}
            >
              <Checkbox
                style={styles.checkbox}
                value={isCaribbean}
                onValueChange={setCaribbean}
                color={isCaribbean ? Colors.red : undefined}
              />
              <Text style={[styles.checkBoxText, styles.bold]}>Caribbean</Text>
            </Pressable>
            <Pressable
              style={[
                styles.horizontalAlign,
                styles.bottomMargins,
                styles.width50,
              ]}
              onPress={() => setKorean(!isKorean)}
            >
              <Checkbox
                style={styles.checkbox}
                value={isKorean}
                onValueChange={setKorean}
                color={isKorean ? Colors.red : undefined}
              />
              <Text style={[styles.checkBoxText, styles.bold]}>Korean</Text>
            </Pressable>
            <Pressable
              style={[
                styles.horizontalAlign,
                styles.bottomMargins,
                styles.width50,
              ]}
              onPress={() => setFrench(!isFrench)}
            >
              <Checkbox
                style={styles.checkbox}
                value={isFrench}
                onValueChange={setFrench}
                color={isFrench ? Colors.red : undefined}
              />
              <Text style={[styles.checkBoxText, styles.bold]}>French</Text>
            </Pressable>
            <Pressable
              style={[
                styles.horizontalAlign,
                styles.bottomMargins,
                styles.width50,
              ]}
              onPress={() => setBBQ(!isBBQ)}
            >
              <Checkbox
                style={styles.checkbox}
                value={isBBQ}
                onValueChange={setBBQ}
                color={isBBQ ? Colors.red : undefined}
              />
              <Text style={[styles.checkBoxText, styles.bold]}>BBQ</Text>
            </Pressable>
          </View>
          <View>
            <Pressable
              style={[
                styles.horizontalAlign,
                styles.bottomMargins,
                styles.width50,
              ]}
              onPress={() => setItalian(!isItalian)}
            >
              <Checkbox
                style={styles.checkbox}
                value={isItalian}
                onValueChange={setItalian}
                color={isItalian ? Colors.red : undefined}
              />
              <Text style={[styles.checkBoxText, styles.bold]}>Italian</Text>
            </Pressable>
            <Pressable
              style={[
                styles.horizontalAlign,
                styles.bottomMargins,
                styles.width50,
              ]}
              onPress={() => setChinese(!isChinese)}
            >
              <Checkbox
                style={styles.checkbox}
                value={isChinese}
                onValueChange={setChinese}
                color={isChinese ? Colors.red : undefined}
              />
              <Text style={[styles.checkBoxText, styles.bold]}>Chinese</Text>
            </Pressable>
            <Pressable
              style={[
                styles.horizontalAlign,
                styles.bottomMargins,
                styles.width50,
              ]}
              onPress={() => setGreek(!isGreek)}
            >
              <Checkbox
                style={styles.checkbox}
                value={isGreek}
                onValueChange={setGreek}
                color={isGreek ? Colors.red : undefined}
              />
              <Text style={[styles.checkBoxText, styles.bold]}>Greek</Text>
            </Pressable>
            <Pressable
              style={[
                styles.horizontalAlign,
                styles.bottomMargins,
                styles.width50,
              ]}
              onPress={() => setMexican(!isMexican)}
            >
              <Checkbox
                style={styles.checkbox}
                value={isMexican}
                onValueChange={setMexican}
                color={isMexican ? Colors.red : undefined}
              />
              <Text style={[styles.checkBoxText, styles.bold]}>Mexican</Text>
            </Pressable>
            <Pressable
              style={[
                styles.horizontalAlign,
                styles.bottomMargins,
                styles.width50,
              ]}
              onPress={() => setThai(!isThai)}
            >
              <Checkbox
                style={styles.checkbox}
                value={isThai}
                onValueChange={setThai}
                color={isThai ? Colors.red : undefined}
              />
              <Text style={[styles.checkBoxText, styles.bold]}>Thai</Text>
            </Pressable>
            <Pressable
              style={[
                styles.horizontalAlign,
                styles.bottomMargins,
                styles.width50,
              ]}
              onPress={() => setSeafood(!isSeafood)}
            >
              <Checkbox
                style={styles.checkbox}
                value={isSeafood}
                onValueChange={setSeafood}
                color={isSeafood ? Colors.red : undefined}
              />
              <Text style={[styles.checkBoxText, styles.bold]}>Seafood</Text>
            </Pressable>
            <Pressable
              style={[
                styles.horizontalAlign,
                styles.bottomMargins,
                styles.width50,
              ]}
              onPress={() => setPizza(!isPizza)}
            >
              <Checkbox
                style={styles.checkbox}
                value={isPizza}
                onValueChange={setPizza}
                color={isPizza ? Colors.red : undefined}
              />
              <Text style={[styles.checkBoxText, styles.bold]}>Pizza</Text>
            </Pressable>
          </View>
        </View>

        <Pressable
          onPress={() => navigation.navigate(YourFoodTourScreen)}
          style={[
            styles.buttonLarge.r,
            styles.width70,
            styles.moreBottomMargins,
          ]}
        >
          <Text style={[styles.buttonLargeText.y]}>Generate Food Tour</Text>
        </Pressable>
        <View style={[styles.moreBottomMargins]}></View>
      </View>
      <NavigationBar />
    </SafeAreaView>
  );
}