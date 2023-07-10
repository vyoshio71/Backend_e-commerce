const produtoModel = require("../model/produto");

const ProdutoController = {
  async createProduto(req, res) {
    try {
      const produtos = await produtoModel.create({
        nome: req.body.nome,
        descricao: req.body.descricao,
        valor: req.body.valor,
        disponibilidade: req.body.disponibilidade,
      });

      return res.status(200).json({
        data: produtos,
      });
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  async getProdutos(req, res) {
    try {
      const produtos = await produtoModel.find();
      return res.status(200).json(produtos);
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  async getProdutoById(req, res) {
    const { produto_id } = req.params;

    try {
      const produto = await produtoModel.findById(produto_id);
      return res.status(200).json(produto);
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  async updateProduto(req, res) {
    const bodyData = req.body;
    const { produto_id } = req.params;

    try {
      const updateProduto = await produtoModel.findByIdAndUpdate(
        produto_id,
        bodyData,
        { new: true }
      );
      return res.status(200).json(updateProduto);
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  async deleteProduto(req, res) {
    const { produto_id } = req.params;

    try {
      const deleteProduto = await produtoModel.findByIdAndDelete(produto_id);
      return res.status(200).json(deleteProduto);
    } catch (err) {
      return res.status(400).json(err);
    }
  },
};

module.exports = ProdutoController;
