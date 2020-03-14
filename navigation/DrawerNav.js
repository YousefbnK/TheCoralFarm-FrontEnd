import { createDrawerNavigator } from "react-navigation-drawer";

//Components
import Profile from "../components/Profile";

//Navs

import CoralList from "../components/CoralList";

const DrawerNav = createDrawerNavigator(
  {
    ListScreen: CoralList,
    Profile: Profile
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      title: "Profile"
    }
  }
);

export default DrawerNav;
