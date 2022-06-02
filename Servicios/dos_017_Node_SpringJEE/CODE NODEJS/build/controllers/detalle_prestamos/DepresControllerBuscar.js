"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const depres_sql_buscar_1 = require("../../repositories/detalle_prestamos/depres_sql_buscar");
const DepresDaoBuscar_1 = __importDefault(require("../../daos/detalles_prestamos/DepresDaoBuscar"));
class DepresControllerBuscar extends DepresDaoBuscar_1.default {
    buscarDEpres(req, res) {
        const idDetallePrestamos = req.params.idDetallePrestamos;
        const parametros = [idDetallePrestamos];
        DepresControllerBuscar.encontrarDepres(depres_sql_buscar_1.SQL_DEPRES_BUSCAR.BUSCAR, parametros, res);
    }
}
const depresControllerBuscar = new DepresControllerBuscar();
exports.default = depresControllerBuscar;
