import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import Typecard from "./CoralTypeCard";
import Profile from "../Profile";

// // Stores
import coralStore from "../../stores/coralStore";

const CoralType = ({ navigation }) => {
  console.log("coral type", coralStore.coralType);

  const coraltems = coralStore.coralType.map(item => (
    <CoralTypecard type={item} key={item.id} />
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
