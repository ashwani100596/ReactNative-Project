 import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';


export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    inputText: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
    },
  });

  return (
    <View style={styles.container}>
    <TextInput
    placeholder={'Username'}
    style={styles.inputText}
     />
    <TextInput 
      placeholder={'Password'}
      style={styles.inputText}
    />
    <Button
         title={'Login'}
          style={styles.inputText}
          // onPress={this.onLogin.bind(this)}
        />
      <Text>Hello Mr. Ashwani kumar how was your day</Text>
      <StatusBar style="auto" />
    </View>
  );
}