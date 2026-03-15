//? გაქვს მასივი numbers = [15, 55, 20, 80, 10]. filter მეთოდის გამოყენებით შექმენი ახალი მასივი, რომელშიც მხოლოდ 50-ზე მეტი რიცხვები იქნება შენახული.

let numbers = [15, 55, 20, 80, 10];

let newArr = numbers.filter(function (num) {
  return num >= 50;
  // ან
  // if (num >= 50){
  //   return num
  // }
});

console.log(newArr);
