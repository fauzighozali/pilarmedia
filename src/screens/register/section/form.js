import React from 'react'
import { compose, withState, withProps, withHandlers } from 'recompose'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { ButtonTampan1 } from "../../../components/button"
import { renderInput } from "../../../components/input"
import { Field, reduxForm } from 'redux-form'
import { generateOptions, filterObjectinArray } from "../../../lib/helpers";
import { renderPicker } from "../../../components/picker";
import { withEither, withMaybe } from "../../../lib/rendering-handler";
import { Spinner } from "../../../components/spinner";
import { BlankTransparent } from "../../../components/blank";

const waitFetching = compose(
  withEither(props => props.kota.fetching, Spinner),
  withMaybe(props => props.kota.data !== null),
  withEither(props => !props.kota.data.length, BlankTransparent)
);

const enhance = compose(
  waitFetching,
  withProps({ inputs: [] }),
  reduxForm({ form: 'register' }),
  withHandlers({
    navigate: ({ navigation }) => (to) => navigation.navigate({ key: to, routeName: to }),
  }),
  withHandlers({
    initInput: ({ inputs }) => (input, id) => inputs[id] = input,
    registerClick: (props) => ({ vendor_city = '', ...data }) => {
      if (vendor_city !== '') {
        const payload = {
          ...data,
          vendor_city: vendor_city.value
        };
        props.setWithBlocking(true);
        props.dispatchRegister(payload);
      }else {
        alert('Silahkan isi field!')
      }
    }
  })
);

export const Form = enhance(props => {
  console.tron.log({wew: generateOptions(filterObjectinArray('NamaKota', props.kota.data))})
    return (
      <View style={styles.form}>
        <View style={styles.input}>
          <Field
            id={'vendor_name'}
            init={props.initInput}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              props.inputs['email'].focus()
            }}
            returnKeyType={"next"}
            autoCapitalize="none"
            placeholder='Nama Lengkap *)'
            name={'vendor_name'}
            component={renderInput}
          />
        </View>
        <View style={styles.input}>
          <Field
            id={'vendor_mail'}
            init={props.initInput}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              props.inputs['alamat'].focus()
            }}
            returnKeyType={"next"}
            autoCapitalize="none"
            placeholder='Email *)'
            name={'vendor_mail'}
            component={renderInput}
          />
        </View>
        <View style={styles.input}>
          <Field
            id={'vendor_adress'}
            init={props.initInput}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              props.inputs['nohp'].focus()
            }}
            returnKeyType={"next"}
            autoCapitalize="none"
            placeholder='Alamat *)'
            name={'vendor_adress'}
            component={renderInput}
          />
        </View>
        <View style={styles.input}>
          <Field
            id={'vendor_phone1'}
            init={props.initInput}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              props.inputs['password'].focus()
            }}
            returnKeyType={"next"}
            autoCapitalize="none"
            placeholder='No Handphone *)'
            name={'vendor_phone1'}
            component={renderInput}
          />
        </View>
        <View style={styles.input}>
          <Field
            id={'vendor_companyname'}
            init={props.initInput}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              props.inputs['bentukusaha'].focus()
            }}
            returnKeyType={"next"}
            autoCapitalize="none"
            placeholder='Nama Perusahaan *)'
            name={'vendor_companyname'}
            component={renderInput}
          />
        </View>
        <View style={styles.input}>
          <Field
            id={'vendor_companytype'}
            init={props.initInput}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              props.inputs['alamatperusahaan'].focus()
            }}
            returnKeyType={"next"}
            autoCapitalize="none"
            placeholder='Bentuk Usaha'
            name={'vendor_companytype'}
            component={renderInput}
          />
        </View>
        <View style={styles.input}>
          <Field
            id={'vendor_city'}
            name={'vendor_city'}
            component={renderPicker}
            placeholder='Kota *)'
            searchPlaceholder={'Cari Kota'}
            options={generateOptions(filterObjectinArray('NamaKota', props.kota.data))}
          />
        </View>
        <View style={styles.input}>
          <Field
            id={'vendor_postcode'}
            init={props.initInput}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              props.inputs['nohp1'].focus()
            }}
            returnKeyType={"next"}
            autoCapitalize="none"
            placeholder='Kode Pos'
            name={'vendor_postcode'}
            component={renderInput}
          />
        </View>
        <View style={styles.input}>
          <Field
            id={'vendor_phone2'}
            init={props.initInput}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              props.inputs['nofax'].focus()
            }}
            returnKeyType={"next"}
            autoCapitalize="none"
            placeholder='Nomor Telepon Kantor *)'
            name={'vendor_phone2'}
            component={renderInput}
          />
        </View>
        <View style={styles.input}>
          <Field
            id={'vendor_fax'}
            init={props.initInput}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              props.inputs['alamatkantor'].focus()
            }}
            returnKeyType={"next"}
            autoCapitalize="none"
            placeholder='No Fax'
            name={'vendor_fax'}
            component={renderInput}
          />
        </View>
        <View style={styles.input}>
          <Field
            id={'vendor_website'}
            init={props.initInput}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              props.inputs['tahunberdiri'].focus()
            }}
            returnKeyType={"next"}
            autoCapitalize="none"
            placeholder='Website'
            name={'vendor_website'}
            component={renderInput}
          />
        </View>
        <View style={styles.input}>
          <Field
            id={'vendor_startyear'}
            init={props.initInput}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              props.inputs['npwp'].focus()
            }}
            returnKeyType={"next"}
            autoCapitalize="none"
            placeholder='Tahun Berdiri *)'
            name={'vendor_startyear'}
            component={renderInput}
          />
        </View>
        <View style={styles.input}>
          <Field
            id={'vendor_PKP'}
            init={props.initInput}
            blurOnSubmit={true}
            autoCapitalize="none"
            returnKeyType={"done"}
            placeholder='Pengusaha Kena Pajak (PKP)'
            name={'vendor_PKP'}
            component={renderInput}
          />
        </View>
        <ButtonTampan1
          title="Daftar"
          loading={props.loading}
          onPress={props.handleSubmit(props.registerClick)}/>
      </View>
    )
  });

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
    marginVertical: 10,
    alignItems: 'center'
  },
  register: {
    color: '#4e8bff',
    fontWeight: 'bold',
    fontSize: 15
  },
  forgotPassword: {
    color: '#4e8bff',
    fontSize: 15
  }
});
