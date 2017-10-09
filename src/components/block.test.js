import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import { s } from 'src/styles';
import { Block, CurvedBlock } from './block';

describe('Block', () => {
  it('sets View styles through props', () => {
    const tree = renderer
      .create(
        <Block
          mv={3}
          ml={4}
          pa={2}
          bt="red"
          radius={{ size: 3, side: 'top' }}
          w={75}
          h={5}
          bg="rWhite"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('sets other styles through the style prop', () => {
    const tree = renderer
      .create(
        <Block
          mv={0}
          ml={4}
          pa={2}
          bt="red"
          radius={{ size: 2, sides: 'all' }}
          w={75}
          h={5}
          bg="rWhite"
          style={[s.flx_i, s.absolute_fill]}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('CurvedBlock', () => {
  it('should add curved edges to Block', () => {
    const tree = renderer
      .create(
        <CurvedBlock
          mv={3}
          ml={4}
          pa={2}
          bt="red"
          radius={{ size: 3, side: 'top' }}
          w={75}
          h={5}
          bg="rWhite"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should allow control over which side is curved', () => {
    const tree = renderer
      .create(
        <CurvedBlock
          mv={3}
          ml={4}
          pa={2}
          bt="red"
          radius={{ size: 3, side: 'top' }}
          w={75}
          h={5}
          bg="rWhite"
          curveSize={4}
          topLeft
          topRight
          bottomLeft={false}
          bottomRight={false}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
