// @flow
import R from 'ramda';

export const propsFrom = (stylesObj: mixed[]) => R.props(R.__, stylesObj);

export const propFrom = (stylesObj: mixed[]) => R.prop(R.__, stylesObj);

export const isNotBoolean = R.complement(R.is(Boolean));

export const isOneOf = (options: mixed[]) => R.contains(R.__, options);

export const isNotNilAndTrue = R.complement(R.anyPass([R.isNil, R.equals(false)]));

export const filterNilAndFalse = R.pickBy(isNotNilAndTrue);

export const unlessNil = R.unless(R.isNil);

export const isNotEmpty = R.complement(R.isEmpty);

export const stringToInt = (text: string): number => parseInt(text.replace(/\D/g, ''), 10);

export function* iteratorFromArray<T>(values: T[]): Generator<T, any, void> {
  yield* values;
}

export const renameKeys = R.curry((keysMap: Map<string>, obj: Map<any>) =>
  R.reduce(
    (acc: Map<any>, key: string) => R.assoc(keysMap[key] || key, obj[key], acc),
    {},
    R.keys(obj),
  ),
);

export const secondsFromMilliseconds = (mil: number): number => parseInt(mil / 1000, 10);

export const minutesFromMilliseconds = (mil: number): number =>
  parseInt(secondsFromMilliseconds(mil) / 60, 10);

export const hoursFromMilliseconds = (mil: number): number =>
  parseInt(minutesFromMilliseconds(mil) / 60, 10);

export const minutesRemaining = (mil: number): number =>
  parseInt(minutesFromMilliseconds(mil) % 60, 10);
