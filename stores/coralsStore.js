import { decorate, observable } from "mobx";
import { instance } from "./instance2";

// for now i'm using a dummy data delete it later
import corals from "../data";
import coralstype from "../typeData";

class CoralStore {
  coralList = [];
  coralType = [];
  loading = true;

  // fetchCoraltype = async () => {
  //   try {
  //     const res = await instance.get("coraltype/");
  //     // change  import from  instance2 to instance when using it
  //     const type = res.data;
  //     this.coralType = type;
  //     this.loading = false;
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  fetchcorals = () => (this.coralList = corals);

  fetchCoraltype = () => (this.coralType = coralstype);
}

decorate(CoralStore, {
  coralList: observable,
  coralType: observable,
  loading: observable
});

const coralStore = new CoralStore();
coralStore.fetchcorals();
coralStore.fetchCoraltype();

export default coralStore;
