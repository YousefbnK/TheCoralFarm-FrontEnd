import React from "react";
import { DrawerItems } from "react-navigation-drawer";
import { Text, View } from "react-native";
import authStore from "../../stores/authStore";

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
      <Text
        style={{
          color: "white",
          fontSize: 27,
          marginTop: 75,
          marginLeft: 15,
          alignSelf: "flex-start"
        }}
      >
        {authStore.user ? `Welcome ${authStore.user.user_id}` : "Guest"}
      </Text>
    </View>
    <DrawerItems {...props} />
  </View>
);

export default DrawerContent;
