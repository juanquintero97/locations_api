import { Countries } from './countries.entity';

describe('Countries', () => {
  it('should be defined', () => {
    expect(new Countries()).toBeDefined();
  });
});
