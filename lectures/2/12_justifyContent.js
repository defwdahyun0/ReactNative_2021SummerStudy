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
          <Text>!!컨텐츠!!</Text>
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
    flex:1,
    backgroundColor:"red"
  },
  containerTwo:{
    flex:2,
    flexDirection:"row",
    backgroundColor:"yellow"
  },
  innerOne: {
    flex:1,
    backgroundColor:"blue"
  },
  innerTwo: {
    flex:4,
    flexDirection:"column", //default
    justifyContent:"flex-start", // direction과 같은 방향으로, 상하 정렬
    alignItems: "flex-end", // direction과 반대방향으로, 좌우정렬
    backgroundColor:"orange"
  }
});

