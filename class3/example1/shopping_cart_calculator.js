/*
1. Takes a list of item prices.
2. Sums up the total price.
3. Applies discounts based on the total amount:
    a. If the total price is over $100, apply a 10% discount.
    b. If the total price is between $50 and $100, apply a 5% discount.
    c. If the total price is under $50, no discount is applied.
4. Prints the total price, discount, and final amount to pay.
*/

const shoppingCart = [10, 60];
let totalPrice = 0; // the price before the discount
let discount = 0; // the discount price
let finalPrice = 0; // the price with the discount

for (let i = 0; i < shoppingCart.length; i++) {
    totalPrice = totalPrice + shoppingCart[i];
}



if (totalPrice > 100) {
    discount = totalPrice * .1;
} else if (totalPrice > 50 && totalPrice < 100) {
    discount = totalPrice * .05;
} else {
    console.log('no discount applied')
}

finalPrice = totalPrice - discount;


console.log('the total price is', `$${totalPrice}`);
console.log('discount is', `$${discount}`);
console.log('final amount', `$${finalPrice}`);