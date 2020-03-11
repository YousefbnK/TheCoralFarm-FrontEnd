import React from "react";

// NativeBase Components
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Thumbnail,
  Button
} from "native-base";
import authStore from "../../stores/authStore";

const Profile = () => {
  return (
    <Container>
      <Content>
        <Thumbnail circle large />
        <Card>
          <CardItem>
            <Button danger onPress={authStore.logout}>
              <Text>Logout</Text>
            </Button>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};
export default Profile;
