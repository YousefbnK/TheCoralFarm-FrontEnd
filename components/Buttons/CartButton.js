import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
import { Icon, Button } from "native-base";

// Stores
import authStore from "../../stores/authStore";

const CartButton = ({ navigation }) => {
  const handlePress = () =>
    authStore.user ? navigation.navigate("CartScreen") : alert("Please Login");

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
