import React, { Fragment } from 'react'
import { View, StyleSheet, Text, Platform, ScrollView } from 'react-native'
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { withNavigation } from 'react-navigation';
import ActionVendor from '../../redux/vendor';
import { List } from "./section/list";

const enhance = compose(
  withNavigation,
  connect(
    state => ({
      vendor: state.vendor
    }),
    dispatch => ({
      dispatchGetVendor: () => dispatch(ActionVendor.vendorRequest())
    })
  ),
  lifecycle({
    componentDidMount() {
      this.props.dispatchGetVendor()
    }
  })
);

export const Container = enhance((props) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <List {...props} data={props.vendor.data} loading={props.vendor.fetching}/>
      </ScrollView>
    </View>
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

