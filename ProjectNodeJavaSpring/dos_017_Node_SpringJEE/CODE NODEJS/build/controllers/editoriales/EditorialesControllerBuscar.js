"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const editoriales_sql_buscar_1 = require("./../../repositories/editoriales/editoriales_sql_buscar");
const EditorialesDaoBuscar_1 = __importDefault(require("../../daos/editoriales/EditorialesDaoBuscar"));
class EditorialesControllerBuscar extends EditorialesDaoBuscar_1.default {
    buscarEditorial(req, res) {
        const codigo = req.params.idEditorial;
        const parametro = [codigo];
        EditorialesControllerBuscar.encontrarEditorial(editoriales_sql_buscar_1.SQL_EDIT_BUSCAR.BUSCAR, parametro, res);
    }
}
const editorialesControllerBuscar = new EditorialesControllerBuscar();
exports.default = editorialesControllerBuscar;
