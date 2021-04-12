import React from "react";
import { View, Text, StyleSheet } from "react-native";
const ProductOffer = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the ProductOffer screen</Text>
      {/* <Button
          title="Go to About Screen"
          onPress={() => navigation.navigate("About")} // We added an onPress event which would navigate to the About screen
        /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
export default ProductOffer;
