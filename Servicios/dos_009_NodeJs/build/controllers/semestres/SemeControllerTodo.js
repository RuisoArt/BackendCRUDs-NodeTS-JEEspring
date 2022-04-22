"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const semestres_sql_Todo_1 = require("./../../repositories/semestres/semestres_sql_Todo");
const SemestresDaoTodo_1 = __importDefault(require("../../daos/semestres/SemestresDaoTodo"));
class SemeControllerTodo extends SemestresDaoTodo_1.default {
    dameSemestres(req, res) {
        SemeControllerTodo.obtenerSemestre(semestres_sql_Todo_1.SQL_SEMESTRES_TODO.TODO, [], res);
    }
}
const semeControllerTodo = new SemeControllerTodo();
exports.default = semeControllerTodo;
