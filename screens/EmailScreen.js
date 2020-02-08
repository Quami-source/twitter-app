import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function EmailScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, Email Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignSelf:"center",
    backgroundColor:"#F2B705"
   
  },

  text:{
    fontSize:35,
    color:"#fff",
    textAlign:"center"
  }
})