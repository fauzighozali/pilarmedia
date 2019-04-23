import React from 'react'
import { compose, withState, withProps, withHandlers } from 'recompose'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { ButtonTampan1 } from "../../../components/button"
import { renderInput } from "../../../components/input"
import { TextTampan } from "../../../components/text";
import { Field, reduxForm } from 'redux-form'


const enhance = compose(
  withProps({ inputs: [] }),
  reduxForm({ form: 'login' }),
  withHandlers({
    navigate: ({ navigation }) => (to) => navigation.navigate({ key: to, routeName: to }),
  }),
  withHandlers({
    initInput: ({ inputs }) => (input, id) => inputs[id] = input,
    loginClick: ({ navigate }) => ({ email = '', password = '' }) => {
      if(email && password !== ''){
        navigate('Home')
      } else{
        alert('Silahkan isi field!')
      }
    }
  })
);

export const Form = enhance(props => {
    return (
      <View style={styles.form}>

        <View style={styles.input}>
          <Field
            id={'email'}
            init={props.initInput}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              props.inputs['password'].focus()
            }}
            returnKeyType={"next"}
            autoCapitalize="none"
            placeholder='Email'
            name={'email'}
            component={renderInput}
          />
        </View>
        <View style={styles.input}>
          <Field
            id={'password'}
            init={props.initInput}
            secureTextEntry={true}
            blurOnSubmit={true}
            autoCapitalize="none"
            returnKeyType={"done"}
            placeholder='Password'
            name={'password'}
            component={renderInput}
          />
        </View>
        <ButtonTampan1
          title="LOGIN"
          loading={props.loading}
          onPress={props.handleSubmit(props.loginClick)}/>
        <View style={styles.box}>
          <TextTampan>
            Belum punya akun? <TextTampan onPress={() => props.navigate('Register')} style={styles.register}> Daftar
            sekarang </TextTampan>
          </TextTampan>
        </View>
      </View>
    )
  })
;

const styles = StyleSheet.create({
  form: {
    flex: 1
  },
  input: {
    marginHorizontal: 10,
    marginVertical: 5
  },
  line: {
    height: 1,
    borderWidth: 1,
    flex: 1,
    marginHorizontal: 10,
    borderColor: '#4e8bff'
  },
  box: {
    marginVertical: 20,
    alignItems: 'center'
  },
  register: {
    color: '#ab1434',
    fontWeight: 'bold',
    fontSize: 15
  },
  forgotPassword: {
    color: '#4e8bff',
    fontSize: 15
  }
});
