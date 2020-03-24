import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { View, Text, List, Button } from "native-base";

// Style
import styles from "./styles";

import { ScrollView } from "react-native";

// Component
import CartItem from "./CartItem";

// Stores
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";
import LoginModal from "../Modal/LoginModal";

class CoralCart extends Component {
  state = {
    modalStatus: false
  };

  handleClose = () => {
    this.setState({ modalStatus: false });
  };

  handleOpen = () => {
    this.setState({ modalStatus: true });
  };
  checkout = () => {
    cartStore.checkoutCart();
    alert("Thank you for shopping Corals from The Coral Farm");
  };

  render() {
    const cartItems = cartStore.items.map(item => (
      <CartItem item={item} key={item.coral} />
    ));
    return (
      <ScrollView>
        <View>
          <List>{cartItems}</List>
          <View>
            <Text style={styles.total}>Total {cartStore.grandTotal} KD </Text>
          </View>
          {authStore.user ? (
            <View style={styles.container}>
              <Button style={styles.bottom} full danger onPress={this.checkout}>
                <View>
                  <Text>Checkout</Text>
                </View>
              </Button>
            </View>
          ) : (
            <LoginModal
              handleClose={this.handleClose}
              handleOpen={this.handleOpen}
              state={this.state.modalStatus}
            />
          )}
        </View>
      </ScrollView>
    );
  }
}

CoralCart.navigationOptions = {
  title: "Cart"
};

export default observer(CoralCart);
