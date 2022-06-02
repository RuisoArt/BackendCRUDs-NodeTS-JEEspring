"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const libros_sql_borrar_1 = require("../../repositories/libros/libros_sql_borrar");
const LibrosDaoBorrar_1 = __importDefault(require("../../daos/libros/LibrosDaoBorrar"));
class LibroControllerBorrar extends LibrosDaoBorrar_1.default {
    borrarLibro(req, res) {
        const codigo = req.params.idLibro;
        const parametros = [codigo];
        LibroControllerBorrar.eliminarLibro(libros_sql_borrar_1.SQL_LIBRO_BORRAR.BORRAR, parametros, res);
    }
}
const libroControllerBorrar = new LibroControllerBorrar();
exports.default = libroControllerBorrar;
