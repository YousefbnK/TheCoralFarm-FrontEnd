import { StyleSheet, Dimensions } from "react-native";

const { width: viewportWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  addButton: {
    alignSelf: "center",
    backgroundColor: "#4760e9",
    width: 150
  },
  card: {
    marginTop: 100
  },
  listStyle: {
    borderBottomWidth: 0
  },
  numericInput: {
    flex: 1,
    justifyContent: "flex-start"
  },
  text: {
    color: "white",
    fontSize: 15,
    marginLeft: 16,

    justifyContent: "center",
    alignItems: "center"
  },
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  top: {
    marginLeft: 0,
    backgroundColor: "#ffffcc"
  },
  middleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
    alignSelf: "center"
  },
  addIcon: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white"
  },
  item: {
    color: "white"
  },
  picker: {
    width: 150
  },
  container: {
    backgroundColor: "white",
    flex: 1
  },
  carouselContainer: {
    minHeight: 250
  },
  carousel: {},

  image: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: 250
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    width: viewportWidth,
    height: 250
  },
  paginationContainer: {
    flex: 1,
    position: "absolute",
    alignSelf: "center",
    paddingVertical: 8,
    marginTop: 200
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 0
  },
  infoCoralContainer: {
    flex: 1,
    margin: 25,
    marginTop: 20,
    justifyContent: "center"
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  infoPhoto: {
    height: 20,
    width: 20,
    marginRight: 0
  },
  infoCoral: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Arial",
    marginLeft: 5,
    marginTop: 350
  },
  category: {
    fontSize: 18,
    fontFamily: "Arial",
    margin: 10,
    color: "grey"
  },
  infoDescriptionCoral: {
    textAlign: "left",
    fontSize: 16,
    fontFamily: "Arial",
    marginTop: 30,
    margin: 15
  },
  infoCoralName: {
    fontSize: 28,
    fontFamily: "Arial",
    marginTop: 10,
    margin: 10,
    color: "black",
    textAlign: "left"
  },
  containerCheckout: {
    flex: 1,
    height: 40,
    width: "100%",
    marginTop: 10,
    borderRadius: 100,
    borderColor: "#00BFFF",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    position: "absolute",
    backgroundColor: "#00BFFF"
  },
  textCheckout: {
    fontSize: 18,
    fontFamily: "Arial",
    fontWeight: "bold",
    color: "white"
  }
});

export default styles;
