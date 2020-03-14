import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";

// Stores
import cartStore from "../../stores/CartStore";
import authStore from "../../stores/authStore";

const CoralCart = () => {
  const cartItems = cartStore.items.map(item => (
    <CartItem item={item} key={`${item.id}`} />
  ));

  const checkout = () => {
    if (authStore.user) {
      cartStore.checkoutCart();
      alert("Thank you for shopping Corals from The Coral Farm");
    } else {
      alert("Please log in");
    }
  };

  return (
    <List>
      {cartItems}
      <Button full danger onPress={checkout}>
        <Text>Checkout</Text>
      </Button>
    </List>
  );
};

CoralCart.navigationOptions = {
  title: "Cart"
};

export default observer(CoralCart);
