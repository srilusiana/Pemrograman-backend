// Menggunakan sintaks ES6 untuk import express dan router
import express from 'express';
import router from './routes/api.js'; 

console.log("Router path:", './routes/api.js');

// Membuat object express
const app = express();

// Menggunakan middleware
app.use(express.json());  // Parsing JSON request body
app.use(express.urlencoded({ extended: true })); 

// Menggunakan routing (router)
app.use(router);

// Mendefinisikan port dan menjalankan server
app.listen(3000, () => {
    console.log("Server berjalan di port 3000");
  });
  
  
