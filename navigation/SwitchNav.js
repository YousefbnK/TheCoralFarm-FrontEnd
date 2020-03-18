import { createSwitchNavigator } from "react-navigation";

//Navs

import StackNav from "./StackNav";

const SwitchNav = createSwitchNavigator({
  StackNav: StackNav
});

export default SwitchNav;
