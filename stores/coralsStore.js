import { decorate, observable } from "mobx";
import { instance } from "./instance";
import corals from "../data";
// for now i'm using a dummy data delete it later

class CoralStore {
  coralList = [];
  loading = true;

  //   fetchCorals = async () => {
  //     try {
  //       const res = await instance.get("?format=json");
  //       const coffeeshops = res.data;
  //       this.coffeeshops = coffeeshops;
  //       this.loading = false;
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  fetchcorals = () => (this.coralList = corals);
}

decorate(CoralStore, {
  coralList: observable,
  loading: observable
});

const coralStore = new CoralStore();
coralStore.fetchcorals();

export default coralStore;
