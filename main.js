// ასე იწერება კომენტარი ჯს-ში
/*
ასე იწერება მრავალწერტილი კომენტარი ჯს-ში
*/

//document.write("hello world")// ეს არის ჯს-ის მეთოდი რომელიც გვაძლევს საშუალებას ვწეროთ html-ში მაგრამ არ ვიყენებთ
//console.log("hello world")// ეს არის მეთოდი რომელიც გვაძლევს საშუალებას ვწეროთ კონსოლში და ვხედავთ თუ როგორ მუშაობს ჩვენი კოდი
//console.info("hello world")// ესეც იგივეა როგორც console.log
//console.error("hello world")// ესეც იგივეა როგორც console.log მაგრამ ეს არის შეცდომის შემთხვევაში
//console.warn("hello world")// ესეც იგივეა როგორც console.error მაგრამ ეს არის გაფრთხილება

//მთავარი ნაწილი

//ცვლადები
console.log("ცვლადები");

//var არის ცვლადის შექმნა
var num;
num = 5; // ეს არის ცვლადის მნიშვნელობის მინიჭება
num = 10; // ეს არის ცვლადის მნიშვნელობის შეცვლა
var number = 5.5; // ეს არის ცვლადის შექმნა და მნიშვნელობის მინიჭება ერთ ხაზში
var name = "hello world";
var bool = true; // ეს არის ბულევი ცვლადი რომელიც შეიძლება იყოს true ან false
bool = "hi";
console.log("variable: " + num); // ეს არის მეთოდი რომელიც გვაძლევს საშუალებას ვწეროთ კონსოლში და ვხედავთ თუ როგორ მუშაობს ჩვენი კოდი

const num2 = 5; // ეს არის ცვლადის შექმნა და მნიშვნელობის მინიჭება ერთ ხაზში მაგრამ ეს არის მუდმივი ცვლადი და მისი მნიშვნელობა არ იცვლება
console.log("variable: " + num2);

console.log(" ");

//მატემატიკური ოპერაციები
console.log("მათემატიკური ოპერაციები");

var num1 = 5;
var num3 = 10;

//ვარიანტი 1
console.log("ვარიანტი 1");

var res = num1 - num3; // ეს არის მათემატიკური ოპერაცია რომელიც გვაძლევს შედეგს

console.log("sum: " + res); // ეს არის მეთოდი რომელიც გვაძლევს საშუალებას ვწეროთ კონსოლში და ვხედავთ თუ როგორ მუშაობს ჩვენი კოდი

//ვარიანტი 2
console.log("ვარიანტი 2");

console.log("sum: " + (num1 - num3));
console.log("sum: " + (num1 + num3));
console.log("sum: " + num1 * num3);
console.log("sum: " + num1 / num3);
console.log("sum: " + (num1 % num3));

//ვარიანტი 3
console.log("ვარიანტი 3");

var num4 = 5;
num4 += 5; // ეს არის მათემატიკური ოპერაცია რომელიც გვაძლევს შედეგს

//ვარიანტი 4
console.log("ვარიანტი 4");

var num5 = 5;
num5++; // ეს არის მათემატიკური ოპერაცია რომელიც გვაძლევს შედეგს და უმატებს 1

var str = Number("5"); // ეს არის სტრინგი რომელიც უნდა გადაიყვანოს ნომერში ანუ integer-ში
var str2 = Number("10");
var num6 = 5;

console.log("sum: " + (str + str2 + num6)); // ეს არის მათემატიკური ოპერაცია რომელიც გვაძლევს შედეგს და აერთიანებს სტრინგებს ანუ კომკატინაცია

Math.log("math: " + Math.PI); // პოულობს პი-ს მნიშვნელობას
console.log("math: " + Math.min(4, 5, 6, 4, 36, 36, 2, 7, 1, 7, 4, 0)); // პოულობს უმწირეს მნიშვნელობას
console.log("math: " + Math.max(4, 5, 6, 4, 36, 36, 2, 7, 1, 7, 4, 0)); // პოულობს უმაღლეს მნიშვნელობას

console.log(" ");
// პირობითი ოპერაციები
console.log("პირობითი ოპერაციებ");

var num7 = 5;
var ishashous = true;

