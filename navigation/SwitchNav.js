import { createSwitchNavigator } from "react-navigation";

//Navs

// import StackNav from "./StackNav";
import AuthNav from "./AuthNav";
import DrawerNav from "./DrawerNav";

const SwitchNav = createSwitchNavigator({
  DrawerNav: DrawerNav,
  AuthNav: AuthNav
  // StackNav: StackNav,
});

export default SwitchNav;
