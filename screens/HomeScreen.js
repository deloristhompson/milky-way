import "react-native-gesture-handler";
import React from "react";
import { View, ImageBackground, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import SearchInput from "../components/SearchInput";
// Background image constant
const BackgroundImage = require("../assets/dark-night-sky.jpg");

// Class component
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      soundRecord: '',
      error: false
    }
  }
  

  // Accepts a parameter to change the local state of the planet
  handleUpdateLocation = (planet) => {
    const { navigation } = this.props;

    // Navigation to correct page
    navigation.navigate(planet, {
      name: planet,
    });
  };

  render() {
    const { navigation } = this.props;
    const { soundRecord } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={BackgroundImage}
          style={styles.imageBackground}
        >

          <SearchInput
            placeholder="Search for a Celestial Object"
            onSubmit={this.handleUpdateLocation}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  imageBackground: {
    resizeMode: "cover",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
