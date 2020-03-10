import { decorate, observable } from "mobx";
// import { instance } from "./instance";

// for now i'm using a dummy data delete it later
import corals from "../data";

class CoralStore {
  coralList = [];
  loading = true;

  //   fetchCorals = async () => {
  //     try {
  //       const res = await instance.get("?format=json");
  //       const coral = res.data;
  //       this.coralList = coral;
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
