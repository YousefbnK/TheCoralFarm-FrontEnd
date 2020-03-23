import { decorate, observable } from "mobx";
import { instance } from "./instance";

// Stores
import authStore from "./authStore";

// for now i'm using a dummy data delete it later
import orders from "../orders";

class OrderStore {
  ordersList = null;
  CheckoutList = {};
  loading = true;

  // fetchOrders = async () => {
  //   try {
  //     const res = await instance.get("orders");
  //     // change  import from  instance2 to instance when using it
  //     const orders = res.data;
  //     this.ordersList = orders;
  //     this.loading = false;
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  //  below funtion to prep the item list from cart to be sent to Order/Creat Api
  checkoutPrep = ordersList => {
    const orderItems = [];
    ordersList.map(item => {
      const _orderItems = { coral: item.id, quantity: item.quantity };
      orderItems.push(_orderItems);
    });
    this.CheckoutList.orderItems = orderItems;
    this.CheckoutList.user = authStore.user.user_id;
  };

  // below function send the post request to the api
  checkoutOrders = async () => {
    console.log("checkout list - Post request", this.CheckoutList);
    try {
      const res = await instance.post("orders/create", this.ordersList);
      console.log("checkout order posted");
    } catch (error) {
      console.error(error);
    }
  };

  fetchOrders = () => (this.ordersList = orders);
}

decorate(OrderStore, {
  coralList: observable,
  loading: observable
});

const orderStore = new OrderStore();
orderStore.fetchOrders();

export default orderStore;
