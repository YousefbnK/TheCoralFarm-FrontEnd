import React from "react";
import { Header, Content, Card, CardItem, Body, Text, Left } from "native-base";
import styles from "./styles";

const OrderCard = ({ order }) => {
  return (
    <Header>
      <Content>
        <Card>
          <CardItem>
            <Body>
              <Left>
                <Text style={styles.text}>{order.name}</Text>
              </Left>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Header>
  );
};

export default OrderCard;
