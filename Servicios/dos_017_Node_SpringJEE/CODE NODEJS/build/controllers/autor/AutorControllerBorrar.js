"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const autor_sql_borrar_1 = require("../../repositories/autor/autor_sql_borrar");
const AutorDaoBorrar_1 = __importDefault(require("../../daos/autor/AutorDaoBorrar"));
class AutorControllerBorrar extends AutorDaoBorrar_1.default {
    eliminarAutor(request, response) {
        const idAutor = request.params.idAutor;
        const parametros = [idAutor];
        AutorControllerBorrar.eliminarAutor(autor_sql_borrar_1.SQL_AUTOR_BORRAR.BORRAR, parametros, response);
    }
}
const autorControllerBorrar = new AutorControllerBorrar();
exports.default = autorControllerBorrar;
