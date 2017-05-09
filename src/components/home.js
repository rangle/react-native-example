// @flow
import type { Element } from 'react';
import React from 'react';
import { View, Text } from 'react-native';
import { s } from 'styles';
import { Page } from './page';

export const Home = (): Element<any> => (
  <Page>
    <View style={[s.flx_i, s.jcc]}>
      <Text>Welcome to home</Text>
    </View>
  </Page>
);
