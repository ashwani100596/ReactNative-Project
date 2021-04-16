import React, { useState, useEffect } from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
function CustomText(props) {
  const [showMore, setShowMore] = useState(false);
  const [lines, setLines] = useState(props.numberOfLines);

  const onTextLayout = (e) => {
    setShowMore(
      e.nativeEvent.lines.length > props.numberOfLines && lines !== 0
    );
  };

  return (
    <View>
      <Text
        numberOfLines={lines}
        onTextLayout={onTextLayout}
        style={styles.description}
      >
        {props.children}
      </Text>
      {showMore && (
        <TouchableOpacity
          title="View More"
          onPress={() => {
            setLines(0);
            setShowMore(false);
          }}
        >
          <Text style={styles.viewmore}>View more</Text>
        </TouchableOpacity>
      )}
      {!showMore && (
        <TouchableOpacity
          title="Hide"
          onPress={() => {
            setLines(props.numberOfLines);
          }}
        >
          <Text style={styles.viewmore}>Hide</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  description: {
    color: "#888c97",
    fontSize: 16,
  },
  viewmore: {
    color: "#3ea806",
    fontSize: 18,
    fontWeight: "bold",
    alignItems: "flex-end",
  },
});
export default CustomText;
