import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Header,
  List,
  Text,
  Thumbnail,
  Button
} from "native-base";

// Stores
import authStore from "../../stores/authStore";

const Profile = ({ navigation }) => {
  const handlePress = () =>
    authStore.user
      ? navigation.navigate("Orders")
      : navigation.navigate("Login");
  return (
    <>
      <Content>
        <Button success onPress={handlePress}>
          <Text>Previous Orders</Text>
        </Button>
        {authStore.user && (
          <Button danger onPress={authStore.logout}>
            <Text>Logout</Text>
          </Button>
        )}
      </Content>
    </>
  );
};
export default observer(Profile);
