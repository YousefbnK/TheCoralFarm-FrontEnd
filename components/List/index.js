import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Content, List } from "native-base";
import styles from "./styles";

// Component
import Coralcard from "./CoralCard";

// // Stores
import coralStore from "../../stores/coralsStore";

const CoralList = () => {
  const coraltems = coralStore.coralList.map(item => (
    <Coralcard coral={item} key={item.name} />
  ));

  return (
    <Content style={styles.header}>
      <List>{coraltems}</List>
    </Content>
  );
};

CoralList.navigationOptions = {
  title: "Home"
};

export default observer(CoralList);
