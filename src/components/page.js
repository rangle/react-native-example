// @flow

import type { Element } from 'react';
import React, { PureComponent } from 'react';
import { View, StatusBar } from 'react-native';
import { s } from 'styles';

export class Page extends PureComponent {
  constructor(props: PageProps) {
    super(props);
    if (props.navigator) {
      props.navigator.setStyle({
        navBarHidden: props.hideNav,
      });
    }
  }

  render(): Element {
    return (
      <View style={[s.flx_i, s.flx_col]}>
        {
          !this.props.hideStatusBar &&
          <StatusBar
            backgroundColor={this.props.statusBarBackground}
            barStyle={this.props.statusBarStyle}
          />
        }
        {this.props.children}
      </View>
    );
  }
}

declare type PageProps = {
  navigator: Object,
  hideNav: boolean,
  hideStatusBar: boolean,
  statusBarStyle: 'dark-content' | 'light-content',
  statusBarBackground: string,
};
