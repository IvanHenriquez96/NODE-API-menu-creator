const mongoose = require("mongoose");

const TareasSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Tareas", TareasSchema);
