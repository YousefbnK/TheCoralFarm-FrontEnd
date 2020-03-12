import React from "react";
import { withNavigation } from "react-navigation";
// import { observer } from "mobx-react";

import { ImageBackground, View } from "react-native";

// NativeBase Components
import { ListItem, Card, CardItem, Text, Left } from "native-base";

import styles from "./styles";

const Coralcard = ({ coral, navigation }) => {
  const handlePress = () =>
    navigation.navigate("DetailScreen", {
      coralID: coral.id,
      coralName: coral.name,
      coralPrice: coral.price
    });
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
          </CardItem>
        </Card>
      </ListItem>
    </ImageBackground>
  );
};

// cart.navigationOptions = {
//   title: "Cart"
// };

export default withNavigation(Coralcard);
