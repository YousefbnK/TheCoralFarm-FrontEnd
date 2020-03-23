import { computed, decorate, observable } from "mobx";
import { AsyncStorage } from "react-native";

// store
import orderStore from "./orderStore";

class CartStore {
  items = [];
  AsyncItems = [];

  saveCart = async () => {
    let myJSON = JSON.stringify(this.items);
    await AsyncStorage.setItem("myData", myJSON);
  };

  fetchCart = async () => {
    try {
      let newItems = await AsyncStorage.getItem("myData");
      if (newItems) {
        newItems = JSON.parse(newItems);
        this.items = newItems;
      }
    } catch (err) {
      console.log(err);
    }
  };

  addItemToCart = item => {
    if (this.items != null) {
      const itemExist = this.items.find(_item => _item.coral === item.coral);
      if (itemExist) {
        itemExist.quantity += item.quantity;
        itemExist.total = parseFloat(item.total) + parseFloat(itemExist.total);
      } else {
        this.items.push(item);
      }
    } else {
      this.items.push(item);
    }
  };

  removeItemFromCart = async item => {
    this.items = this.items.filter(_item => _item !== item);
    this.saveCart();
  };

  checkoutCart = async () => {
    orderStore.checkoutPrep(this.items);
    await orderStore.checkoutOrders();
    this.items = [];
    await AsyncStorage.removeItem("myData");
  };

  get quantity() {
    let quantity = 0;
    if (this.items.length < 1) {
      quantity = 0;
    } else {
      this.items.forEach(item => (quantity += item.quantity));
    }

    return quantity;
  }
}

decorate(CartStore, {
  items: observable,
  quantity: computed
});

const cartStore = new CartStore();
export default cartStore;
