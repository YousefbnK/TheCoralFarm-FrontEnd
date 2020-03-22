import React from "react";
import { DrawerItems } from "react-navigation-drawer";
import { Text, View } from "react-native";

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

export default DrawerContent;
