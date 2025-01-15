// Import StudentController menggunakan sintaks ES6 untuk menghubungkan dengan logika bisnis
import StudentController from '../controllers/PatientController.js';

// Import Express untuk mendefinisikan router
import express from 'express';
const router = express.Router(); // Membuat instance router Express

// Definisikan route default
router.get("/", (req, res) => {
  res.send("Hello Express"); // Mengembalikan respons sederhana saat rute root diakses
});

// Rute kedua untuk root, ini redundant karena menduplikasi rute sebelumnya
router.get("/", (req, res) => res.send("Hello Express!"));

// Definisikan rute untuk mengelola data pasien
router.get("/patients", StudentController.index); // Rute untuk mendapatkan semua data pasien
router.get("/patients/:id", StudentController.show); // Rute untuk mendapatkan data pasien berdasarkan ID
router.post("/patients", StudentController.store); // Rute untuk menambahkan data pasien baru
router.put("/patients/:id", StudentController.update); // Rute untuk memperbarui data pasien berdasarkan ID
router.delete("/patients/:id", StudentController.destroy); // Rute untuk menghapus data pasien berdasarkan ID

// Ekspor router untuk digunakan dalam file lain
export default router;
