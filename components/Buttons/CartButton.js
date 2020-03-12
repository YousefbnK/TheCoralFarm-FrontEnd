import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
import { Icon, Button } from "native-base";

// Stores

const CartButton = ({ navigation }) => {
  const handlePress = () => navigation.navigate("CartScreen");

  return (
    <Button onPress={handlePress} transparent>
      <Icon
        name="shopping-cart"
        type="FontAwesome5"
        style={{ color: "black" }}
        onPress={handlePress}
      />
    </Button>
  );
};

export default withNavigation(observer(CartButton));
