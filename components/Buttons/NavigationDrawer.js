import React, { Component } from "react";
import { Icon } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "react-native";

class NavigationDrawer extends Component {
  toggleDrawer = () => {
    this.props.navigation.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Icon
            name="profile"
            type="AntDesign"
            style={{ color: "black", marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default NavigationDrawer;
