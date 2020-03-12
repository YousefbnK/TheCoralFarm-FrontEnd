import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";

// Stores
import cartStore from "../../stores/CartStore";

const CoralCart = () => {
  const cartItems = cartStore.items.map(item => (
    <CartItem item={item} key={`${item.id}`} />
  ));

  return (
    <List>
      {cartItems}
      <Button full danger>
        <Text>Checkout</Text>
      </Button>
    </List>
  );
};

CoralCart.navigationOptions = {
  title: "Cart"
};

export default observer(CoralCart);
