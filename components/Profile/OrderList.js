import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Content, List, Spinner } from "native-base";

// Components
import OrderCard from "./OrderCard";
import CartButton from "../Buttons/CartButton";

//Stores
import orderStore from "../../stores/orderStore";
import authStore from "../../stores/authStore";

class OrderList extends Component {
  componentDidMount() {
    if (authStore.user) orderStore.fetchOrders();
  }

  render() {
    if (orderStore.loading) return <Spinner />;
    const orders = orderStore.ordersList.map(order => (
      <OrderCard order={order} key={order.id} />
    ));

    return (
      <Content>
        <List>{orders}</List>
      </Content>
    );
  }
}
OrderList.navigationOptions = ({ navigation }) => ({
  title: "Orders History",
  headerRight: <CartButton />
});
export default observer(OrderList);
