"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const autor_sql_actualizar_1 = require("../../repositories/autor/autor_sql_actualizar");
const AutorDaoActualizar_1 = __importDefault(require("../../daos/autor/AutorDaoActualizar"));
class AutorControllerActualizar extends AutorDaoActualizar_1.default {
    actualizarAutor(request, response) {
        const idAutor = request.body.idAutor;
        const nombre = request.body.nombre;
        const apellido = request.body.apellido;
        const nacionalidad = request.body.nacionalidad;
        const descripcion = request.body.descripcion;
        const parametros = [idAutor, nombre, apellido, nacionalidad, descripcion];
        AutorControllerActualizar.actualizarAutor(autor_sql_actualizar_1.SQL_AUTOR_ACTUALIZAR.F5, parametros, response);
    }
}
const autorControllerActualizar = new AutorControllerActualizar();
exports.default = autorControllerActualizar;
