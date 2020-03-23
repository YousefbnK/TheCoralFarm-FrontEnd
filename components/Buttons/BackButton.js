import React, { Component } from "react";

//React Native
import { Image, TouchableHighlight } from "react-native";

import styles from "./styles";

class BackButton extends Component {
  handlePress = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <TouchableHighlight
        onPress={this.handlePress}
        style={styles.btnContainer}
      >
        <Image
          source={require("../../assets/backArrow.png")}
          style={styles.btnIcon}
        />
      </TouchableHighlight>
    );
  }
}

export default BackButton;
