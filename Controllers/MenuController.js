const Menu = require("../Models/Menu");

const readMenus = async (req, res) => {
  const menus = await Menu.find();
  res.json({
    mensaje: "Lista de Menús",
    data: menus,
  });
};

const findMenu = async (req, res) => {
  const menu = await Menu.findById(req.params.id);
  res.json(menu);
};

const createMenu = async (req, res) => {
  const newMenu = new Menu(req.body);

  try {
    await newMenu.save();
    res.status(200).json({ msg: "Menú Agregado" });
  } catch (error) {
    res.status(500).json({ msg: error });

    console.log("Error al agregar menú", error);
  }
};

const updateMenu = async (req, res) => {
  try {
    const menu = await Menu.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ msg: "Menú Actualizado" });
  } catch (error) {
    console.log("Error al actualizar menú", error);
  }
};

const deleteMenu = async (req, res) => {
  try {
    await Menu.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Menú Eliminado" });
  } catch (error) {
    console.log("Error al eliminar menú", error);
  }
};

module.exports = {
  readMenus,
  findMenu,
  createMenu,
  updateMenu,
  deleteMenu,
};
