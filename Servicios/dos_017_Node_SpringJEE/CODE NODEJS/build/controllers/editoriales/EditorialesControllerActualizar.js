"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const editoriales_sql_actualizar_1 = require("../../repositories/editoriales/editoriales_sql_actualizar");
const EditorialesDaoActualizar_1 = __importDefault(require("../../daos/editoriales/EditorialesDaoActualizar"));
class EditorialesControllerActualizar extends EditorialesDaoActualizar_1.default {
    actualizarEditorial(req, res) {
        const codigo = req.body.idEditorial;
        const nombre = req.body.nombre;
        const pais = req.body.pais;
        const telefono = req.body.telefono;
        const parametros = [codigo, nombre, pais, telefono];
        EditorialesControllerActualizar.actualizarEditorial(editoriales_sql_actualizar_1.SQL_EDIT_ACTUALIZAR.F5, parametros, res);
    }
}
const editorialesControllerActualizar = new EditorialesControllerActualizar();
exports.default = editorialesControllerActualizar;
