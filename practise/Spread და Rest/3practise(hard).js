//?შექმენი ფუნქცია assignRole(...users), რომელიც Rest ოპერატორით მიიღებს ნებისმიერი რაოდენობის მომხმარებლის ობიექტს (მაგ: {name: "ანა"}, {name: "ნიკა"}). ფუნქციამ map და Spread ოპერატორების კომბინაციით უნდა დააბრუნოს ახალი მასივი, სადაც თითოეულ ობიექტს დამატებული ექნება თვისება role: "user".

function assignRole(...users) {
  return users.map((elm) => {
    return {
      ...elm,
      role: "user",
    };
  });
}

console.log(assignRole({ name: "ანა" }, { name: "ნიკა" }));


