import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Content, List, Text } from "native-base";

// Components
import OrderCard from "./OrderCard";
import CartButton from "../Buttons/CartButton";

//Stores
import orderStore from "../../stores/orderStore";

class OrderList extends Component {
  orders = orderStore.ordersList.map(order => (
    <OrderCard order={order} key={order.date} />
  ));

  render() {
    return (
      <Content>
        <List>{this.orders}</List>
      </Content>
    );
  }
}
OrderList.navigationOptions = () => ({
  title: "Order History",
  headerRight: <CartButton />
});

export default observer(OrderList);
