"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const editoriales_sql_Confirmar_1 = require("../../repositories/editoriales/editoriales_sql_Confirmar");
const editoriales_sql_crear_1 = require("../../repositories/editoriales/editoriales_sql_crear");
const EditorialesDaoCrear_1 = __importDefault(require("../../daos/editoriales/EditorialesDaoCrear"));
class EditorialesControllerCrear extends EditorialesDaoCrear_1.default {
    crearEditoriales(request, response) {
        const nombre = request.body.nombre;
        const pais = request.body.pais;
        const telefono = request.body.telefono;
        const parametros = [nombre, pais, telefono];
        EditorialesControllerCrear.crearEditorial(editoriales_sql_Confirmar_1.SQL_EDIT_CONFIRMAR.CONFIRMAR, editoriales_sql_crear_1.SQL_EDIT_CREAR.CREAR, parametros, response);
    }
}
const editorialesControllerCrear = new EditorialesControllerCrear();
exports.default = editorialesControllerCrear;
