"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MateriasDaoTodo_1 = __importDefault(require("../../daos/materias/MateriasDaoTodo"));
const materias_sql_Todo_1 = require("../../repositories/materias/materias_sql_Todo");
class MateControllerTodo extends MateriasDaoTodo_1.default {
    dameMaterias(req, res) {
        MateControllerTodo.obtenerMateria(materias_sql_Todo_1.SQL_MATERIAS_TODO.TODO, [], res);
    }
}
const mateControllerTodo = new MateControllerTodo();
exports.default = mateControllerTodo;
