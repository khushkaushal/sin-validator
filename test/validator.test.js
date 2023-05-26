import { validateSin } from '../validator.js';
import assert from 'assert';
describe('sinValidator', () => {
  it('should return true if the sin is valid', () => {
    assert.equal(validateSin('046454286'), true);
  })
  it('should return false if the sin is valid', () => {
    assert.equal(validateSin('046454296'), false);
  })
  it('should return false if the sin is empty', () => {
    assert.equal(validateSin(''), false);
  })
});