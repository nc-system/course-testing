
const sub = require('./02-sub')

describe('Substraction Test', () => {

    test('Substration 2 - 1 = 1', () => {
        expect(sub(2, 1)).toBe(1)
    })

    it('Should return 1 whit 2 - 1', () => {
        expect(sub(2, 1)).toBe(1)    
    });
});

