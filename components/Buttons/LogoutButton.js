import React, { Component } from "react";

import { Icon, Button, Text } from "native-base";
import authStore from "../../stores/authStore";
import { withNavigation } from "react-navigation";

// Stores

class LogoutButton extends Component {
  logout = () => {
    authStore.logout();
    alert("You have logged out, Thank you");
  };
  render() {
    return (
      <Button transparent onPress={this.logout}>
        <Icon name="logout" type="AntDesign" style={{ color: "black" }} />
        <Text>Logout</Text>
      </Button>
    );
  }
}

export default withNavigation(LogoutButton);
