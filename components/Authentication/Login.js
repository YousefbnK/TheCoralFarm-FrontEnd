import React, { Component } from "react";
import { observer } from "mobx-react";

// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";

import styles from "./styles";

//Components

// Store
import authStore from "../../stores/authStore";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  submitLogin = () => {
    authStore.login(this.state);
    this.props.handleClose();
  };

  handlePress = () => this.props.register();

  render() {
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Log in</Text>
        <TextInput
          style={styles.authTextInput}
          placeholder="Username"
          placeholderTextColor="#A6AEC1"
          onChangeText={text => this.setState({ username: text })}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Password"
          placeholderTextColor="#A6AEC1"
          secureTextEntry={true}
          onChangeText={text => this.setState({ password: text })}
        />
        <TouchableOpacity style={styles.authButton} onPress={this.submitLogin}>
          <Text style={styles.authButtonText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handlePress}>
          <Text style={styles.authOther}>Click here to Register!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default observer(Login);
