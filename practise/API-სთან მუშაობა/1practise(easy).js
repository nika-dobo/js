//? დაწერე async ფუნქცია, რომელიც წამოიღებს ერთ კონკრეტულ მომხმარებელს https://jsonplaceholder.typicode.com/users/2 მისამართიდან და კონსოლში დაბეჭდავს მხოლოდ მის ელ-ფოსტას (email). გამოიყენე try/catch შეცდომების დასაჭერად.

async function getUser() {
  const obj = await fetch("https://jsonplaceholder.typicode.com/users/2");
  const mainObj = await obj.json();
  console.log(mainObj.email);
}

getUser();
