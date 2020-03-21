import { createSwitchNavigator } from "react-navigation";

//Navs

import StackNav from "./StackNav";
import DrawerNav from "./DrawerNav";

const SwitchNav = createSwitchNavigator({
  DrawerNav: DrawerNav,
  StackNav: StackNav
});

export default SwitchNav;
