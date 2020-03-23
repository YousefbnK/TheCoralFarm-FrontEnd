import React, { Component } from "react";
import {
  Header,
  Content,
  List,
  Card,
  CardItem,
  Body,
  Text,
  Left,
  Right
} from "native-base";

import styles from "./styles";

// Component
import OrderDetailsCards from "./OrderDetailsCards";
import CartButton from "../Buttons/CartButton";

class OrderDetail extends Component {
  order = this.props.navigation.getParam("orderObj");

  ordercard = this.order.orderItems.map(item => (
    <OrderDetailsCards order={item} key={item.coral} />
  ));
  render() {
    return (
      <Content>
        <Card>
          <Text style={styles.text}> Date: {this.order.date}</Text>
          <Text style={styles.text}>
            {" "}
            Payment Method: {this.order.pyment_method}
          </Text>
        </Card>

        <List>{this.ordercard}</List>
        <Card>
          <Right>
            <Text style={styles.text}>
              {" "}
              SubTotal: {this.order.totalPrice} KD
            </Text>
          </Right>
        </Card>
      </Content>
    );
  }
}

OrderDetail.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("orderId"),
  headerRight: <CartButton />
});

export default OrderDetail;
