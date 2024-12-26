// Import StudentController menggunakan import ES6
import StudentController from '../controllers/StudentController.js';

import express from 'express';
const router = express.Router();

// Definisikan route
router.get("/", (req, res) => {
  res.send("Hello Express");
});

router.get("/", (req, res) => res.send("Hello Express!"));  
router.get("/students", StudentController.index);
router.get("/students/:id", StudentController.show);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);

// Ekspor router menggunakan export default
export default router;

