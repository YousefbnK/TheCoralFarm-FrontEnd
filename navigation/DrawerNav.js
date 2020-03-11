import { createDrawerNavigator } from "react-navigation-drawer";

//Components
import Profile from "../components/Profile";
import CoralList from "../components/List";
import CoralDetail from "../components/CoralDetail";

const DrawerNav = createDrawerNavigator(
  {
    ListScreen: CoralList,
    Profile: Profile,
    DetailScreen: CoralDetail
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      title: "Profile"
    }
  }
);

export default DrawerNav;
