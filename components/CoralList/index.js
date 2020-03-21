import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Content, List } from "native-base";
import styles from "./styles";

// Component
import CoralCard from "./CoralCard";
import CartButton from "../Buttons/CartButton";
// import ProfileButton from "../Buttons/ProfileButton";

// Stores
import coralStore from "../../stores/coralStore";
import NavigationDrawer from "../Buttons/NavigationDrawer";

class CoralList extends Component {
  render() {
    coralItems = coralStore.corals.map(item => (
      <CoralCard coral={item} key={item.id} />
    ));
    return (
      <Content style={styles.header}>
        <List>{coralItems}</List>
      </Content>
    );
  }
}

CoralList.navigationOptions = ({ navigation }) => ({
  title: "Coral List",
  headerRight: <CartButton />,
  headerLeft: <NavigationDrawer navigation={navigation} />
});
export default observer(CoralList);
