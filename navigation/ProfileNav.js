import { createStackNavigator } from "react-navigation-stack";

// Components
import ProfileScreen from "../components/Profile";
import LoginScreen from "../components/Login";
import Register from "../components/Register";

const ProfileStack = createStackNavigator(
  {
    Register: Register,
    Login: LoginScreen,
    Profile: ProfileScreen
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "The Coral Farm"
    }
  }
);

export default ProfileStack;
