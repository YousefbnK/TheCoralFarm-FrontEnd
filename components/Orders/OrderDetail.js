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
import OrderDetailsCards from "./OrderDetailsCards"
import CartButton from "../Buttons/CartButton"

class OrderDetail extends Component {
  order = this.props.navigation.getParam("orderObj");

  ordercard=this.order.order_items.map(item =>
    <OrderDetailsCards order={item}  key={item.coral}/>
  )
  render() {
    
    return (
      <Content>
      <Card>
      <Text style={styles.text}> Date: {this.order.date}</Text>
      <Text style={styles.text}> Pyment Method: {this.order.pyment_method}</Text>
      <Text style={styles.text}> Pyment Method: {this.order.totalPrice}</Text>
      </Card>

          <List>
          {this.ordercard}
          </List>

      </Content>
    );
  }
}

OrderDetail.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("orderId"),
  headerRight: <CartButton />
});

export default OrderDetail;
