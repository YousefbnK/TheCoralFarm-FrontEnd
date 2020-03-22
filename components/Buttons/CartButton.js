import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
import { Icon, Button,Text } from "native-base";
import { View } from "react-native";

// Stores

import cartStore from "../../stores/cartStore";

const CartButton = ({ navigation }) => {
  const handlePress = () =>
    cartStore.items
      ? navigation.navigate("CartScreen")
      : alert("Your Cart is empty, please add items");

  return (
    
      <Button onPress={handlePress} transparent>
      <View style={{
      flex: 1,
      justifyContent: 'alignContent',
    }}>
      <Text style={{fontSize: 15,color: "#696969",textAlign: "center"}}>{cartStore.quantity}</Text>
        <Icon
          name="shopping-cart"
          type="FontAwesome5"
          style={{ color: "black" }}
          onPress={handlePress}
        />
    </View>
      </Button>
  );
};

export default withNavigation(observer(CartButton));
