import React, { Component } from "react";
import { observer } from "mobx-react";

import NumericInput from "react-native-numeric-input";

// NativeBase Components

import { Body, CardItem } from "native-base";

//React Native
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight
} from "react-native";

// Style
import styles from "./styles";

// Components
// import CartButton from "../Buttons/CartButton";
import BackButton from "../Buttons/BackButton";

// // Stores
import coralStore from "../../stores/coralStore";
import cartStore from "../../stores/cartStore";

class CoralDetail extends Component {
  state = {
    id: this.props.navigation.getParam("coralID"),
    coral: this.props.navigation.getParam("coralName"),
    price: this.props.navigation.getParam("coralPrice"),
    total: this.props.navigation.getParam("coralPrice"),
    quantity: 1
  };

  changeQuantity = value => {
    this.setState({ quantity: value });
    let price = this.props.navigation.getParam("coralPrice");
    let totalPrice = price * this.state.quantity;
    this.setState({ total: totalPrice });
  };

  handleAdd = () => {
    cartStore.addItemToCart(this.state);
    cartStore.saveCart();
    this.setState({ quantity: 1, total: this.state.price });
    this.props.navigation.navigate("CartScreen");
  };

  render() {
    const coralID = this.props.navigation.getParam("coralID");
    const coral = coralStore.corals.find(coral => coralID === coral.id);

    return (
      <ScrollView style={styles.container}>
        <View style={styles.carouselContainer}>
          <View style={styles.carousel}>
            <Image style={styles.image} source={{ uri: coral.image }} />
          </View>
        </View>
        <View style={styles.infoCoralContainer}>
          <Text style={styles.infoCoralName}>Coral: {coral.name}</Text>
          <View style={styles.infoContainer}>
            <TouchableHighlight>
              <Text style={styles.category}>Price: {coral.price} KD</Text>
            </TouchableHighlight>
          </View>

          <CardItem>
            <Body style={styles.numericInput}>
              <NumericInput
                value={this.state.value}
                onChange={this.changeQuantity}
                initValue={1}
                minValue={1}
              />
            </Body>
            <View>
              <Text style={styles.infoCoral}>Total {this.state.total} KD </Text>
            </View>
          </CardItem>
          <View style={styles.infoContainer}>
            <TouchableHighlight
              underlayColor="rgba(73,182,77,1.0)"
              onPress={this.handleAdd}
            >
              <View style={styles.containerCheckout}>
                <Text style={styles.textCheckout}>Add to Cart</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    );
  }
}

CoralDetail.navigationOptions = ({ navigation }) => ({
  headerTransparent: "true",
  headerLeft: <BackButton navigation={navigation} />
});

export default observer(CoralDetail);
