import React from 'react'
import { TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight } from 'react-native'
import { Icon, Button, ThemeProvider } from 'react-native-elements'
import { withNavigation } from 'react-navigation'
import { compose, withHandlers, withState } from 'recompose'


const enhance = compose(
  withNavigation,
  withHandlers({
    openDrawer: ({ navigation }) => () => navigation.toggleDrawer(),
    goBack: ({ navigation }) => () => navigation.goBack(),
    navigate: ({ navigation }) => to => () => navigation.navigate({ key: to, routeName: to })
  })
);

export const BackButton = enhance(({ goBack, iconSize = 40 }) => {
  return (
    <TouchableWithoutFeedback underlayColor={'transparent'} onPress={goBack}>
      <Icon name='keyboard-arrow-left' color={'#ab1434'} type='material' size={iconSize}/>
    </TouchableWithoutFeedback>
  )
});

const theme = {
  Button: {
    titleStyle: {
      fontWeight: "700"
    },
    containerStyle: {
      marginLeft: 10,
      marginRight: 10,
      marginTop: 20
    },
    buttonStyle: {
      backgroundColor: "#ab1434",
      // height: 40,
      borderRadius: 10,
      marginHorizontal: 10
    },
    loadingProps: {
      size: "large",
      color: "#ffffff"
    }
  },
};

export const ButtonTampan1 = props => (
  <ThemeProvider theme={theme}>
    <Button
      {...props}
      TouchableComponent={TouchableHighlight}
      underlayColor="transparent"
    />
  </ThemeProvider>
);
