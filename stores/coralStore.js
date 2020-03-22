import { decorate, observable } from "mobx";
import { instance } from "./instance";

// for now i'm using a dummy data delete it later
import corals from "../data";
import coralType from "../typeData";

class CoralStore {
  corals = [];
  // coralType = [coralType];
  loading = true;

  fetchcorals = async () => {
    try {
      const res = await instance.get("coraltype/corals/");
      const corals = res.data;
      this.corals = corals;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };

  // fetchcorals = () => {
  //   this.corals = corals;
  // };

  // fetchCoraltype = () => (this.coralType = coralstype);
}

decorate(CoralStore, {
  corals: observable,
  loading: observable
});

const coralStore = new CoralStore();
coralStore.fetchcorals();

export default coralStore;
