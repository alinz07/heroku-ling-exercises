const { Student } = require("../models");
const studentController = {
	createStudent({ body }, res) {
		Student.create(body)
			.then((dbStudentData) => res.json(dbStudentData))
			.catch((err) => res.status(400).json(err));
	},
	getAllStudents(req, res) {
		Student.find({})
			.then((dbStudentData) => {
				res.json(dbStudentData);
			})
			.catch((err) => {
				console.log(err);
				res.status(400).json(err);
			});
	},
	getStudentById({ params }, res) {
		Student.findOne({ _id: params.studentId })
			.then((dbStudentData) => {
				//if no pizza is found
				if (!dbStudentData) {
					res.status(404).json({
						message: "No student found with this id",
					});
					return;
				}
				res.json(dbStudentData);
			})
			.catch((err) => {
				console.log(err);
				res.status(400).json(err);
			});
	},

	updateStudent({ params, body }, res) {
		Student.findOneAndUpdate({ _id: params.studentId }, body, {
			new: true,
			runValidators: true,
		})
			.then((dbStudentData) => {
				if (!dbStudentData) {
					return res.status(404).json({
						message: "No student found with this id",
					});
				}
				res.json(dbStudentData);
			})
			.catch((err) => {
				res.json(err);
			});
	},
	deleteStudent({ params }, res) {
		Student.findOneAndDelete({ _id: params.studentId })
			.then((dbStudentData) => {
				if (!dbStudentData) {
					res.status(404).json({
						message: "No student found with this id",
					});
					return;
				}
				res.json(dbStudentData);
			})
			.catch((err) => res.status(400).json(err));
	},
};

module.exports = studentController;
