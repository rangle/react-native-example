// @flow
export function safeExecuteFunctions(funcs: Array<Function>): Array<any> {
  return funcs.map((func: Function) => {
    try {
      return func();
    } catch (e) {
      throw new Error('Safe execution expects a function');
    }
  });
}
