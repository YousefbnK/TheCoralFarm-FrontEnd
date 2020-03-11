import { createSwitchNavigator } from "react-navigation";

//Navs

// import StackNav from "./StackNav";
import AuthNav from "./AuthNav";
import DrawerNav from "./DrawerNav";

const SwitchNav = createSwitchNavigator({
  AuthNav: AuthNav,
  // StackNav: StackNav,
  DrawerNav: DrawerNav,
  AuthNav: AuthNav
});

export default SwitchNav;
