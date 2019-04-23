import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'

export const TextTampan = ({ children, ...props }) => {
  return (
    <Text style={styles.text} {...props}>
      {children}
    </Text>
  )
};

const styles = StyleSheet.create({

});
