import Patient from "../models/Patient.js"; // Import model Student untuk operasi database

// Definisi class StudentController yang berisi metode untuk menangani permintaan terkait data pasien
class PatientController {
  // Metode untuk mendapatkan semua data pasien
  async index(req, res) {
    try {
      const patients = await Patient.all(); // Mengambil semua data pasien dari model
      res.json(patients); // Mengembalikan data pasien dalam format JSON
    } catch (error) {
      res.status(500).json({ message: error.message }); // Menangani error dan mengembalikan status 500
    }
  }

  // Metode untuk menambahkan data pasien baru
  async store(req, res) {
    try {
      const newPatient = await Patient.create(req.body); // Membuat data pasien baru menggunakan data dari request body
      res.json({ message: "Patient added successfully!", data: newPatient }); // Mengembalikan pesan sukses dan data pasien yang ditambahkan
    } catch (error) {
      console.error(error); // Mencatat error ke konsol
      res.status(500).json({ message: "Error adding patient", error: error.message }); // Mengembalikan pesan error dengan status 500
    }
  }

  // Metode untuk memperbarui data pasien berdasarkan ID
  async update(req, res) {
    try {
      const updatePatient = await Patient.update(parseInt(req.params.id), req.body); // Memperbarui data pasien berdasarkan ID
      res.json({ message: "Patient updated successfully!", data: updatePatient }); // Mengembalikan pesan sukses dan data pasien yang diperbarui
    } catch (error) {
      res.status(404).json({ message: error.message }); // Menangani error jika pasien tidak ditemukan dan mengembalikan status 404
    }
  }

  // Metode untuk menghapus data pasien berdasarkan ID
  async destroy(req, res) {
    try {
      const deletedPatient = await Patient.destroy(parseInt(req.params.id)); // Menghapus data pasien berdasarkan ID
      res.json({ message: "Patient deleted successfully!", data: deletedPatient }); // Mengembalikan pesan sukses dan data pasien yang dihapus
    } catch (error) {
      res.status(404).json({ message: error.message }); // Menangani error jika pasien tidak ditemukan dan mengembalikan status 404
    }
  }

  // Metode untuk mendapatkan data pasien berdasarkan ID
  async show(req, res) {
    try {
      const patients = await Patient.find(parseInt(req.params.id)); // Mengambil data pasien berdasarkan ID
      res.json(patients); // Mengembalikan data pasien dalam format JSON
    } catch (error) {
      res.status(404).json({ message: error.message }); // Menangani error jika pasien tidak ditemukan dan mengembalikan status 404
    }
  }

  // Metode untuk mencari pasien berdasarkan kata kunci
  async search(req, res) {
    try {
      const { keyword } = req.query; // Ambil keyword dari query parameter
      const patients = await Patient.search(keyword); // Panggil model untuk mencari pasien
      res.json(patients); // Kembalikan hasil pencarian dalam format JSON
    } catch (error) {
      res.status(500).json({ message: error.message }); // Tangani error dan kembalikan status 500
    }
  }

  // Metode untuk mendapatkan pasien berdasarkan status
  async getByStatus(req, res) {
    try {
      const { status } = req.params; // Ambil status dari parameter
      const patients = await Patient.getByStatus(status); // Panggil model untuk mendapatkan pasien berdasarkan status
      res.json(patients); // Kembalikan data pasien dalam format JSON
    } catch (error) {
      res.status(500).json({ message: error.message }); // Tangani error dan kembalikan status 500
    }
  }
}

// Mengekspor instance dari PatientController untuk digunakan dalam route
export default new PatientController();
