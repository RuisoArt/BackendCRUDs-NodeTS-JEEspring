"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const depres_sql_todo_1 = require("./../../repositories/detalle_prestamos/depres_sql_todo");
const DepresDaoTodo_1 = __importDefault(require("../../daos/detalles_prestamos/DepresDaoTodo"));
class DepresControllerTodo extends DepresDaoTodo_1.default {
    dameDepresTodo(req, res) {
        DepresControllerTodo.obtenerDepres(depres_sql_todo_1.SQL_DEPRES_TODO.TODO, [], res);
    }
}
const depresControllerTodo = new DepresControllerTodo();
exports.default = depresControllerTodo;
