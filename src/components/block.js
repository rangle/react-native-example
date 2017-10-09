// @flow
import R from 'ramda';
import { View, Image, TouchableOpacity } from 'react-native';
import { compose, mapProps } from 'recompose';
import { s } from 'src/styles';
import { withStyleProps } from 'src/styles/with-style-props';

export const Block = withStyleProps(View);
Block.displayName = 'Block';

export const ImageBlock = withStyleProps(Image);
ImageBlock.displayName = 'ImageBlock';

export const TouchableOpacityBlock = withStyleProps(TouchableOpacity);
TouchableOpacityBlock.displayName = 'TouchableOpacityBlock';

export type CurvedBlockProps = {
  curveSize?: RadiusScale,
  topLeft?: boolean,
  topRight?: boolean,
  bottomLeft?: boolean,
  bottomRight?: boolean,
  style?: any,
};

const getSides = R.compose(
  R.keys,
  R.filter(R.identity),
  R.zipObj(['topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
);

export const CurvedBlock = compose(
  mapProps(
    ({
      topLeft = false,
      topRight = false,
      bottomLeft = false,
      bottomRight = false,
      curveSize = 5,
      style,
      ...props
    }: CurvedBlockProps) => ({
      ...props,
      radius: {
        size: curveSize,
        sides: getSides([topLeft, topRight, bottomLeft, bottomRight]),
      },
      style: [style, s.overflowHidden],
    }),
  ),
  withStyleProps,
)(View);
CurvedBlock.displayName = 'CurvedBlock';
