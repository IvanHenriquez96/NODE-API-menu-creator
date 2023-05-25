const router = require("express").Router();
const HomeController = require("../Controllers/HomeController");
const MenuController = require("../Controllers/MenuController");
const TareasController = require("../Controllers/TareasController");
const AuthController = require("../Controllers/AuthController");
const authMiddleware = require("../Middlewares/authMiddleware");

router.get("/", HomeController.inicio);

router.get("/ruta_protegida", authMiddleware, HomeController.inicio);

router.get("/api/", TareasController.readTareas);
router.get("/api/:id", TareasController.findTarea);
router.post("/api/", TareasController.createTarea);
router.patch("/api/:id", TareasController.updateTarea);
router.delete("/api/:id", TareasController.deleteTarea);

router.get("/menu/:id_user", MenuController.readMenus);
router.get("/menu/:id_user/:id", MenuController.findMenu);
router.post("/menu/:id_user", MenuController.createMenu);
router.patch("/menu/:id_user/:id", MenuController.updateMenu);
router.delete("/menu/:id_user/:id", MenuController.deleteMenu);

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);

module.exports = router;
