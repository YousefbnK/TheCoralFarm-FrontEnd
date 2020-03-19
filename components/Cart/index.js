import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button, Left, Right, Icon } from "native-base";

// Style
import styles from "./styles";

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
      <CartItem item={item} key={`${item.id}`} />
    ));

    return (
      <List>
        {cartItems}
        {authStore.user ? (
          <Button full danger onPress={this.checkout}>
            <Text>Checkout</Text>
          </Button>
        ) : (
          <LoginModal
            handleClose={this.handleClose}
            handleOpen={this.handleOpen}
            state={this.state.modalStatus}
          />
        )}
      </List>
    );
  }
}

CoralCart.navigationOptions = {
  title: "Cart"
};

export default observer(CoralCart);
