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
  Right,
  View
} from "native-base";

import styles from "./styles";
import { ScrollView, Image } from "react-native";

const OrderCard = ({ order, navigation }) => {
  const handlePress = () => {
    navigation.navigate("OrderDetailScreen", {
      orderObj: order,
      orderId: `Order#${order.id}`
    });
  };

  const orderimg = () => {
    order.orderItems.map(item => {
      const image = `http://172.20.10.3:80${item.image}`;
      return (
        <Image
          style={{
            width: 70,
            height: 70,
            margin: 2,
            borderWidth: 4,
            borderColor: "gray"
          }}
          source={{ uri: image }}
        />
      );
    });
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
        <CardItem>
          <ScrollView
            contentContainerStyle={styles.contentContainer}
            horizontal={true}
          >
            {orderimg()}
          </ScrollView>
        </CardItem>
      </Card>
    </Content>
  );
};

export default withNavigation(OrderCard);
