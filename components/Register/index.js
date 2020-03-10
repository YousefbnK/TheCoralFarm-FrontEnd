import React, { Component } from "react";

// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";

import styles from "./styles";

//Stores

import authStore from "../../stores/authStore";

class Register extends Component {
  state = {
    username: "",
    password: ""
  };

  submitSignup = () => authStore.register(this.state, this.props.navigation);

  render() {
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Register</Text>
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
        <TouchableOpacity style={styles.authButton} onPress={this.submitSignup}>
          <Text style={styles.authButtonText}>Register</Text>
        </TouchableOpacity>
        <Text
          style={styles.authOther}
          onPress={() => this.props.navigation.navigate("Login")}
        >
          Click here to log in!
        </Text>
      </View>
    );
  }
}

Register.navigationOptions = {
  title: "Signup"
};

export default Register;
