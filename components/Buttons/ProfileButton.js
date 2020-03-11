import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
import { Icon, Button } from "native-base";

// Stores

const ProfileButton = ({ navigation }) => {
  const handlePress = () => navigation.navigate("Profile");

  return (
    <Button onPress={handlePress} transparent>
      <Icon name="profile" type="AntDesign" style={{ color: "black" }} />
    </Button>
  );
};

export default withNavigation(observer(ProfileButton));