if (num7 > 5) {
  // ეს არის პირობითი ოპერაცია რომელიც გვაძლევს შედეგს თუ პირობა შესრულდა
  console.log("true"); // ეს არის პირობითი ოპერაცია რომელიც გვაძლევს შედეგს თუ პირობა შესრულდა
} else if (num7 == 5) {
  // ეს არის პირობითი ოპერაცია რომელიც გვაძლევს შედეგს თუ პირობა შესრულდა

  console.log(5); // ეს არის პირობითი ოპერაცია რომელიც გვაძლევს შედეგს თუ პირობა შესრულდა
} else {
  console.log("false"); // ეს არის პირობითი ოპერაცია რომელიც გვაძლევს შედეგს თუ პირობა არ შესრულდა
}

console.log(" ");
// or == ||
// and == &&
console.log("or = ||  and = &&");

// ishashous = true იგივე რაც ishashous

if (num7 > 5 || ishashous == true) {
  // ეს არის პირობითი ოპერაცია რომელიც გვაძლევს შედეგს თუ პირობა შესრულდა
  console.log("true"); // ეს არის პირობითი ოპერაცია რომელიც გვაძლევს შედეგს თუ პირობა შესრულდა
}

if (num7 == 5 && ishashous == true) {
  // ეს არის პირობითი ოპერაცია რომელიც გვაძლევს შედეგს თუ პირობა შესრულდა
  console.log(5); // ეს არის პირობითი ოპერაცია რომელიც გვაძლევს შედეგს თუ პირობა შესრულდა
}

console.log(" ");

//switch - case

console.log("switch - case");
var num8 = 5;

switch (num8) {
  case 5: // იგივე if. არ შეიძლება მათემატიკური ოპერაცია იყოს
    console.log("5"); // ეს არის პირობითი ოპერაცია რომელიც გვაძლევს შედეგს თუ პირობა შესრულდა
    break; // ეს არის პირობითი ოპერაცია რომელიც გვაძლევს შედეგს თუ პირობა შესრულდა
  case 6:
    console.log("6");
    break;
  case 7:
    console.log("7");
    break;
  default: // იგივე else
    console.log("default");
    break; // ეს არ არის აუცილებელი
}

console.log(" ");

// მონაცემთა ნაკრები

console.log("მონაცემთა ნაკრები");

var arr = [1, 2, 3, 4, 5, "str", true]; // ეს არის მასივი რომელიც შეიცავს მონაცემებს list-ის სახით
arr[2] = 10; // ეს არის მასივი რომელიც შეიცავს მონაცემებს list-ის სახით და შეცვლის მასივის მნიშვნელობას
console.log(arr); //გამოიტანს მაისივის მნიშვნელობებს
console.log(arr.length); // ითვლის მასივის სიგრძეს

//ინდექსაცია

console.log(arr[0]); // 1
console.log(arr[6]); // 2

//მრავალგანზომილებიანი მასივები

var arr2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // ეს არის მრავალგანზომილებიანი მასივი რომელიც შეიცავს მონაცემებს list-ის სახით
arr2[2][0] = 10; // ეს არის მრავალგანზომილებიანი მასივი რომელიც შეიცავს მონაცემებს list-ის სახით და შეცვლის მასივის მნიშვნელობას
console.log(arr2[0][1]);

console.log(" ");

//ციკლები
//არის 3 ტიპის ციკლი for, while, Do while

console.log("ციკლები");

// for

console.log("for");

for (var i = 0; i < 10; i++) {
  //პირველი მიშვლენობა შექვმენით ცვლადი და მივანიჟეთ მნიშვლელობა. მიშვნელობა არ შეიძლება იყოს str ან bool. მეორე მიშვნელობა სამენ ეს მიშვნელობა იქნება true მაქამდე იმუშავებს ციკლი. მესამე მიშვნელობა როგორ უნდა შეიცვალოს i
  console.log(i);
}

console.log(" ");

// while

console.log("while");

//ვაილში ჯერ უნდა შევქმენთ ცვლადი შემდეგ უნდა ეს ცვლადი გამოვიყენოთ თვითონ while ციკლში და while ციკლში მხოლოდ პირობას ვაძლევთ და თვითონ ციკლში ვწერთ როგორ შეიცვლება ცვლადი

var j = 1000;

while (j >= 100) {
  console.log(j);
  j -= 100;
}

//var ishashous = true
// while(ishashous){//უსასრულო ციკლი

// }

console.log(" ");

// Do while

console.log("Do while");

