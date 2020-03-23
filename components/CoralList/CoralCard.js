import React from "react";
import { withNavigation } from "react-navigation";
import { observer } from "mobx-react";

import { Text, View, TouchableHighlight, Image } from "react-native";

// NativeBase Components
import { Button, Icon } from "native-base";

// Stores
import cartStore from "../../stores/cartStore";

import styles from "./styles";

const CoralCard = ({ coral, navigation }) => {
  const handlePress = () =>
    navigation.navigate("DetailScreen", {
      coralID: coral.id,
      coralName: coral.name,
      coralPrice: coral.price
    });

  const handleAdd = () => {
    const addToCart = {
      coral: coral.name,
      id: coral.id,
      price: coral.price,
      total: coral.price,
      quantity: 1
    };
    cartStore.addItemToCart(addToCart);
    cartStore.saveCart();
  };

  return (
    <TouchableHighlight
      underlayColor="rgba(73, 182, 77, 1.0)"
      onPress={handlePress}
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: coral.image }} />
        <Text style={styles.title}>{coral.name}</Text>
        <Text style={styles.category}>{coral.price}</Text>

        <Button transparent onPress={handleAdd}>
          <Text style={{ color: "grey" }}>Add to cart</Text>
          <Icon
            name="ios-add-circle"
            type="Ionicons"
            style={{ color: "black" }}
            size={45}
          />
        </Button>
      </View>
    </TouchableHighlight>
  );
};

export default withNavigation(observer(CoralCard));
