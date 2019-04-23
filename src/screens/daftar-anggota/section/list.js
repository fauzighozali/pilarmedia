import React, { Fragment } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import * as Animatable from "react-native-animatable";
import { TextTampan } from "../../../components/text";
import { compose, withHandlers } from 'recompose';
import { withAnimations, withEither } from "../../../lib/rendering-handler";
import { Spinner } from "../../../components/spinner";
import { View } from "react-native";
import { BlankTransparent } from "../../../components/blank";
import { ListItem, Colors } from "react-native-ui-lib";

const ListEmpty = () => {
  return (
    <TextTampan>
      -
    </TextTampan>
  )
};

const enhance = compose(
  withEither(props => props.loading, Spinner),
  withEither(props => props.data === null, BlankTransparent),
  withEither(props => !props.data.length, ListEmpty),
  withHandlers({
    navigate: ({ navigation }) => (item) => () => navigation.navigate({
      routeName: 'Details',
      params: {
        id: item
      }
    })
  })
);

const renderRow = (item, index, props) => {
  return (
    <ListItem
      activeBackgroundColor={Colors.dark60}
      activeOpacity={0.3}
      height={180}
      onPress={props.navigate(item)}
      animation="fadeIn"
      easing="ease-out-expo"
      duration={1000}
      useNativeDriver
      containerStyle={{
        backgroundColor: '#fff',
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
      }}
    >
      <ListItem.Part left>
        <Animatable.Image
          source={{ uri: 'https://www.w3schools.com/howto/img_avatar.png' }}
          style={styles.image}
          animation="fadeInLeft"
          easing="ease-out-expo"
          duration={600}
          useNativeDriver
        />
      </ListItem.Part>
      <ListItem.Part middle column containerStyle={[styles.border, { paddingRight: 17 }]}>
        <ListItem.Part style={{ paddingTop: 5 }}>
          <TextTampan style={styles.f17} numberOfLines={2}>
            {item.vendor_name}
          </TextTampan>
        </ListItem.Part>
        <ListItem.Part style={{ paddingTop: 5 }}>
          <TextTampan style={styles.f14} numberOfLines={2}>
            Lokasi : {item.vendor_city}
          </TextTampan>
        </ListItem.Part>
        <ListItem.Part style={{ paddingTop: 5 }}>
          <TextTampan style={styles.f14} numberOfLines={2}>
            Alamat : {item.vendor_adress}
          </TextTampan>
        </ListItem.Part>
        <ListItem.Part style={{ paddingTop: 5 }}>
          <TextTampan style={styles.f14} numberOfLines={2}>
            Telp : {item.vendor_phone1}
          </TextTampan>
        </ListItem.Part>
        <ListItem.Part style={{ paddingTop: 5 }}>
          <TextTampan style={styles.f14} numberOfLines={2}>
            Email : {item.vendor_mail}
          </TextTampan>
        </ListItem.Part>
        <ListItem.Part style={{ paddingTop: 5 }}>
          <TextTampan style={styles.f14} numberOfLines={2}>
            {item.vendor_website}
          </TextTampan>
        </ListItem.Part>
      </ListItem.Part>
    </ListItem>
  )
};

export const List = enhance(props => {
  return (
    <Fragment>
      <FlatList
        data={props.data}
        renderItem={({ item, index }) => renderRow(item, index, props)}
        keyExtractor={(item, index) => `index+${index}`}
      />
    </Fragment>
  )
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bgWhite: {
    flex: 1,
    backgroundColor: '#fff'
  },
  border: {},
  image: {
    width: 100,
    height: 140,
    resizeMode: 'cover',
    borderRadius: 20,
    marginHorizontal: 14,
  },
  f14: {
    fontSize: 14
  },
  f17: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#000'
  },
  fwBold: {
    fontWeight: 'bold'
  },
  category: {
    flexDirection: 'row', marginTop: 10
  },
  textCategory: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    fontSize: 13,
    backgroundColor: '#8b64fd',
    color: '#fff',
    borderRadius: 20,
    marginRight: 5,
    fontWeight: 'bold'
  }
});
