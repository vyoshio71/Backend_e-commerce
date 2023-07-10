const pedidoModel = require("../model/pedido");

const PedidoController = {
  async createPedido(req, res) {
    const bodyData = req.body;
    const { cliente_id } = req.params;

    try {
      const createPedido = await pedidoModel.create({
        ...bodyData,
        nome: cliente_id,
      });
      return res.status(200).json(createPedido);
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  async getClientePedido(req, res) {
    try {
      const clientePedido = await pedidoModel
        .find()
        .populate("produtos", "nome");
      return res.status(200).json(clientePedido);
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  async getPedido(req, res) {
    const { pedido_id } = req.params;

    try {
      const pedido = await pedidoModel.findById(pedido_id).populate("produtos");
      return res.status(200).json(pedido);
    } catch (err) {
      return res.status(400).json(err);
    }
  },
};

module.exports = PedidoController;
