// Import StudentController menggunakan sintaks ES6 untuk menghubungkan dengan logika bisnis
import StudentController from '../controllers/StudentController.js';

// Import Express untuk mendefinisikan router
import express from 'express';
const router = express.Router(); // Membuat instance router Express

// Definisikan route default
router.get("/", (req, res) => {
  res.send("Hello Express"); // Mengembalikan respons sederhana saat rute root diakses
});

// Rute kedua untuk root, ini redundant karena menduplikasi rute sebelumnya
router.get("/", (req, res) => res.send("Hello Express!"));

// Definisikan rute untuk mengelola data siswa
router.get("/students", StudentController.index); // Rute untuk mendapatkan semua data siswa
router.get("/students/:id", StudentController.show); // Rute untuk mendapatkan data siswa berdasarkan ID
router.post("/students", StudentController.store); // Rute untuk menambahkan data siswa baru
router.put("/students/:id", StudentController.update); // Rute untuk memperbarui data siswa berdasarkan ID
router.delete("/students/:id", StudentController.destroy); // Rute untuk menghapus data siswa berdasarkan ID

// Ekspor router untuk digunakan dalam file lain
export default router;
