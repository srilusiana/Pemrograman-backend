// TODO 3: Import data students dari folder data/students.js
import students from '../data/students.js';

// Membuat Class StudentController
class StudentController {
  index(req, res) {
    // TODO 4: Tampilkan data students
    res.json(students);
  }

  store(req, res) {
    // TODO 5: Tambahkan data students
    const newStudent = req.body; 
    students.push(newStudent);
    res.json({ message: "Student added successfully!", data: newStudent });
  }

  update(req, res) {
    // TODO 6: Update data students
    const id = parseInt(req.params.id); 
    const updatedData = req.body; 

    const studentIndex = students.findIndex(student => student.id === id);
    if (studentIndex !== -1) {
      students[studentIndex] = { ...students[studentIndex], ...updatedData };
      res.json({ message: "Student updated successfully!", data: students[studentIndex] });
    } else {
      res.status(404).json({ message: "Student not found!" });
    }
  }

  destroy(req, res) {
    // TODO 7: Hapus data students
    const id = parseInt(req.params.id); 

    const studentIndex = students.findIndex(student => student.id === id);
    if (studentIndex !== -1) {
      const deletedStudent = students.splice(studentIndex, 1);
      res.json({ message: "Student deleted successfully!", data: deletedStudent });
    } else {
      res.status(404).json({ message: "Student not found!" });
    }
  }
}

// Export object StudentController menggunakan ES6
export default new StudentController();
