// @flow

import type { Element } from 'react';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { s } from 'styles';

export const Page = (props: any): Element<any> => (
  <View style={[s.flx_i, s.flx_col]}>
    <StatusBar
      backgroundColor={'black'}
      barStyle="dark-content"
    />
    {props.children}
  </View>
);
