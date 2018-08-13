const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Returns two lines if simple string is inserted', () => {
      expect(wrap("I have a dog", 6)).to.equal("I have\n a dog");
  }); 
});