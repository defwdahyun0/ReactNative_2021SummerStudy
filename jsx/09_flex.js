import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerOne}>

      </View>
      <View style={styles.containerTwo}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  containerOne: {
    flex:1, // 1/3 영역
    backgroundColor:"red"
  },
  containerTwo:{
    flex:2, // 2/3 영역
    backgroundColor:"yellow"
  }
});