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
// import DummyData from "./ProductData";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export default HomePage = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              "https://agfstorage.blob.core.windows.net/misc/FP_com/2019/01/29/AnticoCherries2.jpg",
          }}
          //   style={{ width: "50%", height: "70%" }}
        />
      </View>
      <View style={{ flex: 0.6 }}>
        <Text style={styles.productName}>Australian Cherry</Text>
        <View style={styles.Price}>
          <View style={styles.PriceContainer}>
            <Text style={styles.offerPrice}>Rs-100</Text>
            <Text style={styles.originalPric}>Rs-150</Text>
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Freeship</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.icn}>
          <Feather name="smile" size={24} color="black" />
          <Text style={styles.icn1}>Safe</Text>
          <AntDesign name="addfile" size={24} color="black" />
          <Text style={styles.icn2}>Quality</Text>
          <MaterialCommunityIcons name="eyedropper" size={24} color="black" />
          <Text style={styles.icn3}>Fresh</Text>
        </View>
        <View>
          <Text numberOfLines={3} ellipsizeMode={"tail"}>
            Pat Cummins: They (Mumbai) beat us both times we played last year.
            We got a strong side, but this year we have a few new players to
            strengthen our line-up. We got Bhajji (Harbhajan) and some new
            plans. I spent about a month at home without much restrictions,
            before I flew down. Feeling really fresh and ready to go, I'm all
            good. We got a couple of young and quick bowlers like PK (Prasidh
            Krishna) and others who are not playing. I learn from these guys who
            know a lot more of these conditions.
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <AntDesign name="heart" size={24} color="red" />
          <TouchableOpacity style={styles.cart}>
            <Text style={styles.cartbtn}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 180, marginTop: 10 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ height: 150, width: 150 }}>
              <View style={{ flex: 2 }}>
                <Image
                  source={{
                    uri:
                      "https://agfstorage.blob.core.windows.net/misc/FP_com/2019/01/29/AnticoCherries2.jpg",
                  }}
                  s
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
                  source={{
                    uri:
                      "https://agfstorage.blob.core.windows.net/misc/FP_com/2019/01/29/AnticoCherries2.jpg",
                  }}
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
                  source={{
                    uri:
                      "https://agfstorage.blob.core.windows.net/misc/FP_com/2019/01/29/AnticoCherries2.jpg",
                  }}
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
                  source={{
                    uri:
                      "https://agfstorage.blob.core.windows.net/misc/FP_com/2019/01/29/AnticoCherries2.jpg",
                  }}
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
          <Text style={styles.chkoutleft}>Rs-100</Text>
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
  );
};
const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    // margin: 100,
    alignItems: "center",
    // justifyContent: "center",
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
    // alignItems: "flex-end",
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
    // height: 40,
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
