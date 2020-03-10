import { createStackNavigator } from "react-navigation-stack";

// Components

import LoginScreen from "../components/Login";
import Register from "../components/Register";

const AuthNav = createStackNavigator(
  {
    Register: Register,
    Login: LoginScreen
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "The Coral Farm"
    }
  }
);

export default AuthNav;
