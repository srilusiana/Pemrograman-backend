// Mengimpor modul mysql dan dotenv
import mysql from "mysql"; // Digunakan untuk menghubungkan aplikasi dengan MySQL database
import dotenv from "dotenv"; // Digunakan untuk memuat variabel lingkungan dari file .env

// Memuat variabel lingkungan dari file .env
dotenv.config(); // Memuat file .env yang berisi konfigurasi database dan informasi lainnya

// Membuat koneksi ke database MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST, // Host database, biasanya localhost atau alamat IP server
  user: process.env.DB_USERNAME, // Nama pengguna database
  password: process.env.DB_PASSWORD, // Kata sandi untuk pengguna database
  database: process.env.DB_DATABASE, // Nama database yang akan digunakan
});

// Menghubungkan ke database MySQL
db.connect((err) => { 
  if (err) { // Jika terjadi error dalam menghubungkan
    console.error("Database connection failed: " + err.stack); // Menampilkan pesan error pada console
    return; // Jika terjadi error, hentikan eksekusi
  }
  console.log("Connected to database"); // Jika berhasil, tampilkan pesan bahwa koneksi berhasil
});

// Mengekspor koneksi database sebagai default untuk digunakan di file lain
export default db; // Menggunakan export default agar dapat diimport di file lain dengan mudah
