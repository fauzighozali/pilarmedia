import React from 'react';
import { View, StyleSheet } from "react-native";

export const Blank = () =>
  <View style={styles.container}/>
;

export const BlankTransparent = () =>
  <View style={styles.container2}/>
;

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff', padding: 20
  },
  container2: {
    flex: 1, backgroundColor: 'transparent', padding: 20
  }
});
