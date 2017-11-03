import { SimpleDateStringPipe } from './simple-date-string.pipe';

describe('SimpleDateStringPipe', () => {
  it('create an instance', () => {
    const pipe = new SimpleDateStringPipe();
    expect(pipe).toBeTruthy();
  });
});
