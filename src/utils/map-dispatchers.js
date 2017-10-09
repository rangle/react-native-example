// @flow

import { bindActionCreators } from 'redux';

export const mapDispatchers = (dispatchers: Map<Function>) => (
  dispatch: Function,
): { [string]: Function } => ({
  ...bindActionCreators(dispatchers, dispatch),
  dispatch,
});
