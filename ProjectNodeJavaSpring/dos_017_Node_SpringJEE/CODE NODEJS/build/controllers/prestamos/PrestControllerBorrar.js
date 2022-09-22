"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prest_sql_borrar_1 = require("./../../repositories/prestamos/prest_sql_borrar");
const PrestDaoBorrar_1 = __importDefault(require("../../daos/prestamos/PrestDaoBorrar"));
class PrestControllerBorrar extends PrestDaoBorrar_1.default {
    eliminarPrestamo(request, response) {
        const codigo = request.params.idPrestamo;
        const parameters = [codigo];
        PrestControllerBorrar.eliminarPrestamo(prest_sql_borrar_1.SQL_PRESTAMO_BORRAR.BORRAR, parameters, response);
    }
}
const prestControllerBorrar = new PrestControllerBorrar();
exports.default = prestControllerBorrar;
