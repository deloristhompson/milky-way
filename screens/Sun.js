//TODO: DRY
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Platform,
  TextInput,
  Button,
} from "react-native";
import React from "react"; 
const BackgroundImage = require("../assets/dark-night-sky.jpg");
import { StatusBar } from "expo-status-bar";
import getImageForCelestialObject from "../utils/getImageForCelestialObject";

const Sun = ({ route, props }) => {
  // console.log(route);
  const name = route.name;
  return (
    <View style={styles.container}>
      {/* Image background: Improves the experience with a beautiful night sky. */}
      <ImageBackground
        source={BackgroundImage}
        style={styles.flexMode}
        imageStyle={[styles.image, styles.flexMode, styles.resizeCover]}
      >
        <View style={styles.detailsContainer}>
          <Text style={styles.mars}>{name}</Text>
          {/* Use an array to set multiple styless on a single component. */}
            
          <TextInput autoCorrect={false} placeholder="" />
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            {/* PNG image of the Sun */}
            <Image source={getImageForCelestialObject("Sun")} resizeMode="cover" style={{width: 300, height: 300}}></Image>
          </View>
          <Text style={{ color: "white", paddingTop: 10 }}>
            <Text style={styles.factHeaders}>Age:</Text>{" "}
            <Text style={styles.facts}> ~4.5 billion years</Text>
            {"\n"}
            {"\n"}
            <Text style={styles.factHeaders}>Distance From Galactic Center:</Text>{" "}
            <Text style={styles.facts}>26,000 light years</Text>
            {"\n"}
            {"\n"}
            <Text style={styles.factHeaders}>Nuclear Fusion:</Text>{" "}
            <Text style={styles.facts}>The core is about 27 million degrees Fahrenheit(15 million degrees Celsius)</Text>
            {"\n"}
            {"\n"}
            <Text style={styles.factHeaders}>Radius:</Text>{" "}
            <Text style={styles.facts}>432,376 miles</Text>
            {"\n"}
            <Text style={styles.factHeaders}>Fun Fact:</Text>{" "}
            <Text style={styles.facts}>
              The Sun is the largest object within our solar system, coprising 99.8% of the system's mass
            </Text>
          </Text>
          {/* Another PNG image of Mars:  Does not display on Android: Remove? */}
          {/* <Image
            source={another}
            style={[styles.flexMode, styles.resizeContain, styles.image]}
          /> */}
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
};

export default Sun;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mars: {
    color: "#fff",
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
    // fontSize: 30,
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
    fontSize: 30,
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
});
