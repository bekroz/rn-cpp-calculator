const RnCppCalculator = require('./NativeRnCppCalculator').default;

export function multiply(a: number, b: number): number {
  return RnCppCalculator.multiply(a, b);
}
