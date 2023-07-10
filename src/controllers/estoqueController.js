const estoqueModal = require("../model/estoque");

const EstoqueController = {
  async createEstoque(req, res) {
    const { produto_id } = req.params;
    try {
      const createEstoque = await estoqueModal.create({
        nome_produto: produto_id,
        qtd_produto: req.body.qtd_produto,
        ativo: req.body.ativo,
      });
      return res
        .status(200)
        .json({ msg: "Estoque criado com sucesso", createEstoque });
    } catch (msg) {
      return res.status(400).json({ msg: "Não foi possivel criar um estoque" });
    }
  },

  async getEstoque(req, res) {
    try {
      const getAllEstoque = await estoqueModal.find().populate("nome_produto");
      return res.status(200).json({ msg: "Estoque encontado", getAllEstoque });
    } catch (msg) {
      return res
        .status(400)
        .json({ msg: "Não foi possivel encontrar o estoque" });
    }
  },

  async getEstoqueById(req, res) {
    const { produto_id } = req.params;
    try {
      const getEstoqueId = await estoqueModal
        .findById(produto_id)
        .populate("nome_produto");
      return res.status(200).json(getEstoqueId);
    } catch (msg) {
      return res
        .status(400)
        .json({ msg: "Estoque do produto não encontrado!" });
    }
  },

  async updateEstoqueById(req, res) {
    const bodyData = req.body;
    const { produto_id } = req.params;
    try {
      const updateEstoque = await estoqueModal.findByIdAndUpdate(
        produto_id,
        bodyData,
        { new: true }
      );
      return res
        .status(200)
        .json({ msg: "Estoque do produto encontrado", updateEstoque });
    } catch (msg) {
      return res.status(400).json({ msg: "Estoque do produto não encontrado" });
    }
  },

  async deleteEstoque(req, res) {
    const { produto_id } = req.params;
    try {
      const deleteEstoqueById = await estoqueModal.findByIdAndDelete(
        produto_id
      );
      return res
        .status(200)
        .json({ msg: "Estoque excluido com sucesso", deleteEstoqueById });
    } catch (msg) {
      return res.status(400).json({ msg: "Estoque não encontrado" });
    }
  },
};

module.exports = EstoqueController;
