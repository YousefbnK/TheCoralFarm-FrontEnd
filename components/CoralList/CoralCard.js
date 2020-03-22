import React from "react";
import { withNavigation } from "react-navigation";
// import { observer } from "mobx-react";

import { ImageBackground, View } from "react-native";

// NativeBase Components
import { ListItem, Card, CardItem, Text, Left, Right, Button,Icon } from "native-base";

// Stores
import cartStore from "../../stores/coralStore";

import styles from "./styles";

const CoralCard = ({ coral, navigation }) => {
  const handlePress = () =>
    navigation.navigate("DetailScreen", {
      coralID: coral.id,
      coralName: coral.name,
      coralPrice: coral.price
    });

    const handleAdd = () => {
      
      const addToCart={
        coral: coral.name,
        price: coral.price,
        total: coral.price,
        quantity: 1
      };
      cartStore.addItemToCart(this.state);
      cartStore.saveCart();
    };

  return (
    <ImageBackground source={{ uri: coral.image }} style={styles.background}>
      <View style={styles.overlay} />
      <ListItem button onPress={handlePress} style={styles.listitem}>
        <Card style={styles.transparent}>
          <CardItem style={styles.transparent}>
            <Left>
              <Text style={styles.text}>{coral.name}</Text>
              <Text note style={styles.text}>
                {coral.price}
              </Text>
            </Left>
            
            <Right>
            <Button onPress={handleAdd} transparent>
            <Text style={{ color: "white" }}>Add to cart</Text>
              <Icon
                 name="ios-add-circle"
                  type="Ionicons"
                  style={{ color: "white" }}
                  size={30}
                  onPress={handleAdd}
             />
            </Button>
            </Right>
          </CardItem>
        </Card>
      </ListItem>
    </ImageBackground>
  );
};

// cart.navigationOptions = {
//   title: "Cart"
// };

export default withNavigation(CoralCard);
