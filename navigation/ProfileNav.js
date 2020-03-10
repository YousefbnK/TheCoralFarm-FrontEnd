import { createStackNavigator } from "react-navigation-stack";

// Components
import ProfileScreen from "../components/Profile";
import LoginScreen from "../components/Login";
import Register from "../components/Register";
import Corallist from "../components/List";

const ProfileStack = createStackNavigator(
  {
    Register: Register,
    Login: LoginScreen,
    Profile: ProfileScreen,
    List: Corallist
  },
  {
    initialRouteName: "List",
    defaultNavigationOptions: {
      title: "The Coral Farm"
    }
  }
);

export default ProfileStack;
