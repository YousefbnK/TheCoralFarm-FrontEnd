import React from "./node_modules/react";
import { observer } from "./node_modules/mobx-react";
import { ImageBackground, View, Image } from "react-native";

// NativeBase Components
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Style
import styles from "./styles";

const Typecard = ({ type }) => {
  return (
    <>
      <Text>{type.name}</Text>
      <Thumbnail source={require("../../assets/Acropora.PNG")} />
    </>
    // <ImageBackground source={{ uri: type.image }} style={styles.background}>
    //   <View style={styles.overlay} />
    //   <ListItem
    //     button
    //     onPress={() => console.log("test")}
    //     style={styles.listitem}
    //   >
    //     <Card style={styles.transparent}>
    //       <CardItem style={styles.transparent}>
    //         <Left>
    //           <Text style={styles.text}>{type.name}</Text>
    //           <Text note style={styles.text}>
    //             add somthing
    //           </Text>
    //         </Left>
    //       </CardItem>
    //     </Card>
    //   </ListItem>
    // </ImageBackground>
  );
};

// corals.navigationOptions = {
//   title: "Cart"
// };

export default observer(Typecard);
