"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const autor_sql_todo_1 = require("../../repositories/autor/autor_sql_todo");
const AutorDaoTodo_1 = __importDefault(require("../../daos/autor/AutorDaoTodo"));
class AutorControllerTodo extends AutorDaoTodo_1.default {
    dameAutoresCarajo(request, response) {
        AutorControllerTodo.obtenerTodo(autor_sql_todo_1.SQL_AUTOR_TODO.TODO, [], response);
    }
}
const autorControllerTodo = new AutorControllerTodo();
exports.default = autorControllerTodo;
