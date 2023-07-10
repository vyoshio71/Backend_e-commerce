const mongoose = require("mongoose");
const conn = require("../../config/mongo");

conn();

const estoqueSchema = mongoose.Schema({
  nome_produto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "produtos",
    required: true,
  },
  qtd_produto: {
    type: Number,
    required: true,
  },
  ativo: {
    type: Boolean,
    required: true,
  },
});

const estoqueModal = mongoose.model("estoque", estoqueSchema);

module.exports = estoqueModal;
