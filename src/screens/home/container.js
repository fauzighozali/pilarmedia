import React, { Fragment } from 'react'
import { View, StyleSheet, ScrollView, Platform } from 'react-native'
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { withNavigation } from 'react-navigation';
import { Menu } from "./section/menu";

const enhance = compose(
  withNavigation
);

export const Container = enhance((props) => {
  return (
    <Fragment>
      <Menu {...props}/>
    </Fragment>
  )
});

const styles = StyleSheet.create({
  p20: {
    padding: 20
  },
  container: {
    marginTop: Platform.OS === 'ios' ? 50 : 10
  }
});

