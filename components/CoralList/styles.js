import { StyleSheet, Dimensions } from "react-native";

// screen sizing
const { width, height } = Dimensions.get("window");
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const CORAL_ITEM_HEIGHT = 150;
const CORAL_ITEM_MARGIN = 20;

const styles = StyleSheet.create({
  header: {
    paddingTop: 0,
    backgroundColor: "white"
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    opacity: 1
  },
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  overlay: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,

    opacity: 0.5,
    backgroundColor: "black",
    height: "100%",
    width: "100%"
  },
  listitem: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    height: 180,
    flexDirection: "row"
  },
  transparent: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    flexDirection: "row"
  },
  thumbnail: {
    backgroundColor: "white",
    opacity: 1
  },
  background: {
    width: null,
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    alignSelf: "center",
    margin: 20,
    width: "90%",
    height: CORAL_ITEM_HEIGHT + 110,
    borderColor: "#cccccc",
    borderWidth: 0.5,
    borderRadius: 15
  },
  photo: {
    width: "100%",
    height: CORAL_ITEM_HEIGHT,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  title: {
    flex: 1,
    fontFamily: "Arial",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    color: "#444444",
    marginTop: 3
  },
  category: {
    marginTop: 5,
    marginBottom: 5
  },
  list: {
    flex: 1
  },
  item: {
    flex: 1,
    margin: 0,
    flexBasis: "10%"
  }
});

export default styles;
