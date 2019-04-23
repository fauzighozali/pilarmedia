import React from "react";
import { BackHandler, View, StatusBar, Platform } from "react-native";
import StartupActions from "../redux/startup";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { AppWithNavigationState } from "./index";
import { compose, withHandlers, lifecycle, pure } from 'recompose';

const mapStateToProps = (state) => ({
  state: state.nav
});

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
  goBack: () => dispatch(NavigationActions.back())
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onBackPress: (props) => () => {
      const { state } = props;
      if (state.routes.length === 1 && (state.routes[0].routeName === 'Login')) {
        return false;
      }
      props.goBack();
      return true;
    }
  }),
  lifecycle({
    componentDidMount() {
      const { startup, onBackPress } = this.props;
      startup();
      BackHandler.addEventListener("hardwareBackPress", onBackPress);
    },
    componentWillUnmount() {
      BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }
  }),
  pure
);

const RootScreen = enhance(() => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent={false} backgroundColor={'#4e8bff'}
                 barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}/>
      <AppWithNavigationState/>
    </View>
  )
});

export default RootScreen;
