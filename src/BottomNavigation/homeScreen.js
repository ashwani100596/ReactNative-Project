import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import axios from "axios";

const HomeScreen = () => {
  const getDataUsingSimpleGetCall = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then(function (response) {
        // handle success
        alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      })
      .finally(function () {
        // always executed
        alert("Finally called");
      });
  };

  const getDataUsingAsyncAwaitGetCall = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      alert(JSON.stringify(response.data));
    } catch (error) {
      // handle error
      alert(error.message);
    }
  };

  const postDataUsingSimplePostCall = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: "foo",
        body: "bar",
        userId: 1,
      })
      .then(function (response) {
        // handle success
        alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      });
  };

  const multipleRequestsInSingleCall = () => {
    axios
      .all([
        axios
          .get("https://jsonplaceholder.typicode.com/posts/1")
          .then(function (response) {
            // handle success
            alert("Post 1 : " + JSON.stringify(response.data));
          }),
        axios
          .get("https://jsonplaceholder.typicode.com/posts/2")
          .then(function (response) {
            // handle success
            alert("Post 2 : " + JSON.stringify(response.data));
          }),
      ])
      .then(
        axios.spread(function (acct, perms) {
          // Both requests are now complete
          alert("Both requests are now complete");
        })
      );
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, textAlign: "center" }}>
        Example of Axios Networking in React Native
      </Text>
      {/*Running GET Request*/}
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getDataUsingSimpleGetCall}
      >
        <Text>Simple Get Call</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getDataUsingAsyncAwaitGetCall}
      >
        <Text>Get Data Using Async Await GET</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={postDataUsingSimplePostCall}
      >
        <Text>Post Data Using POST</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={multipleRequestsInSingleCall}
      >
        <Text>Multiple Concurrent Requests In Single Call</Text>
      </TouchableOpacity>

      <Text style={{ textAlign: "center", marginTop: 18 }}></Text>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  Text: {
    // width: 200,
    // height: 44,
    // padding: 10,
    // borderWidth: 1,
    // borderColor: "black",
    // marginBottom: 10,
    fontWeight: "bold",
    marginTop: 500,
    textAlign: "center",
  },
  container: {
    justifyContent: "center",
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: "100%",
    marginTop: 16,
  },
});
