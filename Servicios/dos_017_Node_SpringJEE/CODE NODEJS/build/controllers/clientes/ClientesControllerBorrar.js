"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clientes_sql_borrar_1 = require("../../repositories/clientes/clientes_sql_borrar");
const ClienteDaoBorrar_1 = __importDefault(require("../../daos/clientes/ClienteDaoBorrar"));
class ClientesControllerBorrar extends ClienteDaoBorrar_1.default {
    eliminarCliente(req, res) {
        const codigo = req.params.idCliente;
        const parametro = [codigo];
        ClientesControllerBorrar.borrarCliente(clientes_sql_borrar_1.SQL_CLIENTES_BORRAR.BORRAR, parametro, res);
    }
}
const clientesControllerBorrar = new ClientesControllerBorrar();
exports.default = clientesControllerBorrar;
