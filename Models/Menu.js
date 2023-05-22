const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  id_user: {
    type: String,
    required: true,
  },
  productos: {
    type: Array,
    required: true,
  },
  timestamps: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Menu", MenuSchema);
