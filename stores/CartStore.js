import { computed, decorate, observable } from "mobx";

class CartStore {
  items = [];

  addItemToCart = item => {
    const itemExist = this.items.find(_item => _item.coral === item.coral);
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
export default cartStore;
