import { View } from 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import { s } from 'src/styles';
import { Heading1, Heading2, Heading3, Copy } from './typography';

describe('Typography Components', () => {
  it('should have appropriatley styles hedings and copy components', () => {
    const tree = renderer
      .create(
        <View>
          <Heading1 />
          <Heading2 />
          <Heading3 />
          <Copy />
        </View>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should support style overrides', () => {
    const tree = renderer
      .create(
        <View>
          <Heading1 f={2} fw={3} lh={3} color="rGreen" style={[s.flx_i]} />
          <Heading2 f={1} fw={4} lh={1} color="black60" style={[s.flx_i]} />
          <Heading3 f={3} fw={5} lh={2} color="rGrey" style={[s.flx_i]} />
          <Copy f={6} fw={2} lh={1} color="black80" style={[s.flx_i]} />
        </View>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
