import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Content, List } from "native-base";
import styles from "./styles";

// Component
import Coralcard from "./CoralCard";
import CartButton from "../Buttons/CartButton";
import ProfileButton from "../Buttons/ProfileButton";

// Stores
import coralStore from "../../stores/coralStore";
import authStore from "../../stores/authStore";

class CoralList extends Component {
  coraltems = coralStore.coralList.map(item => (
    <Coralcard coral={item} key={item.name} />
  ));

  render() {
    return (
      <Content style={styles.header}>
        <List>{this.coraltems}</List>
      </Content>
    );
  }
}

CoralList.navigationOptions = {
  title: "Coral List",
  headerRight: authStore.user && <CartButton />,
  headerLeft: <ProfileButton />
};
export default observer(CoralList);
