import React from 'react';
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { TextTampan } from "../../../components/text";
import { device } from "../../../lib/dimensions";
import { compose, withHandlers } from 'recompose'

const number = 45;
const iconColor = '#fff';

const enhance = compose(
  withHandlers({
    navigate: ({ navigation }) => (to = 'Maintenance') => () => navigation.navigate(to)
  })
);

export const Menu = enhance((props) => {

  return (
    <View style={styles.panel}>

      <View style={styles.menuContainer}>

        <View style={styles.iconOuterContainer}>
          <TouchableOpacity
                            style={[styles.iconInlineContainer, styles.bgGreen]}>
            <Icon name={'bubble-chart'} size={30} color={iconColor}/>
          </TouchableOpacity>
          <TextTampan style={styles.fCenter}>
            Profile
          </TextTampan>
        </View>

        <View style={styles.iconOuterContainer}>
          <TouchableOpacity onPress={props.navigate('DaftarAnggota')} style={[styles.iconInlineContainer, styles.bgPink]}>
            <Icon name={'people'} size={30} color={iconColor}/>
          </TouchableOpacity>
          <TextTampan style={styles.fCenter}>
            Daftar Anggota
          </TextTampan>
        </View>

      </View>


    </View>
  )
});

const styles = StyleSheet.create({
  iconColor: {
    color: '#fff'
  },
  bgPink: {
    backgroundColor: '#f98bb9'
  },
  bgBlue: {
    backgroundColor: '#82b0fc'
  },
  bgPurple: {
    backgroundColor: '#a7a5fd'
  },
  bgGreen: {
    backgroundColor: '#3ec1b8'
  },
  bgSky: {
    backgroundColor: '#7eddfd'
  },
  bgOrange: {
    backgroundColor: '#fea948'
  },
  bgGray: {
    backgroundColor: '#4b596f'
  },
  panel: {
    height: device.height,
    borderTopWidth: 1,
    borderColor: '#ededed',
    backgroundColor: '#fff',
  },
  panelHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#fff',
    height: 20,
  },
  panelHandle: {
    width: 40,
    height: 5,
    borderRadius: 4,
    backgroundColor: '#c4c1bd'
  },
  menuContainer: {
    flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20, paddingHorizontal: 10
  },
  iconOuterContainer: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
  iconInlineContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: number,
    width: number,
    borderRadius: number / 2,
    marginBottom: 10
  },
  fCenter: {
    textAlign: 'center',
    // fontWeight: '500',
    color: '#949391'
  }
});
