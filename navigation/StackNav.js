import { createStackNavigator } from "react-navigation-stack";

// Components
import CoralList from "../components/List";
// import ProfileScreen from "../components/Profile";

import CoralType from "../components/type";

const StackNav = createStackNavigator(
  {
    ListScreen: CoralList,
    TypeScreen: CoralType
  },
  {
    initialRouteName: "ListScreen",
    defaultNavigationOptions: {
      title: "Corals"
    }
  }
);

export default StackNav;
