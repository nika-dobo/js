//? გაქვს სტუდენტების მასივი students = [{name: "ანა", score: 85}, {name: "ნიკა", score: 92}, {name: "სალომე", score: 78}]. გამოიყენე reduce მეთოდი, რათა გამოთვალო ამ სტუდენტების ქულების საშუალო არითმეტიკული (ჯამი გაყოფილი სტუდენტების რაოდენობაზე).

const students = [
  { name: "ანა", score: 85 },
  { name: "ნიკა", score: 92 },
  { name: "სალომე", score: 78 },
  { name: "გიორგი", score: 100 },
  { name: "ლუკა", score: 90 },
];

const sum = students.reduce((sum, newNum) => {
  sum += newNum.score;
  return sum;
}, 0);

console.log(sum / students.length);
