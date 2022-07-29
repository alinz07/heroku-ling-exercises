const { Student } = require("../models");
const { signToken } = require("../utils/auth");

const studentController = {
	createStudent({ body }, res) {
		Student.create(body)
			.then((dbStudentData) => {
				const initials = dbStudentData.initials;
				const parent_email = dbStudentData.parent_email;
				const id = dbStudentData._id;
				const token = signToken(initials, parent_email, id);
				res.json(token);
			})
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
