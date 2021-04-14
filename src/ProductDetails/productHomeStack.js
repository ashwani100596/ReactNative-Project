import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductOffer from "./ProductOffer";
import AddToCart from "./AddToCart";
import ProductHome from "./ProductHome";
import Shiping from "./Freeship";
import ProductCheckout from "./ProductCheckout";
import TermsAndCondition from "./TermsAndCondition";
import ProductDetails from "./ProductDetails";

const Stack = createStackNavigator();

function ProductHomeStack() {
  return (
    <Stack.Navigator
      // initialRouteName={ProductHome}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#9AC4F8",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}
    >
      <Stack.Screen name="Product" component={ProductHome} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="ProductCheckout" component={ProductCheckout} />
      <Stack.Screen name="Shiping" component={Shiping} />
      <Stack.Screen name="AddToCart" component={AddToCart} />
      <Stack.Screen name="ProductOffer" component={ProductOffer} />

      <Stack.Screen name="TermsAndCondition" component={TermsAndCondition} />
    </Stack.Navigator>
  );
}
export default ProductHomeStack;
