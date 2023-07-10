const mongoose = require("mongoose");
const conn = require("../../config/mongo");

conn();
const produtoSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
  disponibilidade: {
    type: Boolean,
    required: true,
  },
});

const produtoModel = mongoose.model("produtos", produtoSchema);

module.exports = produtoModel;
