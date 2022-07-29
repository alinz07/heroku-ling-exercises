const path = require("path");
const express = require("express");
const compression = require("compression");

const db = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(compression());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(require("./routes"));

//server use static assets
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../client/build")));
}

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

db.once("open", () => {
	app.listen(PORT, () => {
		console.log(`API server running on port ${PORT}!`);
	});
});
