import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import Coralcard from "./CoralCard";

// // Stores
import cralStore from "../../stores/coralsStore";

const Corallist = () => {
  const coraltems = cralStore.coralList.map(item => (
    <Coralcard coral={item} key={item.name} />
  ));

  return (
    <List>
      {coraltems}
      <Button full dangerS>
        <Text>Login</Text>
      </Button>
    </List>
  );
};

// CoffeeCart.navigationOptions = {
//   title: "Cart"
// };

export default observer(Corallist);
