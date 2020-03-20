import React, { Component } from "react";
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

class OrderDetail extends Component {
  order = this.props.navigation.getParam("orderObj");
  render() {
    console.log(this.order);
    return (
      <Content>
        <Card>
          <CardItem>
            <Text>I am Order Detail :)</Text>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

// CoralDetail.navigationOptions = ({ navigation }) => ({
//   title: navigation.getParam("coralName"),
//   headerRight: <CartButton />
// });

export default OrderDetail;
