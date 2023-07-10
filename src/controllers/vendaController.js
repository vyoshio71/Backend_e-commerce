const vendaModel = require("../model/venda");

const VendaController = {
  async createVenda(req, res) {
    const { cliente_id } = req.params;
    try {
      const venda = await vendaModel.create({
        cliente: cliente_id,
        status: req.body.status,
        descricao: req.body.descricao,
        qtd_itens: req.body.qtd_itens,
        valor_total: req.body.valor_total,
      });
      return res.status(200).json({ msg: "Venda criada com sucesso", venda });
    } catch (msg) {
      return res
        .status(400)
        .json({ msg: "Não foi possivel criar a venda dos produtos" });
    }
  },

  async getVendas(req, res) {
    try {
      const getVendas = await vendaModel.find();
      return res.status(200).json({ msg: "Vendas feitas", getVendas });
    } catch (msg) {
      return res
        .status(400)
        .json({ msg: "Não foi possivel encontrar as vendas" });
    }
  },

  async getVendasById(req, res) {
    const { produto_id } = req.params;
    try {
      const getVendasById = await vendaModel.findById(produto_id);
      return res.status(200).json({ msg: "Venda encontrada", getVendasById });
    } catch (msg) {
      return res.status(400).json({ msg: "Pedido de venda não encontrado" });
    }
  },

  async updateVendaById(req, res) {
    const bodyData = req.body;
    const { produto_id } = req.params;
    try {
      const updateVendaById = await vendaModel.findByIdAndUpdate(
        produto_id,
        bodyData,
        { new: true }
      );
      return res.status(200).json({ msg: "Venda atualizada", updateVendaById });
    } catch (msg) {
      return res.status(400).json({
        msg: "Venda não encontrada",
      });
    }
  },

  async deleteVenda(req, res) {
    const { produto_id } = req.params;
    try {
      const deleteVenda = await vendaModel.findByIdAndDelete(produto_id);
      return res
        .status(200)
        .json({ msg: "Venda excluida com sucesso", deleteVenda });
    } catch (msg) {
      return res.status(400).json({ msg: "Venda não encontrada" });
    }
  },
};

module.exports = VendaController;
