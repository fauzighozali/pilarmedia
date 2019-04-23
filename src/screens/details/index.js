import React from 'react'
import { Screen } from "../../components/screen";
import { Container } from "./container";
import { waitInteraction } from "../../lib/rendering-handler";

export const DetailScreen = waitInteraction(props => {
  return (
    <Screen headerType={'main'} name={'Maps'}>
      <Container {...props} />
    </Screen>
  )
});
