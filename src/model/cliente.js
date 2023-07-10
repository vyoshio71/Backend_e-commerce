const mongoose = require("mongoose");
const conn = require("../../config/mongo");

conn();
const clienteSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const clienteModel = mongoose.model("clientes", clienteSchema);

module.exports = clienteModel;
