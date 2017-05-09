/**
 * @providesModule styles
 */
import NativeTachyons, { styles } from 'react-native-style-tachyons';
import { StyleSheet, Platform } from 'react-native';
import { palette, zIndexes, perecentWidths } from './config';

const iosFontClasses = {

};

const androidFontClasses = {

};

NativeTachyons.build({
  colors: { palette },
  // fonts,
}, StyleSheet);

export const s = {
  ...styles,
  ...Platform.select({
    ios: iosFontClasses,
    android: androidFontClasses,
  }),
  ...zIndexes,
  ...perecentWidths,
};

export * from './config';
