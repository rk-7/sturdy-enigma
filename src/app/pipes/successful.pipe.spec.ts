import { SuccessfulPipe } from './successful.pipe';

describe('SuccessfulPipe', () => {
  const testDataSuccessful = [{
    land_success: true,
    mission: 'Orion',
    failure: false
  }, {
    land_success: true,
    mission: 'Apollo',
    failure: false
  }];
  const testDataMixed = [{
    land_success: true,
    mission: 'Orion',
    failure: false
  }, {
    land_success: false,
    mission: 'Apollo',
    failure: true
  }];
  it('create an instance', () => {
    const pipe = new SuccessfulPipe();
    expect(pipe).toBeTruthy();
  });
  it('tests if one instance is successful', () => {
    const pipe = new SuccessfulPipe();
    expect(pipe.transform(testDataMixed, 'land_success')).toBeTrue();
  });
  it('tests if all instances are successful', () => {
    const pipe = new SuccessfulPipe();
    expect(pipe.transform(testDataMixed, 'land_success', true)).toBeFalse();
    expect(pipe.transform(testDataSuccessful, 'land_success', true)).toBeTrue();
  });
});
