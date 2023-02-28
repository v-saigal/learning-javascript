const ten_minute_walk = require('./walk')

describe('ten_minute_walk?', () => {
    test('returns true if length is correct and will lead to origin', () => {
        const result = ten_minute_walk(['n','e','w','w','w','s','s','n','e','e']);
        expect(result).toBe(true)

    });

    test('returns false if length is incorrect', () => {
        const result = ten_minute_walk(['n', 'e']);
        expect(result).toBe(false)
    });

    test('returns false if directions will not lead to origin', () => {
        const result = ten_minute_walk(['n','e','w','w','w','s','s','e','e','e'])
        expect(result).toBe(false)

    });




});
