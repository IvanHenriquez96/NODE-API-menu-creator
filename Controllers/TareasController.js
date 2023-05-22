const Tareas = require("../Models/Tareas");

const readTareas = async (req, res) => {
  const tareas = await Tareas.find();
  res.json({
    mensaje: "Lista de tareas",
    data: tareas,
  });
};

const findTarea = async (req, res) => {
  const tarea = await Tareas.findById(req.params.id);
  res.json(tarea);
};

const createTarea = async (req, res) => {
  const newTarea = new Tareas(req.body);

  try {
    await newTarea.save();
    res.status(200).json({ msg: "Tarea Agregada" });
  } catch (error) {
    res.status(500).json({ msg: error });

    console.log("Error al agregar la tarea", error);
  }
};

const updateTarea = async (req, res) => {
  try {
    const tarea = await Tareas.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ msg: "Tarea Actualizada" });
  } catch (error) {
    console.log("Error al actualizar la tarea", error);
  }
};

const deleteTarea = async (req, res) => {
  try {
    await Tareas.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Tarea Eliminada" });
  } catch (error) {
    console.log("Error al eliminar la tarea", error);
  }
};

module.exports = {
  inicio,
  readTareas,
  findTarea,
  createTarea,
  updateTarea,
  deleteTarea,
};
