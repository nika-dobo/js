//? დაწერე ფუნქცია, რომელიც https://jsonplaceholder.typicode.com/users მისამართიდან წამოიღებს მომხმარებლების სრულ სიას (მასივს). მონაცემების მიღების შემდეგ, გამოიყენე forEach ან map, რათა კონსოლში სათითაოდ დაბეჭდო თითოეულის name (სახელი) და company.name (კომპანიის სახელი).

async function takeUsers() {
  const obj = await fetch("https://jsonplaceholder.typicode.com/users");
  const mainObj = await obj.json();
  mainObj.forEach((elm) => {
    console.log(`name: ${elm.name},\ncompany: ${elm.company.name}`);
  });
}

takeUsers();
