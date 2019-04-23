import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'

export const Spinner = () => {
  return (
    <View style={{ flex: 1 }}>
      <ActivityIndicator
        animating={true}
        color='#84888d'
        size='large'
        hidesWhenStopped={true}
        style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
