//? async And await

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
