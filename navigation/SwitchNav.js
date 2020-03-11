import { createSwitchNavigator } from "react-navigation";

//Navs

import StackNav from "./StackNav";
import AuthNav from "./AuthNav";

const SwitchNav = createSwitchNavigator({
  StackNav: StackNav,
  AuthNav: AuthNav
});

export default SwitchNav;
