// @flow

declare type ActionPayload = {
  type: string,
  payload: Object,
  meta: Object,
}

export const createAction = (
  type: string,
  payload: any = {},
  meta: Object = {},
): ActionPayload => ({ type, payload, meta });

export const prefixActionTypes = (obj: Object, namespace: string): Object => {
  const res = {};
  Object.keys(obj).forEach((key: any) => {
    if (obj[key] === null) {
      res[key] = `${namespace}/${key}`;
    } else {
      res[key] = obj[key];
    }
  });
  return res;
};
