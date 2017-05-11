// @flow
import type { Element } from 'react';
import React from 'react';
import { View, Text } from 'react-native';
import { s } from 'src/styles';
import { Page } from './page';

export const Search = (props: SearchProps): Element<any> => (
  <Page>
    <View style={[s.flx_i, s.jcc]}>
      <Text>Welcome to search</Text>
    </View>
  </Page>
);

declare type SearchProps = {
  navigator: Object,
};
