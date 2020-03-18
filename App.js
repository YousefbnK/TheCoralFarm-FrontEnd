import React from "react";
// import { StyleSheet } from "react-native";
import AppContainer from "./navigation";
import cartStore from "./stores/cartStore";
import { AsyncStorage } from "react-native";

class App extends React.Component {
  async componentDidMount() {
    cartStore.fetchCart();
  }

  render() {
    return <AppContainer />;
  }
}

export default App;
