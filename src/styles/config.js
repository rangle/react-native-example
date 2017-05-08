import R from 'ramda';

export const lineHeights = {
  solid: 1,
  title: 1,
  copy: 1,
};

export const typeScale = [1, 2, 3, 4, 5, 6];

export const zIndexes = {
  z1: { zIndex: 1 },
  z2: { zIndex: 2 },
  z3: { zIndex: 3 },
  z4: { zIndex: 4 },
  z5: { zIndex: 5 },
};

export const perecentWidths = {
  w_10: { width: '10%' },
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

export const whiteSpaceScale = [0, 1, 2, 3, 4, 5, 6];

export const palette = {
  black: '#000',
  nearBlack: '#111',
  darkGray: '#3a2e2c',
  midGray: '#555',
  gray: '#767676',
  silver: '#999',
  lightSilver: '#aaa',
  moonGray: '#bab6b5',
  lightGray: '#d8d5d5',
  nearWhite: '#f4f4f4',
  white: '#fff',
  red: '#c60a00',
  green: '#008342',
  washedGreen: '#DAE9E2',
  darkBlue: '#230077',
  blue: '#3300ad',
  linen: '#f2eee2',
  transparent: 'transparent',
  black90: 'rgba(0,0,0,.9)',
  black80: 'rgba(0,0,0,.8)',
  black70: 'rgba(0,0,0,.7)',
  black60: 'rgba(0,0,0,.6)',
  black50: 'rgba(0,0,0,.5)',
  black40: 'rgba(0,0,0,.4)',
  black30: 'rgba(0,0,0,.3)',
  black20: 'rgba(0,0,0,.2)',
  black10: 'rgba(0,0,0,.1)',
  black05: 'rgba(0,0,0,.05)',
  black025: 'rgba(0,0,0,.025)',
  black0125: 'rgba(0,0,0,.0125)',
  white90: 'rgba(255,255,255,.9)',
  white80: 'rgba(255,255,255,.8)',
  white70: 'rgba(255,255,255,.7)',
  white60: 'rgba(255,255,255,.6)',
  white50: 'rgba(255,255,255,.5)',
  white40: 'rgba(255,255,255,.4)',
  white30: 'rgba(255,255,255,.3)',
  white20: 'rgba(255,255,255,.2)',
  white10: 'rgba(255,255,255,.1)',
  white05: 'rgba(255,255,255,.05)',
  white025: 'rgba(255,255,255,.025)',
  white0125: 'rgba(255,255,255,.0125)',
};

export const colors = R.keys(palette);
