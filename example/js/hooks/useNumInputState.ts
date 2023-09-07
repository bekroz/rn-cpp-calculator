import { useState } from 'react';

export const useNumInputState = (num: number) => {
  const [value, setValue] = useState<number>(num);

  const onChange = (val: number) => setValue(val);

  return {
    value,
    onChange,
  };
};
