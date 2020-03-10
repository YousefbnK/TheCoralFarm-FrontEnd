import React, { Component } from "react";
import { observer } from "mobx-react";

// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";

import styles from "./styles";

// Store
import authStore from "../../stores/authStore";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  submitLogin = () => {
    authStore.login(this.state, this.props.navigation);
  };

  render() {
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Log in</Text>
        <TextInput
          style={styles.authTextInput}
          placeholder="Username"
          placeholderTextColor="#A6AEC1"
          onChangeText={() => this.setState({ username })}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Password"
          placeholderTextColor="#A6AEC1"
          secureTextEntry={true}
          onChangeText={() => this.setState({ password })}
        />
        <TouchableOpacity style={styles.authButton} onPress={this.submitSignup}>
          <Text style={styles.authButtonText}>Log in</Text>
        </TouchableOpacity>
        <Text
          style={styles.authOther}
          onPress={() => this.props.navigation.navigate("Register")}
        >
          Click here to Register!
        </Text>
      </View>
    );
  }
}
export default observer(Login);
