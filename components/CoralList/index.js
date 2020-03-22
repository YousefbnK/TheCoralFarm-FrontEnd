import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Content, List } from "native-base";
import styles from "./styles";

import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";

import corals from "../../data";

// Component
// import CoralCard from "./CoralCard";
import NewCard from "./NewCard";
import CartButton from "../Buttons/CartButton";
// import ProfileButton from "../Buttons/ProfileButton";

// Stores
import coralStore from "../../stores/coralStore";
import NavigationDrawer from "../Buttons/NavigationDrawer";
import CoralCard from "./CoralCard";

class CoralList extends Component {
  render() {
    const coralItems = () =>
      coralStore.corals.map(item => <CoralCard coral={item} key={item.id} />);

    return (
      // <Content style={styles.header}>
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={corals}
          renderItem={coralItems}
        />
        {/* <List>{coralItems}</List> */}
      </View>
      // </Content>
    );
  }
}

CoralList.navigationOptions = ({ navigation }) => ({
  title: "Coral List",
  headerRight: <CartButton />,
  headerLeft: <NavigationDrawer navigation={navigation} />
});
export default observer(CoralList);
