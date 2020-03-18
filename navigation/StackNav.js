import { createStackNavigator } from "react-navigation-stack";

// Components
import CoralList from "../components/CoralList";
import Profile from "../components/Profile";
import OrderList from "../components/Profile/OrderList";
import CoralDetail from "../components/CoralDetail";
import CoralCart from "../components/Cart";
import Example from "../components/Modal/Example";

// import CoralType from "../components/type";

const StackNav = createStackNavigator(
  {
    ListScreen: CoralList,
    Profile: Profile,
    Example: Example,
    DetailScreen: CoralDetail,
    CartScreen: CoralCart,
    Orders: OrderList
  },
  {
    initialRouteName: "CartScreen",
    defaultNavigationOptions: {
      title: "Profile"
    }
  }
);

export default StackNav;
