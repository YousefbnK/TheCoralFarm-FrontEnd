import { createStackNavigator } from "react-navigation-stack";

// Components
import CoralList from "../components/CoralList";
import Profile from "../components/Profile";

// import CoralType from "../components/type";

const StackNav = createStackNavigator(
  {
    ListScreen: CoralList,
    Profile: Profile,
    TypeScreen: CoralType,
    DetailScreen: CoraleDetail
  },
  {
    initialRouteName: "ListScreen",
    defaultNavigationOptions: {
      title: "Corals"
    }
  }
);

export default StackNav;
