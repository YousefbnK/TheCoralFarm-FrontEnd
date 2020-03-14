import React from "react";

import { Container, Header, Content, List, ListItem, Text } from "native-base";

const Sidebar = () => {
  return (
    <Container>
      <Header />
      <Content>
        <List>
          <ListItem>
            <Text>Profile</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

export default Sidebar;
