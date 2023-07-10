const mongoose = require("mongoose");
const conn = require("../../config/mongo");

conn();
const pedidoSchema = mongoose.Schema({
  produtos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "produtos",
    },
  ],
  nome: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cliente",
  },
  endereco: {
    rua: {
      type: String,
      required: true,
    },
    numero: {
      type: String,
      required: true,
    },
    cidade: {
      type: String,
      required: true,
    },
  },
  pagamento: {
    cartao: {
      numero: {
        type: Number,
      },
      cvc: {
        type: Number,
      },
    },
  },
});

const pedidoModel = mongoose.model("pedidos", pedidoSchema);

module.exports = pedidoModel;
