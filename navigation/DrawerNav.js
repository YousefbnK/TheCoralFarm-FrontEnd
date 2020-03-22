import { createDrawerNavigator } from "react-navigation-drawer";

//Components
import Profile from "../components/Profile";
import OrderList from "../components/Profile/OrderList";
import StackNav from "./StackNav";
import DrawerContent from "../components/Drawer/DrawerContent";

//Navs

const DrawerNav = createDrawerNavigator(
  {
    Home: { screen: StackNav },
    Profile: { screen: Profile },
    Orders: { screen: OrderList }
  },
  { contentComponent: DrawerContent }
);

export default DrawerNav;
