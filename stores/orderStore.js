import { decorate, observable } from "mobx";
import { instance } from "./instance";

// for now i'm using a dummy data delete it later
// import orders from "../orders";

class OrderStore {
  ordersList = [];
  CheckoutList = {};
  loading = true;

  fetchOrders = async () => {
    try {
      const res = await instance.get("orders/");
      const orders = res.data;
      this.ordersList = orders;
      this.loading = false;
      console.log("order list mounted");
      console.log("order list - get request", this.ordersList);
    } catch (err) {
      console.error(err);
    }
  };

  //  below funtion to prep the item list from cart to be sent to Order/Creat Api
  checkoutPrep = ordersList => {
    const orderItems = [];
    ordersList.map(item => {
      const _orderItems = { coral: item.id, quantity: item.quantity };
      orderItems.push(_orderItems);
    });
    this.CheckoutList.orderItems = orderItems;
  };

  // below function send the post request to the api
  checkoutOrders = async () => {
    console.log("checkout list - Post request", this.CheckoutList);
    try {
      await instance.post("orders/create", this.CheckoutList);
      console.log("checkout order posted");
    } catch (error) {
      console.error(error);
    }
  };

  // fetchOrders = () => (this.ordersList = orders);
}

decorate(OrderStore, {
  ordersList: observable,
  loading: observable
});

const orderStore = new OrderStore();

export default orderStore;
