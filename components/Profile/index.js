import React from "react";
import { observer } from "mobx-react";

//Styles
import { View, Image } from "react-native";
import styles from "./styles";

// Native Base
import { Text } from "native-base";

// Stores
// import authStore from "../../stores/authStore";
import coralStore from "../../stores/coralStore";

const Profile = () => {
  const randomimg = () => {
    let randemIndex = Math.floor(Math.random() * coralStore.corals.length);
    const uri = coralStore.corals[randemIndex].image;
    console.log(uri);
    return uri;
  };

  return (
    <View style={styles.container}>
      <Image style={styles.header} source={{ uri: randomimg() }} />

      <Image
        style={styles.avatar}
        source={{ uri: "https://picsum.photos/200" }}
      />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>Welcome</Text>
          <Text style={styles.info}>buy corals please :)</Text>
          <Text style={styles.description}>-</Text>
        </View>
      </View>
    </View>
  );
};
export default observer(Profile);
