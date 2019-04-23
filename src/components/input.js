import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeProvider, Input } from 'react-native-elements';
import { TextTampan } from "./text";

const theme = {
  Input: {
    containerStyle: {
      width: '100%',
      marginVertical: 2
    },
    inputContainerStyle: {
      borderBottomWidth: .5,
      borderWidth: .5,
      // borderLeftWidth: 1,
      // borderRightWidth: 1,
      borderRadius: 10,
      // borderColor: '#4e8bff',
      backgroundColor: '#fff',
      // paddingVertical: 5,
      paddingHorizontal: 10
    },
    inputStyle: {
      color: '#616161',
      fontSize: 14
    }
  }
};

export const InputTampan = ({ withLabel = false, label = '', ...props }) => (
  <ThemeProvider theme={theme}>
    {
      withLabel && <TextTampan>
        {label}
      </TextTampan>
    }
    <Input
      {...props}
      ref={input => props.init ? props.init(input, props.id) : props.name}
      leftIcon={props.icon ? <Icon name={props.icon} size={22} color={'#ab1434'}/> : null}
    />
  </ThemeProvider>
);

export const renderInput = ({ input: { onChange, ...restInput }, ...props }) => (
  <InputTampan {...props} onChangeText={onChange} {...restInput}/>
);
