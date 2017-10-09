import R from 'ramda';
import { StyleSheet } from 'react-native';

export const zIndexes = {
  z1: { zIndex: 1 },
  z2: { zIndex: 2 },
  z3: { zIndex: 3 },
  z4: { zIndex: 4 },
  z5: { zIndex: 5 },
};

export const flexRatios = {
  flx_1: { flex: 1 },
  flx_2: { flex: 2 },
  flx_3: { flex: 3 },
  flx_4: { flex: 4 },
  flx_5: { flex: 5 },
  flx_col: { flexDirection: 'column' },
  flx_grow: { flexGrow: 1 },
};

export const perecentWidths = {
  w_10: { width: '10%' },
  w_15: { width: '15%' },
  w_20: { width: '20%' },
  w_25: { width: '25%' },
  w_30: { width: '30%' },
  w_33: { width: '33%' },
  w_34: { width: '34%' },
  w_40: { width: '40%' },
  w_50: { width: '50%' },
  w_60: { width: '60%' },
  w_70: { width: '70%' },
  w_75: { width: '75%' },
  w_80: { width: '80%' },
  w_90: { width: '90%' },
  w_100: { width: '100%' },
};

export const typeScaleOverride = {
  f1: { fontSize: 3.75 * 16 },
  f2: { fontSize: 2.625 * 16 },
  f3: { fontSize: 2.25 * 16 },
  f4: { fontSize: 1.875 * 16 },
  f5: { fontSize: 1.25 * 16 },
  f6: { fontSize: 16 },
};

export const lineHeights = {
  lh1: { lineHeight: 66 },
  lh2: { lineHeight: 48 },
  lh3: { lineHeight: 42 },
  lh4: { lineHeight: 36 },
  lh5: { lineHeight: 1.25 * 16 * 1.25 },
  lh6: { lineHeight: 16 },
};

export const shadows = {
  shadow1: {
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 1,
    shadowColor: 'black',
    shadowOpacity: 0.4,
  },
};

export const misc = {
  overflowHidden: { overflow: 'hidden' },
};

const REM_SCALE = [0, 0.25, 0.5, 1, 2, 4, 8, 16, 32];

const marginClasses = [
  'marginTop',
  'marginLeft',
  'marginRight',
  'marginBottom',
  'margin',
  'marginHorizontal',
  'marginVertical',
];
const directions = ['t', 'l', 'r', 'b', 'a', 'h', 'v'];
const directionsClassesMap = R.compose(
  R.reduce((acc: any, obj: any): any => ({ ...acc, ...obj }), {}),
  R.addIndex(R.map)((d: string, i: number): any => ({ [d]: marginClasses[i] })),
)(directions);

const scale = R.range(0, REM_SCALE.length - 1);

const negativeMargins = R.compose(
  R.reduce((acc: any, [d, s]: any[]): any => {
    acc[`n${d}${s}`] = { [directionsClassesMap[d]]: -REM_SCALE[s] * 16 };
    return acc;
  }, {}),
  R.xprod(directions),
)(scale);

export const extendedStyles = StyleSheet.create({
  ...zIndexes,
  ...perecentWidths,
  ...typeScaleOverride,
  ...lineHeights,
  ...flexRatios,
  ...shadows,
  ...misc,
  ...negativeMargins,
});
