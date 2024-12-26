import db from "../config/database.js";

class Student {
  static all() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students";
      db.query(sql, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  static create(data) {
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO students SET ?";
      db.query(sql, data, (err, results) => {
        if (err) {
          reject(err);
          return;  // Pastikan tidak lanjut jika error
        }
        
        if (!results || !results.insertId) {
          reject(new Error("Insert failed or insertId is missing"));
          return;
        }
  
        resolve({ id: results.insertId, ...data });
      });
    });
  }  

  static update(id, updatedData) {
    return new Promise((resolve, reject) => {
      const sql = "UPDATE students SET ? WHERE id = ?";
      db.query(sql, [updatedData, id], (err, results) => {
        if (err) reject(err);
        if (results.affectedRows === 0) reject(new Error("Student not found"));
        resolve({ id, ...updatedData });
      });
    });
  }

  static destroy(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM students WHERE id = ?";
      db.query(sql, id, (err, results) => {
        if (err) reject(err);
        if (results.affectedRows === 0) reject(new Error("Student not found"));
        resolve({ message: `Student with ID ${id} deleted successfully` });
      });
    });
  }

  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";
      db.query(sql, id, (err, results) => {
        if (err) reject(err);
        if (results.length === 0) reject(new Error("Student not found"));
        resolve(results[0]);
      });
    });
  }
}

export default Student;
