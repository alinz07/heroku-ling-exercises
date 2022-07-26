const router = require("express").Router();

const {
	createStudent,
	getAllStudents,
	getStudentById,
	updateStudent,
	deleteStudent,
} = require("../../controllers/student-controller");

//Set up GET all and POST at /api/pizzas
router.route("/").get(getAllStudents).post(createStudent);

//set up GET one, PUT, and DELETE at /api/pizzas/:id
router
	.route("/:id")
	.get(getStudentById)
	.put(updateStudent)
	.delete(deleteStudent);

module.exports = router;
