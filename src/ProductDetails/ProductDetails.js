import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
// import DummyData from "./ProductData";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const ProductDetails = ({ route }) => {
  //   console.log(route.params);
  const { param } = route.params;

  //   console.log(console.log(props.DummyData));
  return (
    <ScrollView>
      <StatusBar hidden />
      <View style={{ flex: 1 }}>
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
        >
          <Image style={styles.image} source={{ uri: param.FruitImg1 }} />
        </View>
        <View
          style={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            padding: 10,
          }}
        >
          <View>
            <Text style={styles.productName}>{param.FruitName}</Text>
            <View style={styles.Price}>
              <View style={styles.PriceContainer}>
                <Text style={styles.offerPrice}>{param.fruitPrice}</Text>
              </View>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Freeship</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.icn}>
              <Feather name="smile" size={20} color="#C0E218" />
              <Text style={styles.icn1}>Safe</Text>
              <AntDesign name="addfile" size={20} color="#C0E218" />
              <Text style={styles.icn2}>Quality</Text>
              <MaterialCommunityIcons
                name="eyedropper"
                size={20}
                color="#C0E218"
              />
              <Text style={styles.icn3}>Fresh</Text>
            </View>
            <View>
              <Text numberOfLines={3} ellipsizeMode={"tail"}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <AntDesign name="heart" size={30} color="red" />
              <TouchableOpacity style={styles.cart}>
                <Text style={styles.cartbtn}>Add To Cart</Text>
              </TouchableOpacity>
            </View>
            <View style={{ height: 180, marginTop: 10 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={{ height: 150, width: 150 }}>
                  <View style={{ flex: 2 }}>
                    <Image
                      source={{ uri: param.FruitImg1 }}
                      style={{
                        flex: 1,
                        width: null,
                        height: null,
                        resizeMode: "cover",
                        margin: 5,
                      }}
                    />
                    <Text>Japanese Cherry</Text>
                  </View>
                </View>
                <View style={{ height: 150, width: 150 }}>
                  <View style={{ flex: 2 }}>
                    <Image
                      source={{ uri: param.FruitImg1 }}
                      style={{
                        flex: 1,
                        width: null,
                        margin: 5,
                        height: null,
                        resizeMode: "cover",
                        margin: 5,
                      }}
                    />
                    <Text>American Cherry</Text>
                  </View>
                </View>
                <View style={{ height: 150, width: 150 }}>
                  <View style={{ flex: 2 }}>
                    <Image
                      source={{ uri: param.FruitImg1 }}
                      style={{
                        flex: 1,
                        width: null,
                        margin: 5,
                        height: null,
                        resizeMode: "cover",
                      }}
                    />
                  </View>
                </View>
                <View style={{ height: 150, width: 150 }}>
                  <View style={{ flex: 2 }}>
                    <Image
                      source={{ uri: param.FruitImg1 }}
                      style={{
                        flex: 1,
                        width: null,
                        margin: 5,
                        height: null,
                        resizeMode: "cover",
                      }}
                    />
                    <Text>Indian Cherry</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.checkOut}>
              <Text style={styles.chkoutleft}>{param.fruitPrice}</Text>
              <Text style={styles.chkoutText}>Check-out</Text>
              <AntDesign
                style={{ top: 6, left: 15 }}
                name="arrowright"
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  image: {
    justifyContent: "center",
    alignItems: "center",
    height: 350,
    width: windowWidth,
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  Price: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  offerPrice: {
    flex: 1,
    color: "#3EA806",
    fontSize: 20,
    textAlign: "left",
    fontWeight: "bold",
    // margin: 8,
  },
  originalPric: {
    flex: 1,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: "black",
    fontSize: 15,
    textAlign: "left",
    fontWeight: "bold",
    // margin: 12,
  },
  btn: {
    // alignItems: "flex-end",
    // marginLeft: 70,
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
    flex: 1,
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "center",
  },
  icn: {
    flex: 1,
    flexDirection: "row",
    borderTopColor: "#D8E3E7",
    borderTopWidth: 1,
    margin: 10,
  },
  icn1: {
    flex: 1,
    fontWeight: "bold",
    // margin: 10,
    fontSize: 15,
  },
  icn2: {
    flex: 1,
    fontWeight: "bold",
    // margin: 10,
    fontSize: 15,
  },
  icn3: {
    flex: 1,
    fontWeight: "bold",
    // margin: 10,
    fontSize: 15,
  },
  cart: {
    flexDirection: "row",
    // height: 40,
  },
  cartbtn: {
    color: "white",
    marginLeft: 90,
    backgroundColor: "#3EA806",
    width: 220,
    height: 40,
    borderRadius: 5,
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  checkOut: {
    backgroundColor: "#9acd32",
    width: 340,
    flexDirection: "row",
    // marginLeft: 5,
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
    // top: 5,
  },
  chkoutleft: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    // top: 5,
    marginLeft: -40,
  },
});
export default ProductDetails;