//იგივე while ციკლი მაგრამ თუ შემოწმება არასწორად დავწერეთ 1 იტერაციას მაინც მოახდენს~

var x = 100;

do {
  console.log(x);
} while (x < 50);

console.log(" ");

var y = 0;
do {
  //აქ იწერება რას გააკეთებს ეს ციკლი
  console.log(y);
  y++;
} while (y < 10);

console.log(" ");

// ციკლების ოპერატორები

console.log("ციკლების ოპერატორები");

console.log("პირველი ოპერატორი(break)");

for (var i = 10; i <= 20; i += 2) {
  if (i > 15) {
    break; //ციკლიდან გამოსვლა
  }
  console.log(i);
}

console.log(" ");

console.log("მეორე ოპერატორი(continue)");

for (var i = 10; i <= 20; i++) {
  if (i % 2 == 0) {
    continue; //რამე იტერაციის გამოტოვება
  }
  console.log(i);
}

// ციკლები და მასივები(list)

console.log();

console.log("ციკლები და მასივები(list)");

var arr = [54, 123, 63, 134, "hi", true, 45, 34, 62, "hello world"];

for (i = 0; i < arr.length; i++) {
  console.log("element: " + (i + 1) + ": " + arr[i]);
}

//? --------------------------------------------------------------------------------------------
//! --------------------------------------------------------------------------------------------
//? --------------------------------------------------------------------------------------------
//! --------------------------------------------------------------------------------------------
//? --------------------------------------------------------------------------------------------
//! --------------------------------------------------------------------------------------------

let count = 0;

function onClickButton(element) {
  count++;
  console.log(count);
  element.style.backgroundColor = "red";
}

// ----------------------------------------------

// setInterval(); // გაუშვებს უამრავჯერ რაგაც დროსი განმავლობაში
// setTimeout(); // 1 გაუშვენს რაღაც დროის განმავლობაში

// ----------------------------------------------

class Person {
  constructor(name, age, heppiness) {
    this.name = name;
    this.age = age;
    this.heppiness = heppiness;
  }

  info() {
    console.log(this.name + " " + this.age + " " + this.heppiness);
  }
}

let alex = new Person("Alex", 25, true);
console.log(alex);
console.log(alex.name);
console.log(alex.age);
console.log(alex.heppiness);

alex.heppiness = false;
console.log(alex.heppiness);

alex.info();

let bob = new Person("Bob", 30, false);
console.log(bob);
console.log(bob.name);
console.log(bob.age);
console.log(bob.heppiness);

bob.info();

// ----------------------------------------------

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

// ----------------------------------------------

console.log("----------------------------------");

async function greet() {
  return "გამარჯობა!";
}

// რადგან async გვიწერია, ფუნქცია აბრუნებს არა პირდაპირ ტექსტს, არამედ Promise-ს.
// შესაბამისად, მისი შედეგის მისაღებად გვჭირდება .then() ან await.
greet().then((result) => console.log(result)); // result ინახება greet()ან ფუნქციის მიერ დაბრუნებული მონაცემი ამ შემთხვევაში გამარჯობა!

// ----------

// 1. ვქმნით ასინქრონულ ფუნქციას
async function getUserData() {
  console.log("1. მონაცემების მოთხოვნა დაიწყო...");

  // 2. ველოდებით სერვერის პასუხს (კოდი აქ "პაუზდება" სანამ პასუხი არ მოვა)
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1"); //ობიქეტს მივწვდით

  // 3. ველოდებით პასუხის JSON ფორმატში გადაყვანას
  const user = await response.json(); // ზედა ობიექტი აქ შევინახეთ

  // 4. ვიყენებთ მიღებულ მონაცემებს
  console.log("2. მონაცემები მივიღეთ:", user.name); // და ობიექტდან მონაცემი გამოვიტანეთ
}

// ფუნქციის გამოძახება
//! getUserData();
//! console.log("3. ეს დაიბეჭდება მაშინვე, სანამ სერვერიდან პასუხი მოვა!");

// ----------------------------------------------

// spred operator

const fruits = ["ვაშლი", "ბანანი"];
const berries = ["მარწყვი", "მოცვი"];

// ვქმნით ახალ მასივს და შიგნით "ვშლით" ძველი მასივების ელემენტებს
const allFruits = [...fruits, ...berries, "ალუბალი"];

