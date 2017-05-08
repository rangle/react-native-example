export const createAction = (type, payload = {}, meta = {}) => ({ type, payload, meta });

export const prefixActionTypes = (obj, namespace) => {
  const res = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] === null) {
      res[key] = `${namespace}/${key}`;
    } else {
      res[key] = obj[key];
    }
  });
  return res;
};
