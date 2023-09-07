// tests  useNumInputState hook

import { act, renderHook } from '@testing-library/react-hooks';

import { useNumInputState } from './useNumInputState';

describe('useNumInputState', () => {
  it('should return value and onChange', () => {
    const { result } = renderHook(() => useNumInputState(1));

    expect(result.current.value).toBe(1);
    expect(typeof result.current.onChange).toBe('function');
  });

  it('should update value', () => {
    const { result } = renderHook(() => useNumInputState(1));

    act(() => {
      result.current.onChange(2);
    });

    expect(result.current.value).toBe(2);
  });
});
