import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerOne}>

      </View>
      <View style={styles.containerTwo}>
        <View style={styles.innerOne}>

        </View>
        <View style={styles.innerTwo}>

        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  containerOne: {
    flex:1, // 전체의 1/3 영역
    backgroundColor:"red"
  },
  containerTwo:{
    flex:2, // 전체의 2/3 영역
    backgroundColor:"yellow"
  },
  innerOne: {
    flex:1, // 남은부분의 1/5 영역
    backgroundColor:"blue"
  },
  innerTwo: {
    flex:4, // 남은 부분의 4/5 영역
    backgroundColor:"orange"
  }
});