import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Content, List } from "native-base";
import styles from "./styles";

// Component
import CoralCard from "./CoralCard";
import CartButton from "../Buttons/CartButton";
import ProfileButton from "../Buttons/ProfileButton";

// Stores
import coralStore from "../../stores/coralStore";
import authStore from "../../stores/authStore";

class CoralList extends Component {
  render() {
    const coraltems = coralStore.coralList.map(item => (
      <CoralCard coral={item} key={item.name} />
    ));
    return (
      <Content style={styles.header}>
        <List>{coraltems}</List>
      </Content>
    );
  }
}

CoralList.navigationOptions = {
  title: "Coral List",
  headerRight: <CartButton />,
  headerLeft: <ProfileButton />
};
export default observer(CoralList);
