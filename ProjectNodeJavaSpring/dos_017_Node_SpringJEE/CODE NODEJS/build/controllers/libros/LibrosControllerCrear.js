"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const libros_sql_confirmar_1 = require("../../repositories/libros/libros_sql_confirmar");
const libros_sql_crear_1 = require("../../repositories/libros/libros_sql_crear");
const LibrosDaoCrear_1 = __importDefault(require("../../daos/libros/LibrosDaoCrear"));
class LibroControllerCrear extends LibrosDaoCrear_1.default {
    crearLibro(req, res) {
        const titulo = req.body.titulo;
        const fechaPublicacion = req.body.fechaPublicacion;
        const codigo = req.body.codigo;
        const isbn = req.body.isbn;
        const idEditorial = req.body.idEditorial;
        const parametros = [titulo, fechaPublicacion, codigo, isbn, idEditorial];
        LibroControllerCrear.crearLibro(libros_sql_confirmar_1.SQL_LIBRO_CONFIRMAR.CONFIRMAR, libros_sql_crear_1.SQL_LIBRO_CREAR.CREAR, parametros, res);
    }
}
const libroControllerCrear = new LibroControllerCrear();
exports.default = libroControllerCrear;
