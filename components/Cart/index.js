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

class CoralCart extends Component {
  checkout = () => {
    if (authStore.user) {
      cartStore.checkoutCart();
      alert("Thank you for shopping Corals from The Coral Farm");
    } else {
      alert("Please log in");
    }
  };
  render() {
    const cartItems = cartStore.items.map(item => (
      <CartItem item={item} key={`${item.id}`} />
    ));
    return (
      <List>
        {cartItems}
        <Button full danger onPress={checkout}>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

CoralCart.navigationOptions = {
  title: "Cart"
};

export default observer(CoralCart);
