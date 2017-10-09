// @flow
import R from 'ramda';
import { createSelector } from 'reselect';
import type { NavigationState } from './navigation.types';

export const getNavigatorState = R.path(['navigator']);
export const getCurrentID = createSelector(getNavigatorState, (state: NavigationState): string =>
  R.prop('currentID', state),
);
