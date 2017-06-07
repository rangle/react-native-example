// @flow
import type { Element } from 'react';
import React from 'react';
import { CameraKitCamera } from 'react-native-camera-kit';

export const Picture = (props: PictureProps): Element<any> => (
  <CameraKitCamera
    testID="Camera"
    ref={(cam: Object) => {
      this.camera = cam;
    }}
    style={{ flex: 1, backgroundColor: 'white' }}
    cameraOptions={{
      flashMode: 'auto',
      focusMode: 'on',
      zoomMode: 'on',
    }}
  />
);

declare type PictureProps = {
  navigator: Object,
};
