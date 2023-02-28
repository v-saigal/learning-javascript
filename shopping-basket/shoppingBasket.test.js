const ShoppingBasket = require('./shoppingBasket')


describe('ShoppingBasket', () => {
    it('constructs', () => {
        const test_basket = new ShoppingBasket();
    });

    it('adds item', () =>{
        const testBasket = new ShoppingBasket();

        const fakeCandy = {
            getName: () => 'Maltesers',
            getPrice: () => 2
        }
        testBasket.addItem(fakeCandy)


        expect(testBasket.getCandyList()).toEqual([fakeCandy])

    });
    it('returns total price as 0 when empty', () => {
        const testBasket = new ShoppingBasket();


        expect(testBasket.getTotalPrice()).toBe(0);


    });

    it('returns total price with items added', () => {
        const testBasket = new ShoppingBasket();

        const fakeCandy = {
            getName: () => 'Maltesers',
            getPrice: () => 2
        };
        const anotherFakeCandy = {
            getName: () => 'Mars',
            getPrice: () => 3
        };

        testBasket.addItem(fakeCandy);
        testBasket.addItem(anotherFakeCandy);

        expect(testBasket.getTotalPrice()).toBe(5);


    });
    it('returns total price with items added', () => {
        const testBasket = new ShoppingBasket();

        const fakeCandy = {
            getName: () => 'Maltesers',
            getPrice: () => 2
        };
        const anotherFakeCandy = {
            getName: () => 'Mars',
            getPrice: () => 3
        };

        testBasket.addItem(fakeCandy);
        testBasket.addItem(anotherFakeCandy);
        testBasket.applyDiscount(1)
        expect(testBasket.getTotalPrice()).toBe(4);


    });



});


