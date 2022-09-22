"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clientes_sql_todo_1 = require("./../../repositories/clientes/clientes_sql_todo");
const ClientesDaoTodo_1 = __importDefault(require("../../daos/clientes/ClientesDaoTodo"));
class ClientesControllerTodo extends ClientesDaoTodo_1.default {
    dameClientes(req, res) {
        ClientesControllerTodo.obtenerClientes(clientes_sql_todo_1.SQL_CLIENTES_TODO.TODO, [], res);
    }
}
const clientesControllerTodo = new ClientesControllerTodo();
exports.default = clientesControllerTodo;
