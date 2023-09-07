const RnCppCalculator = require('./NativeRnCppCalculator').default;

export function add(a: number, b: number): number {
  return RnCppCalculator.add(a, b);
}
