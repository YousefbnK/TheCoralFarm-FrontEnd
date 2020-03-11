import React from "react";
import { observer } from "mobx-react";

import { ImageBackground, View } from "react-native";

// NativeBase Components
import { ListItem, Card, CardItem, Text, Left } from "native-base";

import styles from "./styles";

const Coralcard = ({ coral }) => {
  return (
    <ImageBackground source={{ uri: coral.image }} style={styles.background}>
      <View style={styles.overlay} />
      <ListItem
        button
        onPress={() => console.log("test")}
        style={styles.listitem}
      >
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

export default observer(Coralcard);
