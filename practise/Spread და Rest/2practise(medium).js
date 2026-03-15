//?გვაქვს ობიექტი product = { id: 1, name: "ტელეფონი", price: 1000 }. შექმენი ახალი ობიექტი updatedProduct, სადაც Spread ოპერატორით დააკოპირებ ძველ მონაცემებს, შეცვლი price-ს 800-ით და დაამატებ სრულიად ახალ თვისებას: inStock: true.

let product = { id: 1, name: "ტელეფონი", price: 1000 };

let updatedProduct = { ...product, price: 800, inStock: true };
console.log(updatedProduct);
