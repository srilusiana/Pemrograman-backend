// Import konfigurasi database
import db from "../config/database.js";

// Definisi class Student untuk mengelola operasi database terkait tabel 'students'
class Student {
  // Method untuk mendapatkan semua data siswa
  static all() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students"; // Query untuk mengambil semua data
      db.query(sql, (err, results) => {
        if (err) reject(err); // Tangani error jika terjadi kesalahan saat eksekusi query
        resolve(results); // Resolusi promise dengan hasil query
      });
    });
  }

  // Method untuk menambahkan data siswa baru
  static create(data) {
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO students SET ?"; // Query untuk insert data siswa
      db.query(sql, data, (err, results) => {
        if (err) {
          reject(err); // Tangani error jika terjadi kesalahan
          return; // Hentikan eksekusi jika error
        }

        // Validasi hasil insert untuk memastikan insertId tersedia
        if (!results || !results.insertId) {
          reject(new Error("Insert failed or insertId is missing"));
          return;
        }

        // Resolusi promise dengan data siswa yang ditambahkan
        resolve({ id: results.insertId, ...data });
      });
    });
  }

  // Method untuk memperbarui data siswa berdasarkan ID
  static update(id, updatedData) {
    return new Promise((resolve, reject) => {
      const sql = "UPDATE students SET ? WHERE id = ?"; // Query untuk update data siswa
      db.query(sql, [updatedData, id], (err, results) => {
        if (err) reject(err); // Tangani error jika terjadi kesalahan
        if (results.affectedRows === 0) reject(new Error("Student not found")); // Validasi jika data tidak ditemukan
        resolve({ id, ...updatedData }); // Resolusi promise dengan data yang diperbarui
      });
    });
  }

  // Method untuk menghapus data siswa berdasarkan ID
  static destroy(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM students WHERE id = ?"; // Query untuk menghapus data siswa
      db.query(sql, id, (err, results) => {
        if (err) reject(err); // Tangani error jika terjadi kesalahan
        if (results.affectedRows === 0) reject(new Error("Student not found")); // Validasi jika data tidak ditemukan
        resolve({ message: `Student with ID ${id} deleted successfully` }); // Resolusi promise dengan pesan sukses
      });
    });
  }

  // Method untuk mendapatkan data siswa berdasarkan ID
  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?"; // Query untuk mendapatkan data siswa tertentu
      db.query(sql, id, (err, results) => {
        if (err) reject(err); // Tangani error jika terjadi kesalahan
        if (results.length === 0) reject(new Error("Student not found")); // Validasi jika data tidak ditemukan
        resolve(results[0]); // Resolusi promise dengan data siswa yang ditemukan
      });
    });
  }
}

// Ekspor class Student untuk digunakan di file lain
export default Student;
