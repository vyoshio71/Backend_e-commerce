const mongoose = require("mongoose");
const conn = require("../../config/mongo");

conn();
const vendaSchema = mongoose.Schema({
  status: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  qtd_itens: {
    type: Number,
    required: true,
  },
  valor_total: {
    type: Number,
    required: true,
  },
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cliente",
  },
  produtos: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "produtos",
  },
});

const vendaModel = mongoose.model("vendas", vendaSchema);

module.exports = vendaModel;
