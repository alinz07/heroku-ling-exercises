const jwt = require("jsonwebtoken");
const secret = "mysecretsshhhhh";
const expiration = "2h";

module.exports = {
	authMiddleware: function ({ req }) {
		// allows token to be sent via req.body, req.query, or headers
		let token =
			req.body.token || req.query.token || req.headers.authorization;

		// separate ["Bearer", "<tokenvalue>"]
		if (req.headers.authorization) {
			token = token.split(" ").pop().trim();
		}

		// if no token, return request object as is
		if (!token) {
			return req;
		}

		// decode and attach user data to request object
		try {
			const { data } = jwt.verify(token, secret, { maxAge: expiration });
			req.student = data;
		} catch {
			console.log("Invalid token");
		}

		// return updated request object
		return req;
	},
	// signToken expects a student object
	signToken: function ({ initials, parent_email, _id }) {
		const payload = { initials, parent_email, _id };

		return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
	},
};
