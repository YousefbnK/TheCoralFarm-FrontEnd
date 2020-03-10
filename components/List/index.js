import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button, View } from "native-base";
import styles from "./styles";

// Component
import Coralcard from "./CoralCard";

// // Stores
import cralStore from "../../stores/coralsStore";

const CoralList = () => {
  const coraltems = cralStore.coralList.map(item => (
    <Coralcard coral={item} key={item.name} />
  ));

  return (
    <View style={styles.header}>
      <List>
        {coraltems}
        <Button full>
          <Text>Login</Text>
        </Button>
      </List>
    </View>
  );
};

CoralList.navigationOptions = {
  title: "Home"
};

export default observer(CoralList);
