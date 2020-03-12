import { createStackNavigator } from "react-navigation-stack";

// Components
import CoralList from "../components/CoralList";
import Profile from "../components/Profile";
import CoralDetail from "../components/CoralDetail";
import CoralCart from "../components/Cart";

// import CoralType from "../components/type";

const StackNav = createStackNavigator(
  {
    ListScreen: CoralList,
    Profile: Profile,
    DetailScreen: CoralDetail,
    CartScreen: CoralCart
  },
  {
    initialRouteName: "ListScreen",
    defaultNavigationOptions: {
      title: "Corals"
    }
  }
);

export default StackNav;
