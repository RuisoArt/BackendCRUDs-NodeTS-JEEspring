"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const depres_sql_borrar_1 = require("../../repositories/detalle_prestamos/depres_sql_borrar");
const DepresDaoBorrar_1 = __importDefault(require("../../daos/detalles_prestamos/DepresDaoBorrar"));
class DepresControllerBorrar extends DepresDaoBorrar_1.default {
    eliminarDepres(req, res) {
        const idDetallePrestamos = req.params.idDetallePrestamos;
        const parametros = [idDetallePrestamos];
        DepresControllerBorrar.eliminarDepres(depres_sql_borrar_1.SQL_DEPRES_BORRAR.BORRAR, parametros, res);
    }
}
const depresControllerBorrar = new DepresControllerBorrar();
exports.default = depresControllerBorrar;
