"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const editoriales_sql_borrar_1 = require("../../repositories/editoriales/editoriales_sql_borrar");
const EditorialesDaoBorrar_1 = __importDefault(require("../../daos/editoriales/EditorialesDaoBorrar"));
class EditorialesControllerBorrar extends EditorialesDaoBorrar_1.default {
    eliminarEditorial(request, response) {
        const codigo = request.params.idEditorial;
        const parametros = [codigo];
        EditorialesControllerBorrar.eliminarEditorial(editoriales_sql_borrar_1.SQL_EDIT_BORRAR.BORRAR, parametros, response);
    }
}
const editorialesControllerBorrar = new EditorialesControllerBorrar();
exports.default = editorialesControllerBorrar;
