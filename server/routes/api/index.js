const router = require("express").Router();
const studentRoutes = require("./student-routes");

//add prefix of '/pizzas' to routes created in 'pizza-routes.js'
router.use("/students", studentRoutes);

module.exports = router;
