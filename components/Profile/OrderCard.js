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

const OrderCard = ({ order, navigation }) => {
  const handlePress = () => {
    navigation.navigate("OrderDetailScreen", { orderObj: order });
    console.log("whaaaaaat");
  };

  return (
    <Content>
      <Card>
        <CardItem>
          <Text style={styles.text}>order#{order.id}</Text>
        </CardItem>

        <CardItem button onPress={handlePress}>
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

export default withNavigation(OrderCard);
