import Student from "../models/Student.js";

class StudentController {
  async index(req, res) {
    try {
      const students = await Student.all();
      res.json(students);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async store(req, res) {
    try {
      const newStudent = await Student.create(req.body);
      res.json({ message: "Student added successfully!", data: newStudent });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error adding student", error: error.message });
    }
  }  

  async update(req, res) {
    try {
      const updatedStudent = await Student.update(parseInt(req.params.id), req.body);
      res.json({ message: "Student updated successfully!", data: updatedStudent });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const deletedStudent = await Student.destroy(parseInt(req.params.id));
      res.json({ message: "Student deleted successfully!", data: deletedStudent });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async show(req, res) {
    try {
      const student = await Student.find(parseInt(req.params.id));
      res.json(student);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default new StudentController();
