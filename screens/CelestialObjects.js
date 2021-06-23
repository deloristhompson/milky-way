// Text - Supports nesting, styling, and touch handling
// View - Container that supports layout
// ImageBackground - Allows setting a background image
// Image - Allows adding images
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Platform,
  TextInput,
} from "react-native";
import React from "react";
const BackgroundImage = require("../assets/dark-night-sky.jpg");
import { StatusBar } from "expo-status-bar";
import celestialImages from "../utils/getImageForCelestialObject";
import { getPlanet } from "../utils/planets_list";
const planet = getPlanet;
// import { Audio } from "expo-av";
import Audio from "../components/Audio";
import { getCelestialObject } from "../utils/getCelestialObject";

const CelestialObjectsScreen = ({ route }) => {
  const name = route.name;

  // Couldn't get this to return the data.  Works otherwise.
async function handleUpdate (planet) {

  if (!planet) return;
// console.log(planet);
    try {
      const { englishName, moons } = await getCelestialObject(planet);
      console.log(englishName);
      return englishName;
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <View style={styles.container}>
      {/* Image background: Improves the experience with a beautiful night sky. */}
      <ImageBackground source={BackgroundImage} style={styles.imageBackground}>
      {/* <Audio /> */}
        <View style={styles.detailsContainer}>
          <Text style={styles.mars}>{name}</Text>
          {/* Use an array to set multiple styless on a single component. */}
          <Text style={[styles.mainFont, styles.header]}>
            {planet(name).type ? planet(name).type : planet(name).numberFromSun}
          </Text>

          <TextInput autoCorrect={false} placeholder="" />
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            {/* PNG image of the planets in the Solar System */}
            <Image
              source={celestialImages(name)}
              style={{ width: 300, height: 300 }}
              resizeMethod={"resize"}
              resizeMode={"contain"}
            ></Image>
          </View>

          <Text style={{ color: "white", paddingTop: 10 }}>
            <Text style={styles.factHeaders}>Classification:</Text>{" "}
            <Text style={styles.facts}> {planet(name).classification}</Text>
            {"\n"}
            {"\n"}
            <Text style={styles.factHeaders}>Length Of Year:</Text>{" "}
            <Text style={styles.facts}>{planet(name).lengthOfYear}</Text>
            {"\n"}
            {"\n"}
            <Text style={styles.factHeaders}>Distance From Sun:</Text>{" "}
            <Text style={styles.facts}>
              {planet(name).astronomicalUnits} AU
            </Text>
            {"\n"}
            {"\n"}
            <Text style={styles.factHeaders}>Moons:</Text>{" "}
            <Text style={styles.facts}>{planet(name).totalMoons}</Text>
            {"\n"}
            {"\n"}
            <Text style={styles.factHeaders}>Radius:</Text>{" "}
            <Text style={styles.facts}>{planet(name).radius}</Text>
            {"\n"}
            <Text style={styles.factHeaders}>Fun Fact:</Text>{" "}
            <Text style={styles.facts}>{planet(name).firstFunFact}</Text>
          </Text>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
};

export default CelestialObjectsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mars: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 30,
  },
  flexMode: {
    // Attribute that will make the image take up any room remaining in their
    // parent container in relation to any sibling components.
    // Space is shared in proportion to their defined flex values.
    flex: 1,
  },
  image: {
    // Set to null so the dimensions of the image fit the container
    width: null,
    // Set to null so the dimensions of the image fit the container
    height: null,
  },
  resizeCover: {
    // Defines how the image is resized when the image element does not match its actual dimensions
    resizeMode: "cover",
  },
  resizeContain: {
    // Defines how the image is resized when the image element does not match its actual dimensions
    resizeMode: "contain",
  },
  mainFont: {
    color: "#fff",
    // Specified font for iOS and Andriod.  Both operating systems provide a different set of native fonts.
    ...Platform.select({
      ios: {
        fontFamily: "AvenirNext-Regular",
      },
      android: {
        fontFamily: "Roboto",
      },
    }),
  },
  header: {
    fontSize: 20,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
    paddingHorizontal: 20,
    // Specified font for iOS and Andriod.  Both operating systems provide a different set of native fonts.
    ...Platform.select({
      ios: {
        fontFamily: "AvenirNext-Regular",
        paddingTop: 50,
        paddingBottom: 50,
      },
      android: {
        fontFamily: "Roboto",
        paddingTop: 10,
      },
    }),
  },
  factHeaders: {
    fontWeight: "bold",
    fontSize: 20,
  },
  facts: {
    fontSize: 15,
    letterSpacing: 2,
  },
  imageBackground: {
    resizeMode: "cover",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
