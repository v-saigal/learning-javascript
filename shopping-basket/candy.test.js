const Candy = require('./candy')

describe('Candy', () => {
    it('constructs', () => {
        const testCandy = new Candy('Twix', 2);
    });

    it('returns price', () => {
        const testCandy = new Candy('Twix', 2);
        expect(testCandy.getPrice()).toBe(2)
    })

    it('returns price', () => {
        const testCandy = new Candy('Twix', 2);
        expect(testCandy.getName()).toBe('Twix')
    })




});
