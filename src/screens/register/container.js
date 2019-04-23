import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { compose, lifecycle, pure, withState } from 'recompose'
import { Form } from "./section/form";
import { connect } from "react-redux";
import ActionRegister from "../../redux/register";
import ActionKota from "../../redux/kota";

const enhance = compose(
  connect(
    state => ({
      kota: state.kota,
      register: state.register
    }),
    dispatch => ({
      dispatchRegister: (payload) => dispatch(ActionRegister.registerRequest(payload)),
      dispatchKota: () => dispatch(ActionKota.kotaRequest())
    })
  ),
  withState('withBlocking', 'setWithBlocking', false),
  lifecycle({
    componentDidMount() {
      this.props.dispatchKota()
    }
  }),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      const { fetching, error, message } = nextProps.register;
      if (fetching === false && nextProps.withBlocking) {
        if (error === false) {
          nextProps.setWithBlocking(false);
          nextProps.navigation.navigate({ key: 'Home', routeName: 'Home' })
          alert(message)
        } else {
          alert(message)
        }
      }
    }
  }),
  pure
);

export const Container = enhance(({ navigation, kota, register, dispatchRegister, ...props }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Form {...props} navigation={navigation} kota={kota} register={register} dispatchRegister={dispatchRegister}/>
      </ScrollView>
    </View>
  )
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: 10
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  logo: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    flex: 0.4
  },
  input: {
    marginHorizontal: 10, marginVertical: 5
  }
});
