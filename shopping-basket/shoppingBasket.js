class ShoppingBasket{
    constructor(){
        this.candyList = []
        this.discount = 0;
    }

    getCandyList(){
        return this.candyList;
    }

    addItem(candy){
        this.candyList.push(candy);
    }

    applyDiscount(discount) {
        this.discount = discount;
      }

    getTotalPrice(){
        let totalPrice = 0;
        this.candyList.forEach(candy => {totalPrice += candy.getPrice()})
        return totalPrice - this.discount;;
    }
}



module.exports = ShoppingBasket;
