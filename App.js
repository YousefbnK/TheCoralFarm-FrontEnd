import React from "react";
// import { StyleSheet } from "react-native";
import AppContainer from "./navigation";
import cartStore from "./stores/cartStore";
import { AsyncStorage } from "react-native";

export default class App extends React.Component {
  async componentDidMount() {
    try {
      let newItems = await AsyncStorage.getItem("myData");
      newItems = JSON.parse(newItems);
      cartStore.items = newItems;
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return <AppContainer />;
  }
}
