const searchCandies = require('./searchCandies')

describe('search', () => {

    it('returns maltesers and mars', () => {
        expected_result = [ 'Mars', 'Maltesers' ];
        expect(searchCandies('Ma', 10)).toStrictEqual(expected_result);
    });

    it('returns mars', () => {
        expected_result = ['Mars']
        expect(searchCandies('Ma', 2)).toStrictEqual(expected_result)
    });

    it('returns skitties, skittles and starburst', () => {
        expected_result = [ 'Skitties', 'Skittles', 'Starburst' ]
        expect(searchCandies('S', 10)).toStrictEqual(expected_result)
    });


    it('returns skitties and skittles', () => {
        expected_result = [ 'Skitties', 'Skittles' ]
        expect(searchCandies('S', 4)).toStrictEqual(expected_result)
    });

    it('returns maltesers and mars when given in lowercase', () => {
        expected_result = [ 'Mars', 'Maltesers' ];
        expect(searchCandies('ma', 10)).toStrictEqual(expected_result);
    });





});



