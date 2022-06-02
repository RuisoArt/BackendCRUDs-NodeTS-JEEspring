"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clientes_sql_buscar_1 = require("./../../repositories/clientes/clientes_sql_buscar");
const ClientesDaoBuscar_1 = __importDefault(require("../../daos/clientes/ClientesDaoBuscar"));
class ClientesControllerBuscar extends ClientesDaoBuscar_1.default {
    buscarClientes(req, res) {
        const codigo = req.params.idCliente;
        const parametro = [codigo];
        ClientesControllerBuscar.encontrarCliente(clientes_sql_buscar_1.SQL_CLIENTES_BUSCAR.BUSCAR, parametro, res);
    }
}
const clientesControllerBuscar = new ClientesControllerBuscar();
exports.default = clientesControllerBuscar;
