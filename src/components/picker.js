import React from 'react'
import { View } from 'react-native'
import { Picker, Colors } from 'react-native-ui-lib';
import { TextTampan } from "./text";

const PickerTampan = props => {
  return (
    <Picker
      {...props}
      enableModalBlur={false}
      style={{ fontSize: 17, fontFamily: 'AvenirLTStd-Medium' }}
      // hideUnderline
      showSearch
      searchStyle={{ color: Colors.blue30, placeholderTextColor: Colors.dark50 }}
      // onSearchChange={value => console.warn('value', value)}
    >
      {
        props.options.map((x, i) =>
          <Picker.Item key={x.value} value={x} disabled={x.disabled}/>
        )
      }
    </Picker>
  )
};

export const renderPicker = ({ input: { onChange, ...restInput }, ...props }) => (
  <View style={{ paddingHorizontal: 20 }}>
    <PickerTampan {...props} onChange={onChange} {...restInput}/>
  </View>
);
