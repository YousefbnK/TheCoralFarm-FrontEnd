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
          {/* order.image when we link the API */}
        </CardItem>

        <CardItem >

          <Text>
            KD {order.coralPrice} | Quantity: {order.quantity}
          </Text>

          <Right>
            <Text>Total {order.totalPrice} KD</Text>
          </Right>
        </CardItem>
      </Card>
    </Content>
  );
};

export default withNavigation(OrderDetailsCards);
