"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const access_sql_Todo_1 = require("./../../repositories/acceso/access_sql_Todo");
const AccessDaoTodo_1 = __importDefault(require("../../daos/accesos/AccessDaoTodo"));
class AccessControllerTodo extends AccessDaoTodo_1.default {
    dameUsuarios(req, res) {
        AccessControllerTodo.obtenerAccesos(access_sql_Todo_1.SQL_ACCESO_TODO.TODO, [], res);
    }
}
const accessControllerTodo = new AccessControllerTodo();
exports.default = accessControllerTodo;
