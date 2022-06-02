"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const editoriales_sql_todo_1 = require("./../../repositories/editoriales/editoriales_sql_todo");
const EditorialesDaoTodo_1 = __importDefault(require("../../daos/editoriales/EditorialesDaoTodo"));
class EditorialesControllerTodo extends EditorialesDaoTodo_1.default {
    dameEditoriales(req, res) {
        EditorialesControllerTodo.obtenerEditoriales(editoriales_sql_todo_1.SQL_EDIT_TODO.TODO, [], res);
    }
}
const editorialesControllerTodo = new EditorialesControllerTodo();
exports.default = editorialesControllerTodo;
