import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components

import { FlatList, View } from "react-native";

import corals from "../../data";

// Component
import CoralCard from "./CoralCard";

import CartButton from "../Buttons/CartButton";
import NavigationDrawer from "../Buttons/NavigationDrawer";

// Stores
import coralStore from "../../stores/coralStore";

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
