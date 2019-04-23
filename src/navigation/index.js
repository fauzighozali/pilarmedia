import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { Easing, Animated } from 'react-native'
import { LoginScreen } from '../screens/login'
import { RegisterScreen } from "../screens/register";
import { HomeScreen } from "../screens/home"
import { DaftarAnggotaScreen } from "../screens/daftar-anggota";
import { DetailScreen } from "../screens/details";

export const AppNavigation = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        title: 'Daftar Anggota'
      }
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Dashboard',
        headerLeft: null
      })
    },
    DaftarAnggota: {
      screen: DaftarAnggotaScreen,
      navigationOptions: {
        title: 'Daftar Anggota',
      }
    },
    Details: {
      screen: DetailScreen,
      navigationOptions: {
        header: null
      }
    },
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      gesturesEnabled: true,
      // header: null
    },
    mode: "card",
    headerTransitionPreset: "uikit",
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(2)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const width = layout.initWidth;
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [width, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateX: translateX }] };
      }
    }),
  }
);

