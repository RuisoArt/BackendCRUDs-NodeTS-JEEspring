"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProgramasDaoTodo_1 = __importDefault(require("../../daos/programas/ProgramasDaoTodo"));
const programas_sql_Todo_1 = require("../../repositories/programas/programas_sql_Todo");
class ProControllerTodo extends ProgramasDaoTodo_1.default {
    dameProgramas(req, res) {
        ProControllerTodo.obtenerPrograma(programas_sql_Todo_1.SQL_PROGRAMAS_TODO.TODO, [], res);
    }
}
const proControllerTodo = new ProControllerTodo();
exports.default = proControllerTodo;
