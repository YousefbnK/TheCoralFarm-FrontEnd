import { computed, decorate, observable } from "mobx";
import { AsyncStorage } from "react-native";

class CartStore {
  items = [];

  //  this is being called on handleAdd.CoralDetail  //
  asyncStorage = async () => {
    let myJSON = JSON.stringify(this.items);
    console.log("my data: ", myJSON);
    await AsyncStorage.setItem("myData", myJSON);
  };

  //  this is being called as soon as the app starts //
  //This is causing an error so i moved it to App.js//
  // fetchAsyncStorage = async () => {
  //   try {
  //     let newItems = await AsyncStorage.getItem("myData");
  //     newItems = JSON.parse(newItems);
  //     this.items = newItems;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  addItemToCart = item => {
    console.log("Is it", item);
    console.log("lala", this.items);
    const itemExist = this.items.find(
      _item => _item.drink === item.drink && _item.option === item.option
    );
    if (itemExist) itemExist.quantity += item.quantity;
    else this.items.push(item);
  };

  removeItemFromCart = item => {
    this.items = this.items.filter(_item => _item !== item);
  };

  checkoutCart = () => {
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
// cartStore.fetchAsyncStorage();

export default cartStore;
