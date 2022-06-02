"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const libros_sql_buscar_1 = require("./../../repositories/libros/libros_sql_buscar");
const LibrosDaoBuscar_1 = __importDefault(require("../../daos/libros/LibrosDaoBuscar"));
class LibrosControllerBuscar extends LibrosDaoBuscar_1.default {
    buscarLibros(req, res) {
        const codigo = req.params.idLibro;
        const parametro = [codigo];
        LibrosControllerBuscar.encontrarLibro(libros_sql_buscar_1.SQL_LIBRO_BUSCAR.BUSCAR, parametro, res);
    }
}
const librosControllerBuscar = new LibrosControllerBuscar();
exports.default = librosControllerBuscar;
