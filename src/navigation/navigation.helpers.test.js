// @flow

import { View } from 'react-native';
import React from 'react';
import { Navigation } from 'react-native-navigation';
import { registerSceneHelper } from './navigation.helpers';

describe('navigationHelpers', () => {
  describe('registerSceneHelper', () => {
    const TestComponent = () => <View />;
    const scene = {
      screen: 'Test',
      Component: TestComponent,
      navigatorStyle: {},
    };

    it('should register scenes component to navigation', () => {
      const spyRegisterComponent = jest.spyOn(Navigation, 'registerComponent');
      registerSceneHelper({}, {}, scene);
      expect(spyRegisterComponent).toHaveBeenCalled();
    });
  });
});
