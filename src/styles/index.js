/**
 * @providesModule styles
 */
import NativeTachyons, { styles } from 'react-native-style-tachyons';
import { StyleSheet } from 'react-native';
import { config } from './config';
import { extendedStyles } from './extends';

NativeTachyons.build(config, StyleSheet);

export const s = {
  ...styles,
  ...extendedStyles,
};

export * from './config';
