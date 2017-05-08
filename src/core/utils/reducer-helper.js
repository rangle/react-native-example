import R from 'ramda';

const actionType = value => R.compose(
  R.equals(value),
  R.propOr(undefined, 'type'),
  R.nthArg(1),
);

const reducerConds = R.compose(
  R.cond,
  R.append([R.T, R.identity]),
  R.map(R.adjust(actionType, 0)),
);

export function reducer(...conditions) {
  return initialState =>
  (state, action) => reducerConds(conditions)(
    R.defaultTo(initialState, state),
    action,
  );
}
