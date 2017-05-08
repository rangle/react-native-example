export function safeExecuteFunctions(funcs) {
  return funcs.map((func) => {
    try {
      return func();
    } catch (e) {
      throw new Error('Safe execution expects a function');
    }
  });
}
