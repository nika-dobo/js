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
