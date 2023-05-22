const router = require("express").Router();
const HomeController = require("../Controllers/HomeController");
const TareasController = require("../Controllers/TareasController");
const AuthController = require("../Controllers/AuthController");

router.get("/", HomeController.inicio);

router.get("/api/", TareasController.readTareas);
router.get("/api/:id", TareasController.findTarea);
router.post("/api/", TareasController.createTarea);
router.patch("/api/:id", TareasController.updateTarea);
router.delete("/api/:id", TareasController.deleteTarea);

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);

module.exports = router;