console.log(allFruits);
// დაიბეჭდება: ["ვაშლი", "ბანანი", "მარწყვი", "მოცვი", "ალუბალი"]

// ----------

const user = { name: "გიორგი", age: 25 };

// ვქმნით ახალ ობიექტს, სადაც გადმოგვაქვს ძველის მონაცემები და ვამატებთ ახალს
const fullProfile = { ...user, city: "თბილისი" };

console.log(fullProfile);
// დაიბეჭდება: { name: "გიორგი", age: 25, city: "თბილისი" }

// ----------------------------------------------

// rest operator

// ...numbers აქ აგროვებს ყველა გადმოწოდებულ რიცხვს ერთ მასივად
function calculateSum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(calculateSum(10, 20)); // 30
console.log(calculateSum(1, 2, 3, 4, 5)); // 15

// ----------

function createUser(name, age, ...skills) {
  return {
    name,
    age,
    skills,
  };
}

const user2 = createUser("გიორგი", 25, "HTML", "CSS", "JS");
console.log(user2);
// გამოიტანა: { name: "გიორგი", age: 25, skills: ["HTML", "CSS", "JS"] }

// ----------------------------------------------

// this

//? 1
//? როდესაც ფუნქცია არის ობიექტის შიგნით (ანუ არის მისი "მეთოდი") და მას ამ ობიექტიდან ვიძახებთ, this უთითებს თვითონ ამ ობიექტზე.

const user3 = {
  name: "გიორგი",
  age: 25,
  sayHello: function () {
    // აქ this ნიშნავს თვითონ user ობიექტს
    console.log(`გამარჯობა, მე ვარ ${this.name} და ვარ ${this.age} წლის.`);
  },
};

user3.sayHello(); // დაიბეჭდება: "გამარჯობა, მე ვარ გიორგი და ვარ 25 წლის."

//? 2
//? თუ ფუნქციას უბრალოდ, დამოუკიდებლად ვიძახებთ (არანაირი ობიექტიდან), this უთითებს გლობალურ ობიექტზე (ბრაუზერში ეს არის window ობიექტი).

function testThis() {
  console.log(this);
}

testThis(); // ბრაუზერში დაიბეჭდება Window ობიექტი მთელი თავისი ფუნქციებით

//? 3
//? როდესაც ვიყენებთ this-ს მოვლენის (მაგალითად, ღილაკზე დაკლიკების) დამმუშავებელ ფუნქციაში, ის უთითებს იმ კონკრეტულ HTML ელემენტზე, რომელმაც ეს მოვლენა გამოიწვია.

const button = document.querySelector("button");

button.addEventListener("click", function () {
  // აქ this არის თვითონ ეს ღილაკი (<button>)
  this.style.backgroundColor = "red"; // დაკლიკებისას ღილაკი გაწითლდება
});

//? 4
//? ეს ძალიან მნიშვნელოვანია: Arrow ფუნქციებს (() => {}) არ აქვთ საკუთარი this. ისინი this-ს "ისესხებენ" იმ გარემოდან (მშობლიდან), სადაც ეს ფუნქცია შეიქმნა.

//! მაგალითი (შეცდომა, რომელსაც ხშირად უშვებენ):

const user4 = {
  name: "ანა",
  sayHello: () => {
    // Arrow ფუნქციაა, ამიტომ this არ არის user ობიექტი.
    // ის იღებს this-ს გარედან (ანუ window-დან).
    console.log(`გამარჯობა, ${this.name}`);
  },
};

user4.sayHello(); // დაიბეჭდება: "გამარჯობა, undefined"

// ----------------------------------------------

//? 1) querySelector
//? ეს მეთოდი ეძებს HTML დოკუმენტში და აბრუნებს მხოლოდ პირველ ელემენტს, რომელიც ემთხვევა შენს მიერ მითითებულ სელექტორს. თუ გვერდზე 10 ერთნაირი ღილაკია, ის დაიჭერს მხოლოდ პირველს და დანარჩენებს დააიგნორებს.

// პოულობს პირველ <h1> ტეგს
const heading = document.querySelector("h1");

// პოულობს პირველ ელემენტს, რომელსაც აქვს კლასი "btn"
const firstButton = document.querySelector(".btn");

// პოულობს კონკრეტულ ელემენტს ID-ის მიხედვით
const mainTitle = document.querySelector("#main-title");

