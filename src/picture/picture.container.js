// @flow
import { compose } from 'recompose';
import { withCameraPermissions } from 'src/utils';
import { Picture as PictureComponent } from './picture.component';

export const Picture = compose(
  withCameraPermissions,
)(PictureComponent);
