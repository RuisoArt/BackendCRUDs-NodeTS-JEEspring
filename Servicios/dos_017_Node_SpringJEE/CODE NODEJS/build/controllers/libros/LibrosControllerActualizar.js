"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const libros_sql_actualizar_1 = require("../../repositories/libros/libros_sql_actualizar");
const LibrosDaoActualizar_1 = __importDefault(require("../../daos/libros/LibrosDaoActualizar"));
class LibroControllerActualizar extends LibrosDaoActualizar_1.default {
    actualizarLibro(req, res) {
        const id = req.body.idLibro;
        const titulo = req.body.titulo;
        const fechaPublicacion = req.body.fechaPublicacion;
        const codigo = req.body.codigo;
        const isbn = req.body.isbn;
        const idEditorial = req.body.idEditorial;
        const parametros = [id, titulo, fechaPublicacion, codigo, isbn, idEditorial];
        LibroControllerActualizar.actualizarLibros(libros_sql_actualizar_1.SQL_LIBRO_ACTUALIZAR.F5, parametros, res);
    }
}
const libroControllerActualizar = new LibroControllerActualizar();
exports.default = libroControllerActualizar;
