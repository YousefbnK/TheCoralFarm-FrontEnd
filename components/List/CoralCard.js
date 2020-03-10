import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text } from "native-base";

const Coralcard = ({ coral }) => {
  return (
    <>
      <Text>{coral.name} </Text>
      <Text>{coral.price} </Text>
    </>
  );
};

// CoffeeCart.navigationOptions = {
//   title: "Cart"
// };

export default observer(Coralcard);
