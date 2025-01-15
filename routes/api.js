// Import StudentController menggunakan sintaks ES6 untuk menghubungkan dengan logika bisnis
import PatientController from '../controllers/PatientController.js';

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
router.get("/patients", PatientController.index); // Rute untuk mendapatkan semua data pasien
router.get("/patients/:id", PatientController.show); // Rute untuk mendapatkan data pasien berdasarkan ID
router.post("/patients", PatientController.store); // Rute untuk menambahkan data pasien baru
router.put("/patients/:id", PatientController.update); // Rute untuk memperbarui data pasien berdasarkan ID
router.delete("/patients/:id", PatientController.destroy); // Rute untuk menghapus data pasien berdasarkan ID
// Rute untuk mencari pasien berdasarkan keyword
router.get("/patients/search", PatientController.search); 

// Rute untuk mendapatkan pasien berdasarkan status
router.get("/patients/status/:status", PatientController.getByStatus); 

// Ekspor router untuk digunakan dalam file lain
export default router;
