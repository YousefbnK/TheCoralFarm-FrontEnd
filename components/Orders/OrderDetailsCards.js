import React from "react";
import { withNavigation } from "react-navigation";
import {
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Left,
  Right
} from "native-base";

import styles from "./styles";

const OrderDetailsCards = ({ order, navigation }) => {

  return (
    <Content>
      <Card>
        <CardItem>
          <Text style={styles.text}>{order.coralName}</Text>
          <Text note> add imge  </Text>
        </CardItem>

        <CardItem >

          <Text>
            KD {order.coralPrice} | quantity: {order.quantity}
          </Text>

          <Right>
            <Text>Total Price{order.totalPrice}</Text>
          </Right>
        </CardItem>
      </Card>
    </Content>
  );
};

export default withNavigation(OrderDetailsCards);
