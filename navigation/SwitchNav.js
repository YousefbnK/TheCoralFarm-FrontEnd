import { createSwitchNavigator } from "react-navigation";

//Navs
import AuthNav from "./AuthNav";
import StackNav from "./StackNav";

const SwitchNav = createSwitchNavigator({
  StackNav: StackNav,
  AuthNav: AuthNav
});

export default SwitchNav;
