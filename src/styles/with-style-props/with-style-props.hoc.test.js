// @flow
import { s } from '../index';
import { withStylePropsTransform } from './with-style-props.hoc';

describe('withStyleProps HOC', () => {
  test('should set background color', () => {
    expect(withStylePropsTransform({ bg: 'green' })).toEqual({
      style: [s.bg_green],
    });
  });

  test('should set font color', () => {
    expect(withStylePropsTransform({ color: 'washedGreen' })).toEqual({
      style: [s.washedGreen],
    });
  });

  test('should set font size', () => {
    expect(withStylePropsTransform({ f: 1 })).toEqual({ style: [s.f1] });
    expect(withStylePropsTransform({ f: 'subheadline' })).toEqual({
      style: [s.f_subheadline],
    });
  });

  test('should set font family', () => {
    expect(withStylePropsTransform({ ff: 'simplon' })).toEqual({
      style: [s.ff_simplon],
    });
  });

  test('should set font weight', () => {
    expect(withStylePropsTransform({ fw: 3 })).toEqual({ style: [s.fw3] });
  });

  test('should set line height', () => {
    expect(withStylePropsTransform({ lh: 1 })).toEqual({ style: [s.lh1] });
  });

  test('should set padding', () => {
    expect(withStylePropsTransform({ pv: 1, pt: 2, pr: 3 })).toEqual({
      style: [[s.pv1, s.pt2, s.pr3]],
    });
    expect(withStylePropsTransform({ pa: 0 })).toEqual({ style: [[s.pa0]] });
  });

  test('should set margin', () => {
    expect(withStylePropsTransform({ mh: 1, mb: 2, ml: 3 })).toEqual({
      style: [[s.mh1, s.mb2, s.ml3]],
    });
    expect(withStylePropsTransform({ ma: 0 })).toEqual({ style: [[s.ma0]] });
  });

  test('should set width', () => {
    expect(withStylePropsTransform({ w: 4 })).toEqual({ style: [s.w4] });
    expect(withStylePropsTransform({ w: 75 })).toEqual({ style: [s.w_75] });
  });

  test('should set height', () => {
    expect(withStylePropsTransform({ h: 2 })).toEqual({ style: [s.h2] });
  });

  test('should set border', () => {
    expect(withStylePropsTransform({ bt: true, br: false })).toEqual({
      style: [[s.bt]],
    });
  });

  test('should set border color', () => {
    expect(withStylePropsTransform({ bt: true, br: 'red', bb: 'green', bl: false })).toEqual({
      style: [[s.bt, s.br, s.bb, s.b__red]],
    });
  });

  test('should set border radius on all sides', () => {
    expect(withStylePropsTransform({ radius: { size: 2, sides: 'all' } })).toEqual({
      style: [s.br2],
    });
    expect(withStylePropsTransform({ radius: { size: 0, sides: 'all' } })).toEqual({
      style: [s.br0],
    });
  });

  test('should set flx_i', () => {
    expect(withStylePropsTransform({ flx: true })).toEqual({
      style: [s.flx_i],
    });
  });

  test('should set flx_grow', () => {
    expect(withStylePropsTransform({ flxGrow: true })).toEqual({
      style: [s.flx_grow],
    });
  });

  test('should set flx_row', () => {
    expect(withStylePropsTransform({ flxRow: true })).toEqual({
      style: [s.flx_row],
    });
  });

  test('should set flx_grow', () => {
    expect(withStylePropsTransform({ flxGrow: true })).toEqual({
      style: [s.flx_grow],
    });
  });

  test('should set tc', () => {
    expect(withStylePropsTransform({ tc: true })).toEqual({
      style: [s.tc],
    });
  });

  test('should set tl', () => {
    expect(withStylePropsTransform({ tl: true })).toEqual({
      style: [s.tl],
    });
  });

  test('should set tr', () => {
    expect(withStylePropsTransform({ tr: true })).toEqual({
      style: [s.tr],
    });
  });

  test('should set tj', () => {
    expect(withStylePropsTransform({ tj: true })).toEqual({
      style: [s.tj],
    });
  });

  test('should control the border radius side', () => {
    expect(
      withStylePropsTransform({ radius: { size: 4, sides: ['topLeft', 'bottomRight'] } }),
    ).toEqual({
      style: [[s.br__topLeft4, s.br__bottomRight4]],
    });
  });
});
