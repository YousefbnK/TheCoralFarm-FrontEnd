import { createDrawerNavigator } from "react-navigation-drawer";

//Components
import ProfileScreen from "../components/Profile";
import CoralList from "../components/List";

const DrawerNav = createDrawerNavigator(
  {
    ListScreen: CoralList,
    Profile: ProfileScreen
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      title: "Profile"
    }
  }
);

export default DrawerNav;
