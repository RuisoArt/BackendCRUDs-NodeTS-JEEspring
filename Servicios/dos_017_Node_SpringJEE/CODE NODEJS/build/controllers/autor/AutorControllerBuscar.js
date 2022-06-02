"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const autor_sql_buscar_1 = require("../../repositories/autor/autor_sql_buscar");
const AutorDaoBuscar_1 = __importDefault(require("../../daos/autor/AutorDaoBuscar"));
class AutorControllerBuscar extends AutorDaoBuscar_1.default {
    buscarAutorID(request, response) {
        const codigo = request.params.idAutor;
        const parametros = [codigo];
        AutorControllerBuscar.encontrarAutor(autor_sql_buscar_1.SQL_AUTOR_BUSCAR.BUSCAR, parametros, response);
    }
}
const autorControllerBuscar = new AutorControllerBuscar();
exports.default = autorControllerBuscar;
