import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import Coralcard from "./CoralCard";
import Profile from "../Profile";

// // Stores
import cralStore from "../../stores/coralsStore";

const CoralList = ({ navigation }) => {
  const coraltems = cralStore.coralList.map(item => (
    <Coralcard coral={item} key={item.name} />
  ));

  return (
    <List>
      {coraltems}
      <Button full>
        <Text>Login</Text>
      </Button>
      <Profile />
    </List>
  );
};

CoralList.navigationOptions = {
  title: "Coral"
};

export default observer(CoralList);
