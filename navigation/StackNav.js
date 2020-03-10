import { createStackNavigator } from "react-navigation-stack";

// Components
import CoralList from "../components/List";
import ProfileScreen from "../components/Profile";

const StackNav = createStackNavigator(
  {
    ListScreen: CoralList,
    Profile: ProfileScreen
  },
  {
    initialRouteName: "ListScreen",
    defaultNavigationOptions: {
      title: "Corals"
    }
  }
);

export default StackNav;
