// Import konfigurasi database
import db from "../config/database.js";

// Definisi class Patient untuk mengelola operasi database terkait tabel 'patients'
class Patient {
  // Method untuk mendapatkan semua data pasien
  static all() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients"; // Query untuk mengambil semua data
      db.query(sql, (err, results) => {
        if (err) reject(err); // Tangani error jika terjadi kesalahan saat eksekusi query
        resolve(results); // Resolusi promise dengan hasil query
      });
    });
  }

  // Method untuk menambahkan data pasien baru
  static create(data) {
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO patients SET ?"; // Query untuk insert data pasien
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

        // Resolusi promise dengan data pasien yang ditambahkan
        resolve({ id: results.insertId, ...data });
      });
    });
  }

  // Method untuk memperbarui data pasien berdasarkan ID
  static update(id, updatedData) {
    return new Promise((resolve, reject) => {
      const sql = "UPDATE patients SET ? WHERE id = ?"; // Query untuk update data pasien
      db.query(sql, [updatedData, id], (err, results) => {
        if (err) reject(err); // Tangani error jika terjadi kesalahan
        if (results.affectedRows === 0) reject(new Error("Patient not found")); // Validasi jika data tidak ditemukan
        resolve({ id, ...updatedData }); // Resolusi promise dengan data yang diperbarui
      });
    });
  }

  // Method untuk menghapus data pasien berdasarkan ID
  static destroy(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM patients WHERE id = ?"; // Query untuk menghapus data pasien
      db.query(sql, id, (err, results) => {
        if (err) reject(err); // Tangani error jika terjadi kesalahan
        if (results.affectedRows === 0) reject(new Error("Patient not found")); // Validasi jika data tidak ditemukan
        resolve({ message: `Patient with ID ${id} deleted successfully` }); // Resolusi promise dengan pesan sukses
      });
    });
  }

  // Method untuk mendapatkan data pasien berdasarkan ID
  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients WHERE id = ?"; // Query untuk mendapatkan data pasien tertentu
      db.query(sql, id, (err, results) => {
        if (err) reject(err); // Tangani error jika terjadi kesalahan
        if (results.length === 0) reject(new Error("Patient not found")); // Validasi jika data tidak ditemukan
        resolve(results[0]); // Resolusi promise dengan data pasien yang ditemukan
      });
    });
  }
}

// Ekspor class Patient untuk digunakan di file lain
export default Patient;
