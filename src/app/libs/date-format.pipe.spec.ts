import { CustomDateFormatPipe } from './date-format.pipe';

describe('DateFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomDateFormatPipe();
    expect(pipe).toBeTruthy();
  });
});
