import R from 'ramda';
import type { Element } from 'react';
import React from 'react';
import { s } from 'src/styles';
import {
  bgTransform,
  colorTransform,
  typeScaleTransform,
  spacingTransform,
  widthTransform,
  heightTransform,
  borderTransform,
  radiusTransform,
  fontFamilyTransform,
  fontWeightTransform,
  lineHeightTransform,
} from './transforms';

const isNotEmpty = R.complement(R.isEmpty);

/**
 * Generate an array of tachyon classes
 * based on style props
 */
export const withStylePropsTransform = ({
  bg,
  color,
  f,
  ff,
  fw,
  lh,
  ma,
  mv,
  mh,
  mt,
  mr,
  mb,
  ml,
  na,
  nv,
  nh,
  nt,
  nr,
  nb,
  nl,
  pa,
  pv,
  ph,
  pt,
  pr,
  pb,
  pl,
  w,
  h,
  ba,
  bt,
  br,
  bb,
  bl,
  flx,
  flxRow,
  flxGrow,
  flxWrap,
  tc,
  tl,
  tr,
  tj,
  radius,
  style: otherStyles,
  ...props
}: WithStyleProps): any => {
  const style = [];
  if (flxWrap) {
    style.push(s.flx_wrap);
  }
  if (flxGrow) {
    style.push(s.flx_grow);
  }
  if (tc) {
    style.push(s.tc);
  }
  if (tl) {
    style.push(s.tl);
  }
  if (tr) {
    style.push(s.tr);
  }
  if (tj) {
    style.push(s.tj);
  }
  if (flx) {
    style.push(s.flx_i);
  }
  if (flxRow) {
    style.push(s.flx_row);
  }
  if (bg) {
    style.push(bgTransform(bg));
  }
  if (color) {
    style.push(colorTransform(color));
  }

  if (f) {
    style.push(typeScaleTransform(f));
  }
  if (ff) {
    style.push(fontFamilyTransform(ff));
  }
  if (fw) {
    style.push(fontWeightTransform(fw));
  }
  if (lh) {
    style.push(lineHeightTransform(lh));
  }

  const paddings = spacingTransform({ pa, pv, ph, pt, pr, pb, pl });
  if (isNotEmpty(paddings)) {
    style.push(paddings);
  }

  const margins = spacingTransform({ ma, mv, mh, mt, mr, mb, ml, na, nv, nh, nt, nr, nb, nl });
  if (isNotEmpty(margins)) {
    style.push(margins);
  }

  if (w) {
    style.push(widthTransform(w));
  }
  if (h) {
    style.push(heightTransform(h));
  }

  const borders = borderTransform({ ba, bt, br, bb, bl });
  if (isNotEmpty(borders)) {
    style.push(borders);
  }

  if (radius !== undefined) {
    style.push(radiusTransform(radius));
  }

  if (otherStyles) {
    style.push(otherStyles);
  }

  return { style, ...props };
};

export const withStyleProps = (MyView: any): any => {
  const Component = (props: any): Element<*> => {
    const extendedProps = withStylePropsTransform(props);
    return <MyView {...extendedProps} />;
  };
  Component.displayName = Component.displayName || Component.name || 'WithStyleComponent';
  return Component;
};
