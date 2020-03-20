import React from "react";
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

const OrderCard = ({ order }) => {
  return (
    <Content>
      <Card>
        <CardItem>
          <Text style={styles.text}>order#{order.id}</Text>
        </CardItem>

        <CardItem>
          <Text>
            KD {order.totalPrice} | {order.pyment_method}
          </Text>

          <Right>
            <Text>{order.date}</Text>
          </Right>
        </CardItem>
      </Card>
    </Content>
  );
};

export default OrderCard;
