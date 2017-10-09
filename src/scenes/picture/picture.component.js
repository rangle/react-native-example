import React from 'react';
import { CameraKitCamera } from 'react-native-camera-kit';

export const Picture = () => (
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
