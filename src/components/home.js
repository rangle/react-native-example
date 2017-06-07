// @flow
import type { Element } from 'react';
import React from 'react';
import { View, Text } from 'react-native';
import { s } from 'src/styles';

export const Home = (): Element<any> => (
  <View
    testID="home"
    style={[s.flx_i, s.jcc]}
  >
    <Text>Welcome to home</Text>
  </View>
);
