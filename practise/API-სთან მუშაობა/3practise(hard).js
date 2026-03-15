//? მიჯაჭვული მოთხოვნები. დაწერე async ფუნქცია: ჯერ წამოიღე მომხმარებელი https://jsonplaceholder.typicode.com/users/3 ლინკიდან. ამოიღე მისი id. შემდეგ, ამავე ფუნქციაში გააკეთე მეორე მოთხოვნა https://jsonplaceholder.typicode.com/posts?userId=3 (აქ 3-იანის ნაცვლად გამოიყენე პირველი მოთხოვნიდან მიღებული id), რათა წამოიღო ამ მომხმარებლის პოსტები. კონსოლში დაბეჭდე მომხმარებლის სახელი და მისი პირველი პოსტის სათაური (title).

async function takeUserAndPosts() {
  const obj = await fetch("https://jsonplaceholder.typicode.com/users/3");
  const mainObj = await obj.json();
  const id = mainObj.id;
  const obj2 = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  const mainObj2 = await obj2.json();
  console.log(mainObj.name, mainObj2[0].title);
}

takeUserAndPosts();