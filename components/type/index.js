import React from "./node_modules/react";
import { observer } from "./node_modules/mobx-react";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import Typecard from "./TypeCard";
import Profile from "../Profile";

// // Stores
import coralStore from "../../stores/coralsStore";

const CoralType = ({ navigation }) => {
  console.log("coral type", coralStore.coralType);

  const coraltems = coralStore.coralType.map(item => (
    <Typecard type={item} key={item.id} />
  ));

  return (
    <List>
      {coraltems}
      <Text>test</Text>

      <Button full>
        <Text>Login</Text>
      </Button>
      <Profile />
    </List>
  );
};

CoralType.navigationOptions = {
  title: "Coral"
};

export default observer(CoralType);
