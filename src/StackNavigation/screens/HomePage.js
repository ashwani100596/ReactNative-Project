import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import ProductHome from "../../ProductDetails/ProductHome";

export default HomePage = () => {
  return <ProductHome />;
};
const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  Price: {
    flex: 1,
    flexDirection: "row",
  },
  offerPrice: {
    color: "#3EA806",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    margin: 8,
  },
  originalPric: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: "#8899B1",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    margin: 12,
  },
  btn: {
    marginLeft: 70,
    backgroundColor: "#0095FF",
    width: 100,
    height: 30,
    borderRadius: 5,
  },
  btnText: {
    marginTop: 5,
    textAlign: "center",
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    justifyContent: "center",
  },
  PriceContainer: {
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  icn: {
    flexDirection: "row",
    margin: 10,
  },
  icn1: {
    margin: 10,
    fontSize: 15,
  },
  icn2: {
    margin: 10,
    fontSize: 15,
  },
  icn3: {
    margin: 10,
    fontSize: 15,
  },
  cart: {
    flexDirection: "row",
  },
  cartbtn: {
    marginLeft: 110,
    backgroundColor: "#3EA806",
    width: 200,
    height: 30,
    borderRadius: 5,
  },
  checkOut: {
    backgroundColor: "#9acd32",
    width: 350,
    flexDirection: "row",
    marginLeft: 5,
    borderRadius: 10,
    height: 40,
    justifyContent: "center",
    textAlign: "center",
  },
  chkoutText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 100,
    top: 5,
  },
  chkoutleft: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    top: 5,
    marginLeft: -40,
  },
});
