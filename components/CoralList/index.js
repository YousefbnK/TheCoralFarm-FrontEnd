import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Spinner } from "native-base";
import { View, ScrollView } from "react-native";

// Component
import CoralCard from "./CoralCard";

import CartButton from "../Buttons/CartButton";
import NavigationDrawer from "../Buttons/NavigationDrawer";

// Stores
import coralStore from "../../stores/coralStore";

class CoralList extends Component {
  render() {
    if (coralStore.loading) {
      return <Spinner />;
    } else {
      const coralItems = coralStore.corals.map(item => (
        <CoralCard coral={item} key={item.name} />
      ));
      return (
        <View>
          <ScrollView>{coralItems}</ScrollView>
        </View>
      );
    }
  }
}

CoralList.navigationOptions = ({ navigation }) => ({
  title: "Coral List",
  headerRight: <CartButton />,
  headerLeft: <NavigationDrawer navigation={navigation} />
});
export default observer(CoralList);
