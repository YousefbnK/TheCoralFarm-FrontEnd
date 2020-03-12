import React from "react";

// NativeBase Components
import { Container, Content, List, Text, Thumbnail, Button } from "native-base";

// Stores
import authStore from "../../stores/authStore";
import orderStore from "../../stores/OrdersStore";

const Profile = () => {
  const orders = orderStore.orderList.map(item => (
    <Ordercard order={order} key={item.name} />
  ));
  return (
    <Container>
      <Content>
        <Thumbnail circle large />
        <List>{orders}</List>
        <Button danger onPress={authStore.logout}>
          <Text>Logout</Text>
        </Button>
      </Content>
    </Container>
  );
};
export default Profile;
