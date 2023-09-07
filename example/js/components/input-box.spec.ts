// generate test file for input-box component

import { NumInputBox } from './input-box';

describe('NumInputBox', () => {
  let component: typeof NumInputBox;

  beforeEach(() => {
    component = NumInputBox;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
