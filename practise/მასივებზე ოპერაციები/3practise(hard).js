//? გაქვს პროდუქტების მასივი items = [{name: "ვაშლი", type: "ხილი"}, {name: "სტაფილო", type: "ბოსტნეული"}, {name: "ბანანი", type: "ხილი"}]. გამოიყენე reduce, რათა შექმნა ახალი ობიექტი, რომელიც დააჯგუფებს პროდუქტებს ტიპების მიხედვით.

//? მოსალოდნელი შედეგი: { "ხილი": ["ვაშლი", "ბანანი"], "ბოსტნეული": ["სტაფილო"] }.

const items = [
  { name: "ვაშლი", type: "ხილი" },
  { name: "სტაფილო", type: "ბოსტნეული" },
  { name: "ბანანი", type: "ხილი" },
];

const groupedItems = items.reduce((acc, item) => {
  if (!acc[item.type]) {
    acc[item.type] = [];
  }
  acc[item.type].push(item.name);
  return acc;
}, {});

console.log(groupedItems);

