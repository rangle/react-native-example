// @flow
import R from 'ramda';
import { s } from 'src/styles';
import { propsFrom, propFrom, isNotBoolean, isOneOf, filterNilAndFalse } from 'src/utils/functions';

const classesFor = (stylesObj: mixed[]) => R.compose(propsFrom(stylesObj), R.map(R.join('')));
const classFor = (stylesObj: mixed[]) => R.compose(propFrom(stylesObj), R.join(''));
const getBorderDef = R.compose(R.toPairs, R.map(R.always('')));
const getBorderColor = R.compose(R.find(isNotBoolean), R.values);

const getBorderWithColor = (borderDef: Border): mixed[] => {
  const borders = getBorderDef(borderDef);
  const color = getBorderColor(borderDef);
  return R.concat(borders, color ? [['b__', color]] : []);
};

const tachyonClassesFor = classesFor(s);
const tachyonClassFor = classFor(s);

/**
 * Color transforms
 */
export const bgTransform = (bg: Color): ClassName => tachyonClassFor(['bg_', bg]);
export const colorTransform = (color: Color): ClassName => tachyonClassFor(['', color]);

/**
 * Typography transforms
 */
export const typeScaleTransform = R.ifElse(
  isOneOf(['headline', 'subheadline']),
  (f: TypeScale): ClassName => tachyonClassFor(['f_', f]),
  (f: TypeScale): ClassName => tachyonClassFor(['f', f]),
);
export const fontFamilyTransform = (ff: FontFamily): ClassName => tachyonClassFor(['ff_', ff]);
export const fontWeightTransform = (fw: FontWeights): ClassName => tachyonClassFor(['fw', fw]);
export const lineHeightTransform = (lh: LineHeights): ClassName => tachyonClassFor(['lh', lh]);

/**
 * Padding and margin transforms
 */
export const spacingTransform = R.compose(
  (props: Spacing): ClassName[] => tachyonClassesFor(props),
  R.toPairs,
  filterNilAndFalse,
);

/**
 * Width and height transforms
 */
export const widthTransform = R.ifElse(
  isOneOf([10, 20, 25, 30, 33, 34, 40, 50, 60, 70, 75, 80, 90, 100]),
  (w: Widths): ClassName => tachyonClassFor(['w_', w]),
  (w: Widths): ClassName => tachyonClassFor(['w', w]),
);
export const heightTransform = (h: Heights): ClassName => tachyonClassFor(['h', h]);

/**
 * Border width, color & radius transforms
 */
export const borderTransform = R.compose(tachyonClassesFor, getBorderWithColor, filterNilAndFalse);
export const radiusTransform = ({ size, sides }: BorderRadius): ClassName[] => {
  if (!sides) {
    return [];
  }

  if (sides === 'all') {
    return tachyonClassFor(['br', size]);
  }

  return tachyonClassesFor(sides.map((side: RadiusSide) => [`br__${side}`, size]));
};
