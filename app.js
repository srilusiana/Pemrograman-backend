// import FruitController
var { index, store, update, destroy } = require("./FruitController.js");

// membuat fungsi main
var main = () => {
  console.log("data awal:");
  index();

  console.log("\nmenambahkan buat baru:");
  store("Nanas");

  console.log("\nmengubah buah yang sudah ada:");
  update(1, "Strawberry"); // Mengubah "Apple" menjadi "Strawberry"

  console.log("\nmenghapus buah:");
  destroy(0); // Menghapus "Banana"
};

main();
