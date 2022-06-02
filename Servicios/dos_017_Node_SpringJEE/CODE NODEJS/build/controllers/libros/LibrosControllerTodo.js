"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const libros_sql_todo_1 = require("./../../repositories/libros/libros_sql_todo");
const LibrosDaoTodo_1 = __importDefault(require("../../daos/libros/LibrosDaoTodo"));
class LibrosControllerTodo extends LibrosDaoTodo_1.default {
    dameLibros(req, res) {
        LibrosControllerTodo.obtenerLibros(libros_sql_todo_1.SQL_LIBRO_TODO.TODO, [], res);
    }
}
const librosControllerTodo = new LibrosControllerTodo();
exports.default = librosControllerTodo;
