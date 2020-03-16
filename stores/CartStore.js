import { computed, decorate, observable } from "mobx";
import { AsyncStorage } from "react-native";

class CartStore {
  items = [];
  //  this is being called on handleAdd.CoralDetail  //
  asyncStorage = async () => {
    let myJSON = JSON.stringify(this.items);
    await AsyncStorage.setItem("myData", myJSON);
  };

  addItemToCart = item => {
    const itemExist = this.items.find(_item => _item.coral === item.coral);
    if (itemExist) itemExist.quantity += item.quantity;
    else this.items.push(item);
  };

  removeItemFromCart = async item => {
    this.items = this.items.filter(_item => _item !== item);
    this.asyncStorage();
  };

  checkoutCart = () => {
    console.log("Hello", this.items);
    this.items = [];
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
