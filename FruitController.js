// import data fruits
var fruits = require("./fruit.js");

// membuat fungsi index
const index = () => {
  for (const fruit of fruits) {
    console.log(fruit);
  }
};

// membuat fungsi store
const store = (name) => {
  fruits.push(name);
  index();
};

// membuat fungsi update
const update = (indexToUpdate, newName) => {
  if (indexToUpdate >= 0 && indexToUpdate < fruits.length) {
    fruits[indexToUpdate] = newName;
    console.log(`Data pada index ke ${indexToUpdate} sudah di update menjadi ${newName}.`);
    index();
  } else {
    console.log("Invalid index.");
  }
};

// membuat fungsi destroy
const destroy = (indexToDelete) => {
  if (indexToDelete >= 0 && indexToDelete < fruits.length) {
    const deletedFruit = fruits.splice(indexToDelete, 1); // Menghapus elemen dari array
    console.log(`Data ${deletedFruit} telah dihapus.`);
    index();
  } else {
    console.log("Invalid index.");
  }
};

// export semua method
module.exports = { index, store, update, destroy };
