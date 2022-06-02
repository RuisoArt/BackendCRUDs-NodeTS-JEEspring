"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prest_sql_todo_1 = require("./../../repositories/prestamos/prest_sql_todo");
const PrestDaoTodo_1 = __importDefault(require("../../daos/prestamos/PrestDaoTodo"));
class PrestControllerTodo extends PrestDaoTodo_1.default {
    damePrestamos(req, res) {
        PrestControllerTodo.obtenerPrestamo(prest_sql_todo_1.SQL_PRESTAMO_TODO.TODO, [], res);
    }
}
const prestControllerTodo = new PrestControllerTodo();
exports.default = prestControllerTodo;
