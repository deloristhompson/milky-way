import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  // When created with arrows we do not have to hghgjuse the keyword bind
  handleChangeInput = (text) => {
    // Owned by the parent calling the Component and not the child (SearchInput)
    // Clears the text property in state
    this.setState({ text: text });
  };

  handleSubmitEditing = () => {
    const { onSubmit } = this.props;
    const { text } = this.state;

    // Check if the text is not blank
    if (!text) return;

    onSubmit(text);
    this.setState({ text: "" });
  };

  capitalizeFirstLetter = (word) => {
    // console.log(word.charAt(0).toUpperCase() + word.slice(1));
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  render() {
    const { text, placeholder } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          autoCorrect={false}
          value={text}
          // Accepts a placeholder prop, data flows from parent to child through props.
          // When a parent renders a child it sends along the props the child depends on.
          // Component can access all its props through the this keyword
          placeholder={placeholder}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          // Shows a button on the right side of the input field: iOS
          clearButtonMode="always"
          style={styles.textInput}
          // Accepts a function (ours is custom)
          // Method is invoked everytime the text within the textinput field is changed
          // TextInput needs to listen for the onChangeText event to notifiy the parent (SearchInput) to listen for the event
          onChangeText={this.handleChangeInput}
          onSubmitEditing={this.handleSubmitEditing}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    height: 40,
    width: 300,
    alignSelf: "center",
    marginHorizontal: 20,
    paddingHorizontal: 20,
    backgroundColor: "#666",
  },
  textInput: {
    // Flex allows the component to expand and take up any room remaining in the parent container in relation to any siblings.
    flex: 1,
    color: "white",
  },
});
