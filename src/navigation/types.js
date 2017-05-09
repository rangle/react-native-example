// @flow
import type { Component } from 'react';

export type Scene = {
  route: string,
  title: string,
  component: Component<any, any, any>,
};

export type Options = {
  tabs?: Array<Tab>,
  screen: {
    screen: string,
    title: string,
    navigatorStyle?: Object,
    navigatorButtons?: Object,
  },
  drawer?: {
    left?: {
      screen: string,
      passProps?: Object,
    },
    right?: {
      screen: string,
      passProps?: Object,
    },
    disableOpenGesture?: boolean,
  },
  passProps?: Object,
  animationType?: string,
};

declare type Tab = {
  label?: string,
  screen: string,
  icon: number,
  selectedIcon: number,
  iconInsets?: {
    top: number,
    left: number,
    bottom: number,
    right: number,
  },
  title?: string,
  navigatorStyle?: Object,
  navigatorButtons?: Object,
}
