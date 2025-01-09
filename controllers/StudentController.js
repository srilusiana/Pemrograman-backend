import Student from "../models/Student.js"; // Import model Student untuk operasi database

// Definisi class StudentController yang berisi metode untuk menangani permintaan terkait data siswa
class StudentController {
  // Metode untuk mendapatkan semua data siswa
  async index(req, res) {
    try {
      const students = await Student.all(); // Mengambil semua data siswa dari model
      res.json(students); // Mengembalikan data siswa dalam format JSON
    } catch (error) {
      res.status(500).json({ message: error.message }); // Menangani error dan mengembalikan status 500
    }
  }

  // Metode untuk menambahkan data siswa baru
  async store(req, res) {
    try {
      const newStudent = await Student.create(req.body); // Membuat data siswa baru menggunakan data dari request body
      res.json({ message: "Student added successfully!", data: newStudent }); // Mengembalikan pesan sukses dan data siswa yang ditambahkan
    } catch (error) {
      console.error(error); // Mencatat error ke konsol
      res.status(500).json({ message: "Error adding student", error: error.message }); // Mengembalikan pesan error dengan status 500
    }
  }

  // Metode untuk memperbarui data siswa berdasarkan ID
  async update(req, res) {
    try {
      const updatedStudent = await Student.update(parseInt(req.params.id), req.body); // Memperbarui data siswa berdasarkan ID
      res.json({ message: "Student updated successfully!", data: updatedStudent }); // Mengembalikan pesan sukses dan data siswa yang diperbarui
    } catch (error) {
      res.status(404).json({ message: error.message }); // Menangani error jika siswa tidak ditemukan dan mengembalikan status 404
    }
  }

  // Metode untuk menghapus data siswa berdasarkan ID
  async destroy(req, res) {
    try {
      const deletedStudent = await Student.destroy(parseInt(req.params.id)); // Menghapus data siswa berdasarkan ID
      res.json({ message: "Student deleted successfully!", data: deletedStudent }); // Mengembalikan pesan sukses dan data siswa yang dihapus
    } catch (error) {
      res.status(404).json({ message: error.message }); // Menangani error jika siswa tidak ditemukan dan mengembalikan status 404
    }
  }

  // Metode untuk mendapatkan data siswa berdasarkan ID
  async show(req, res) {
    try {
      const student = await Student.find(parseInt(req.params.id)); // Mengambil data siswa berdasarkan ID
      res.json(student); // Mengembalikan data siswa dalam format JSON
    } catch (error) {
      res.status(404).json({ message: error.message }); // Menangani error jika siswa tidak ditemukan dan mengembalikan status 404
    }
  }
}

// Mengekspor instance dari StudentController untuk digunakan dalam route
export default new StudentController();