// შეგვიძლია რთული CSS სელექტორების დაწერაც:
// იპოვის <input> ტეგს, რომლის type არის "text"
const inputField = document.querySelector('input[type="text"]');

//? 2) querySelectorAll
//? ეს მეთოდი პოულობს და აბრუნებს ყველა ელემენტს, რომელიც ემთხვევა მითითებულ სელექტორს.

// პოულობს ყველა <p> (პარაგრაფის) ტეგს დოკუმენტში
const allParagraphs = document.querySelectorAll("p");

// რადგან ეს არის სია, ვიყენებთ forEach ციკლს თითოეულთან სამუშაოდ
allParagraphs.forEach(function (paragraph) {
  paragraph.style.color = "blue"; // სათითაოდ ყველა პარაგრაფს გაალურჯებს
});

// ----------------------------------------------

//? classList.toggle()
//? როგორც სახელი გვკარნახობს, ეს მეთოდი მუშაობს როგორც შუქის ჩამრთველი ღილაკი. შენ მას გადასცემ კლასის სახელს და ის ასრულებს ორ მოქმედებას:

//! თუ ელემენტს ეს კლასი უკვე აქვს: აშორებს (შლის) მას.

//! თუ ელემენტს ეს კლასი არ აქვს: ამატებს მას.

//? ეს იდეალურია ისეთი ფუნქციებისთვის, როგორიცაა მენიუს გამოჩენა/დამალვა (ჩამოშლა), ან საიტზე "Dark Mode"-ის (ბნელი რეჟიმის) ჩართვა.

//* <button id="theme-btn">ფერის შეცვლა</button>
//* <div class="box">ეს არის ტექსტი</div>

/* CSS-ში გვაქვს სპეციალური კლასი ბნელი რეჟიმისთვის */
//* .dark-theme {
//*   background-color: black;
//*   color: white;
//* }

const button2 = document.querySelector("#theme-btn");
const box2 = document.querySelector(".box");

// button2.addEventListener("click", function () {
//   // ყოველ დაკლიკებაზე 'dark-theme' კლასი ან დაემატება, ან წაიშლება
//   box2.classList.toggle("dark-theme");
// });

// ----------------------------------------------

//? 1) getAttribute(სახელი)
//? ეს მეთოდი გვეუბნება, თუ რა მნიშვნელობა უწერია კონკრეტულ მახასიათებელს.

//* <a id="my-link" href="https://google.com">გადასვლა საიტზე</a>

const link = document.querySelector("#my-link");

// ვიგებთ, სად მივყავართ ამ ბმულს
//const url = link.getAttribute("href");
//console.log(url); // დაიბეჭდება: "https://google.com"

//? 2) setAttribute(სახელი, ახალი_მნიშვნელობა)
//? ეს მეთოდი პოულობს მახასიათებელს და უცვლის მას მნიშვნელობას. თუ ასეთი მახასიათებელი საერთოდ არ არსებობს, ის ახალს შექმნის.

//* <img id="profile-pic" src="old-photo.jpg" alt="ძველი სურათი">
//* <button id="change-pic">სურათის განახლება</button>

const image = document.querySelector("#profile-pic");
const btn = document.querySelector("#change-pic");

// btn.addEventListener("click", function () {
//   // ვცვლით 'src' მახასიათებელს ახალი სურათის ლინკით
//   image.setAttribute("src", "new-photo.jpg");

//   // ვცვლით 'alt' ტექსტსაც
//   image.setAttribute("alt", "ახალი სურათი");
// });

// ----------------------------------------------
//? api

// ვქმნით ასინქრონულ ფუნქციას
async function getUserData() {
  try {
    // 1. fetch-ით ვაგზავნით მოთხოვნას სერვერზე და ველოდებით (await) პასუხს
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );

    // 2. მოსულ პასუხს ვაქცევთ JSON ფორმატში, რათა JS-მა წაიკითხოს
    const data = await response.json();

    // 3. ვიყენებთ მონაცემებს (მაგალითად, ვბეჭდავთ კონსოლში მომხმარებლის სახელს)
    console.log("მომხმარებლის სახელია:", data.name);
  } catch (error) {
    // 4. თუ რამე შეცდომა მოხდა (მაგ: ინტერნეტი გაითიშა), აქ ვიჭერთ
    console.error("შეცდომა ინფორმაციის წამოღებისას:", error);
  }
}

// ვიძახებთ ფუნქციას
getUserData();
