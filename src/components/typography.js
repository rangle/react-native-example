import { Text } from 'react-native';
import { compose, defaultProps } from 'recompose';
import { withStyleProps } from 'src/styles/with-style-props';

export const Heading1 = compose(
  defaultProps({ f: 1, fw: 7, lh: 1, color: 'rBlack', bg: 'transparent' }),
  withStyleProps,
)(Text);
Heading1.displayName = 'Heading1';

export const Heading2 = compose(
  defaultProps({ f: 2, fw: 7, lh: 2, color: 'rBlack', bg: 'transparent' }),
  withStyleProps,
)(Text);
Heading2.displayName = 'Heading2';

export const Heading3 = compose(
  defaultProps({ f: 4, fw: 7, lh: 4, color: 'rBlack', bg: 'transparent' }),
  withStyleProps,
)(Text);
Heading3.displayName = 'Heading3';

export const Copy = compose(
  defaultProps({ f: 3, fw: 4, lh: 3, color: 'rBlack', bg: 'transparent' }),
  withStyleProps,
)(Text);
Copy.displayName = 'Copy';

export const Solid = compose(
  defaultProps({ f: 3, fw: 4, color: 'rBlack', bg: 'transparent' }),
  withStyleProps,
)(Text);
Solid.displayName = 'Solid';
