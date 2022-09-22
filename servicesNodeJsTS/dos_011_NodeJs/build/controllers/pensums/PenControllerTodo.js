"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pensums_sql_Todo_1 = require("./../../repositories/pensums/pensums_sql_Todo");
const PenDaoTodo_1 = __importDefault(require("../../daos/pensums/PenDaoTodo"));
class PenControllerTodo extends PenDaoTodo_1.default {
    damePensums(req, res) {
        PenControllerTodo.obtenerPensum(pensums_sql_Todo_1.SQL_PENSUMS_TODO.TODO, [], res);
    }
}
const penControllerTodo = new PenControllerTodo();
exports.default = penControllerTodo;
