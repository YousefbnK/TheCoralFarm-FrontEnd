import React from "react";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

import NumericInput from "react-native-numeric-input";

// Style
import styles from "./styles";

//Components

//Stores
import cartStore from "../../stores/cartStore";
import { observer } from "mobx-react";

const CartItem = ({ item }) => {
  const changeQuantity = value => {
    item.quantity = value;
    item.total = value * item.price;
  };
  return (
    <ListItem style={styles.listStyle}>
      <Left>
        <Text style={styles.drink}> {item.coral} </Text>
      </Left>
      <NumericInput
        // value={item.quantity}
        onChange={changeQuantity}
        initValue={item.quantity}
        minValue={1}
      />
      <Right></Right>
      <Body>
        <Text note style={styles.option}>
          {`${item.total} KD`}
        </Text>
      </Body>
      <Button transparent onPress={() => cartStore.removeItemFromCart(item)}>
        <Icon name="trash" style={styles.removeItem} />
      </Button>
    </ListItem>
  );
};

export default observer(CartItem);
