import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  authButton: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#4760e9",
    marginTop: 30
  },
  authButtonText: {
    color: "#FCFDFF",
    fontWeight: "bold",
    fontSize: 18
  },
  authContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCFDFF",
    paddingRight: 60,
    paddingLeft: 60
  },
  authOther: {
    color: "#4760e9",
    marginTop: 15
  },
  authTextInput: {
    alignSelf: "stretch",
    textAlign: "left",
    height: 40,
    marginBottom: 30,
    color: "#4760e9",
    borderBottomColor: "#4760e9",
    borderBottomWidth: 1
  },
  authTitle: {
    color: "#4760e9",
    fontSize: 24,
    marginBottom: 20,
    borderBottomColor: "#4760e9"
  },
  profileImage: {
    height: 75,
    width: 150,
    flex: 0.5,
    marginBottom: 10
  },
  profiletext: {
    textAlign: "left",
    color: "rgb(20,90,100)",
    fontSize: 16
  }
});

export default styles;
