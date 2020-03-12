import React, { Component } from "react";

import NumericInput from "react-native-numeric-input";

// NativeBase Components
import { Alert } from "react-native";
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Thumbnail,
  Left,
  Picker,
  Right,
  Text
} from "native-base";

// Style
import styles from "./styles";

// Components
import CartButton from "../Buttons/CartButton";

// // Stores
import coralStore from "../../stores/coralStore";
import cartStore from "../../stores/CartStore";

class CoralDetail extends Component {
  state = {
    coral: this.props.navigation.getParam("coralName"),
    quantity: 1
  };

  changeCoral = value => this.setState({ coral: value });
  //  i dont think we need this at this point

  changeQuantity = value => {
    this.setState({ quantity: value });
  };

  handleAdd = () => {
    cartStore.addItemToCart(this.state);
    console.log("items: ", cartStore.items);
  };

  render() {
    const coralID = this.props.navigation.getParam("coralID");
    const coral = coralStore.coralList.find(coral => coralID === coral.id);

    return (
      <Container>
        <Content>
          <Card transparent style={styles.card}>
            <CardItem>
              <Left>
                <Text style={styles.text}>{coral.name}</Text>
                <Text note>{coral.name}</Text>
              </Left>
              <Body />
              <Right>
                <Thumbnail bordered source={{ uri: coral.image }} />
              </Right>
            </CardItem>

            <CardItem>
              <Body>
                <Text>write somthing here </Text>
              </Body>
            </CardItem>

            <CardItem>
              <Body style={styles.numericInput}>
                <NumericInput
                  value={this.state.value}
                  onChange={this.changeQuantity}
                  initValue={1}
                />
              </Body>

              <Right>
                <Button full style={styles.addButton} onPress={this.handleAdd}>
                  <Text>Add</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

CoralDetail.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("coffeeshopName"),
  headerRight: <CartButton />
});
//  check this later

export default CoralDetail;
