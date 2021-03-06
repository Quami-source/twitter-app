import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function LinksScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Hello to Search Screen</Text>
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignSelf:"center",
    backgroundColor:"#2703A6"
  },

  text:{
    fontSize:35,
    color:"#fff",
    textAlign:"center"
  }
});
