
const sum = require('./01-sum')
 
describe('Addition Test', () => {
  
  test('Adition 2 + 1 = 3', () => {
    expect(sum(1, 2)).toBe(3)
  })

  it('Should return 3 whit 1 + 2', () => {
    expect(sum(1, 2)).toBe(3)
  })

  test('Should 1 + (-2) is -1', () => {
    expect(sum(1, -2)).toBe(-1)
  });

  test('Should return -3, The addition -1 + (-2)', () => {
    expect(sum(-1, -2)).toBe(-3)
  });

})
