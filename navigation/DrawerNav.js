import React from "react";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { Text, View } from "react-native";

//Components
import Profile from "../components/Profile";
import OrderList from "../components/Profile/OrderList";
import StackNav from "./StackNav";

//Navs

const DrawerContent = props => (
  <View>
    <View
      style={{
        backgroundColor: "#00BFFF",
        height: 140,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text style={{ color: "white", fontSize: 30 }}>Hello</Text>
    </View>
    <DrawerItems {...props} />
  </View>
);

const DrawerNav = createDrawerNavigator(
  {
    Home: { screen: StackNav },
    Profile: { screen: Profile },
    Orders: { screen: OrderList }
  },
  { contentComponent: DrawerContent }
);

export default DrawerNav;
