import { computed, decorate, observable } from "mobx";
import { AsyncStorage } from "react-native";

class CartStore {
  // items = [{ "": "" }];
  items = [];

  saveCart = async () => {
    let myJSON = JSON.stringify(this.items);
    await AsyncStorage.setItem("myData", myJSON);
  };

  fetchCart = async () => {
    try {
      let newItems = await AsyncStorage.getItem("myData");
      newItems = JSON.parse(newItems);
      this.items = newItems;
    } catch (err) {
      console.log(err);
    }
  };

  addItemToCart = item => {
    if (this.items) {
      const itemExist = this.items.find(_item => _item.coral === item.coral);
      itemExist.quantity += item.quantity;
      itemExist.total += item.total;
    } else {
      this.items.push(item);
    }
  };

  removeItemFromCart = async item => {
    this.items = this.items.filter(_item => _item !== item);
    this.saveCart();
  };

  checkoutCart = () => {
    this.items = [];
    AsyncStorage.removeItem("myData");
  };

  get quantity() {
    let quantity = 0;
    this.items.forEach(item => (quantity += item.quantity));
    return quantity;
  }
}

decorate(CartStore, {
  items: observable,
  quantity: computed
});

const cartStore = new CartStore();
export default cartStore;
