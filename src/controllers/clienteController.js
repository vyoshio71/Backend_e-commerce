const clienteModel = require("../model/cliente");

const ClienteController = {
  async createCliente(req, res) {
    try {
      const clientes = await clienteModel.create({
        nome: req.body.nome,
        email: req.body.email,
      });
      return res.status(200).json({
        data: clientes,
      });
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  async getClientes(req, res) {
    try {
      const clientes = await clienteModel.find();
      return res.status(200).json(clientes);
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  async getClienteById(req, res) {
    const { cliente_id } = req.params;

    try {
      const cliente = await clienteModel.findById(cliente_id);
      return res.status(200).json(cliente);
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  async updateClient(req, res) {
    const bodyData = req.body;
    const { cliente_id } = req.params;
    try {
      const updateCliente = await clienteModel.findByIdAndUpdate(
        cliente_id,
        bodyData,
        { new: true }
      );
      return res.status(200).json(updateCliente);
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  async deleteCliente(req, res) {
    const { cliente_id } = req.params;
    try {
      const deleteCliente = await clienteModel.findByIdAndDelete(cliente_id);
      return res.status(200).json(deleteCliente);
    } catch (err) {
      return res.status(400).json(err);
    }
  },
};

module.exports = ClienteController;
