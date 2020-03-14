import React from "react";
import { observer } from "mobx-react";

//Styles
import { View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

// Native Base
import { Text } from "native-base";

// Stores
import authStore from "../../stores/authStore";

const Profile = ({ navigation }) => {
  const handlePress = () =>
    authStore.user
      ? navigation.navigate("Orders")
      : navigation.navigate("Login");

  const handleLogout = () => {
    authStore.logout();
    navigation.navigate("ListScreen");
  };
  console.log("name", authStore.user.user_id);
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image
        style={styles.avatar}
        source={{ uri: "https://picsum.photos/200" }}
      />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>{authStore.user.user_id}</Text>
          {/* <Text style={styles.info}>What the hell !!</Text> */}
          <Text style={styles.description}> {authStore.user.username}</Text>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handlePress}
          >
            <Text>Previous Orders</Text>
          </TouchableOpacity>
          {authStore.user && (
            <TouchableOpacity style={styles.logout} onPress={handleLogout}>
              <Text>Log out</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};
export default observer(Profile);
