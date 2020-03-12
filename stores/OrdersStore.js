import { decorate, observable } from "mobx";
import { instance } from "./instance";

// for now i'm using a dummy data delete it later
import corals from "../data";

class OrderStore {
  ordersList = [corals];
  loading = true;

  // fetchOrders = async () => {
  //   try {
  //     const res = await instance.get("");
  //     // change  import from  instance2 to instance when using it
  //     const orders = res.data;
  //     this.ordersList = orders;
  //     this.loading = false;
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  fetchOrders = () => (this.ordersList = corals);

  // fetchCoraltype = () => (this.coralType = coralstype);
}

decorate(OrderStore, {
  coralList: observable,
  loading: observable
});

const orderStore = new OrderStore();
console.log("Data", orderStore.ordersList);
orderStore.fetchOrders();

export default orderStore;
