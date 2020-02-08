import React from 'react';
import { View, Text,StyleSheet } from 'react-native';


export default function SettingsScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Welome Notification Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignSelf:"center",
    backgroundColor:"#F29F05"
   
  },

  text:{
    fontSize:35,
    color:"#fff",
    textAlign:"center"
  }
})