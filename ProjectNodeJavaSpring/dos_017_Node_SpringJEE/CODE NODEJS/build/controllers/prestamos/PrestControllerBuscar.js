"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prest_sql_buscar_1 = require("./../../repositories/prestamos/prest_sql_buscar");
const PrestDaoBuscar_1 = __importDefault(require("../../daos/prestamos/PrestDaoBuscar"));
class PrestControllerBuscar extends PrestDaoBuscar_1.default {
    buscarPrestamo(request, response) {
        const codigo = request.params.idPrestamo;
        const parameters = [codigo];
        PrestControllerBuscar.encontrarPrestamo(prest_sql_buscar_1.SQL_PRESTAMO_BUSCAR.BUSCAR, parameters, response);
    }
}
const prestControllerBuscar = new PrestControllerBuscar();
exports.default = prestControllerBuscar;
