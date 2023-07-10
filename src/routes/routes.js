const { Router } = require("express");
const clienteController = require("../controllers/clienteController");
const produtoController = require("../controllers/produtoController");
const PedidoController = require("../controllers/pedidoController");
const EstoqueController = require("../controllers/estoqueController");
const VendaController = require("../controllers/vendaController");

const routes = Router();

routes.post("/produtos/", produtoController.createProduto);
routes.get("/produtos", produtoController.getProdutos);
routes.get("/produtos/:produto_id", produtoController.getProdutoById);
routes.patch("/produtos/:produto_id/:cliente_id", produtoController.updateProduto);
routes.delete("/produtos/:produto_id", produtoController.deleteProduto);

routes.post("/clientes", clienteController.createCliente);
routes.get("/clientes", clienteController.getClientes);
routes.get("/clientes/:cliente_id", clienteController.getClienteById);
routes.patch("/clientes/:cliente_id", clienteController.updateClient);
routes.delete("/clientes/:cliente_id", clienteController.deleteCliente);

routes.post("/pedidos/:cliente_id", PedidoController.createPedido);
routes.get("/pedidos/:cliente_id", PedidoController.getClientePedido);
routes.get("/pedidos/:cliente_id/:pedido_id", PedidoController.getPedido);

routes.post("/estoque/:produto_id", EstoqueController.createEstoque);
routes.get("/estoque", EstoqueController.getEstoque);
routes.get("/estoque/:produto_id", EstoqueController.getEstoqueById);
routes.patch("/estoque/:produto_id", EstoqueController.updateEstoqueById);
routes.delete("/estoque/:produto_id", EstoqueController.deleteEstoque);

routes.post("/vendas/:cliente_id", VendaController.createVenda);
routes.get("/vendas/", VendaController.getVendas);
routes.get("/vendas/:produto_id", VendaController.getVendasById);
routes.patch("/vendas/:produto_id", VendaController.updateVendaById);
routes.delete("/vendas/:produto_id", VendaController.deleteVenda);

module.exports = routes;
