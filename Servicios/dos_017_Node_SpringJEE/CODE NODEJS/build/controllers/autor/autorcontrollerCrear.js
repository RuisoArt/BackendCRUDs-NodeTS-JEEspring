"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const autor_sql_crear_1 = require("../../repositories/autor/autor_sql_crear");
const autor_sql_confirmar_1 = require("../../repositories/autor/autor_sql_confirmar");
const AutorDaoCrear_1 = __importDefault(require("../../daos/autor/AutorDaoCrear"));
class AutorControllerCrear extends AutorDaoCrear_1.default {
    crearAutor(request, response) {
        const nombre = request.body.nombre;
        const apellido = request.body.apellido;
        const nacionalidad = request.body.nacionalidad;
        const descripcion = request.body.descripcion;
        const parametros = [nombre, apellido, nacionalidad, descripcion];
        AutorControllerCrear.crearAutor(autor_sql_confirmar_1.SQL_AUTOR_CONFIRMAR.CONFIRMAR, autor_sql_crear_1.SQL_AUTOR_CREAR.CREAR, parametros, response);
    }
}
const autorControllerCrear = new AutorControllerCrear();
exports.default = autorControllerCrear;
