import React from "react";

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
  handlePress = () => navigation.navigate("Orders");
  return (
    <>
      <Content>
        <Button success onPress={handlePress}>
          <Text>Previous Orders</Text>
        </Button>
        <Button danger onPress={authStore.logout}>
          <Text>Logout</Text>
        </Button>
      </Content>
    </>
  );
};
export default Profile;
