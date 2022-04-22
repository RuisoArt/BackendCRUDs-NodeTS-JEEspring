"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usu_sql_Todo_1 = require("./../../repositories/usuarios/usu_sql_Todo");
const UsuDaoTodo_1 = __importDefault(require("../../daos/usuarios/UsuDaoTodo"));
class UsuControllerTodo extends UsuDaoTodo_1.default {
    dameUsuarios(req, res) {
        UsuControllerTodo.obtenerUsuario(usu_sql_Todo_1.SQL_USUARIOS_TODO.TODO, [], res);
    }
}
const usuControllerTodo = new UsuControllerTodo();
exports.default = usuControllerTodo;
