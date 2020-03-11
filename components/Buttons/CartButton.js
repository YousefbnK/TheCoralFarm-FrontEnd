import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
import { Icon, Button } from "native-base";

// Stores

const CartButton = () => {
  //   const handlePress = () => navigation.navigate("CartScreen");

  return (
    <Button transparent>
      <Icon
        name="shopping-cart"
        type="FontAwesome5"
        style={{ color: "black" }}
      />
    </Button>
    //   ) : (
    // <LoginButton />
    //   );
  );
};

export default withNavigation(observer(CartButton));
