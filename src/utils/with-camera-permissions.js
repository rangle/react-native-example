// @flow
import type { Element } from 'react';
import React, { PureComponent } from 'react';
import {
  CameraKitCamera,
} from 'react-native-camera-kit';

export function withCameraPermissions(Component: Element): Element {
  return class CameraPermissionWrapper extends PureComponent {
    constructor(props: Object) {
      super(props);
      this.state = {
        isAuthorized: false,
      };
    }

    componentDidMount() {
      this._authorizeCamera();
    }

    async _authorizeCamera(): boolean {
      let isAuthorized = await CameraKitCamera.checkDeviceCameraAuthorizationStatus;
      if (!isAuthorized) {
        isAuthorized = await CameraKitCamera.requestDeviceCameraAuthorization();
      }
      this.setState({
        isAuthorized,
      });
    }

    render(): any {
      // TODO: pop modal
      return this.state.isAuthorized ? <Component /> : null;
    }
  };
}
