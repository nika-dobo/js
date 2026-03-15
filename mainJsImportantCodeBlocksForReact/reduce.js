const numbers = [10, 20, 30, 40];

const totalSum = numbers.reduce((total, currentNumber) => {
  return total + currentNumber;
}, 0); // 0 არის საწყისი მნიშვნელობა

console.log(totalSum); // დაიბეჭდება: 100

// ----------

const numbers1 = [10, 20, 30, 40];

const totalSum1 = numbers1.reduce((total, currentNumber) => {
  return total + currentNumber;
}, 0); // 0 არის საწყისი მნიშვნელობა

console.log(totalSum1); // დაიბეჭდება: 100

//? ნაბიჯი 1: total არის 0 (რადგან მივუთითეთ), currentNumber არის 10. ვუმატებთ ერთმანეთს. ვინახავთ 10-ს.

//? ნაბიჯი 2: total გახდა 10. currentNumber არის 20. ჯამი გახდა 30. ვინახავთ 30-ს.

//? ნაბიჯი 3: total არის 30. ვუმატებთ 30-ს. ვინახავთ 60-ს.

//? ნაბიჯი 4: total არის 60. ვუმატებთ 40-ს. საბოლოო პასუხია 100.

// ----------

const shoppingCart = [
  { item: "ლეპტოპი", price: 1500 },
  { item: "მაუსი", price: 50 },
  { item: "კლავიატურა", price: 100 },
];

const cartTotal = shoppingCart.reduce((acc, product) => {
  return acc + product.price;
}, 0);

console.log(cartTotal); // დაიბეჭდება: 1650
