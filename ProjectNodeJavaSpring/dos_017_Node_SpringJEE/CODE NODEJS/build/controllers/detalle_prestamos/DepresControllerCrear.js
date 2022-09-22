"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const depres_sql_confirmar_1 = require("../../repositories/detalle_prestamos/depres_sql_confirmar");
const depres_sql_crear_1 = require("../../repositories/detalle_prestamos/depres_sql_crear");
const DepresDaoCrear_1 = __importDefault(require("../../daos/detalles_prestamos/DepresDaoCrear"));
class DepresControllerCrear extends DepresDaoCrear_1.default {
    crearDepres(req, res) {
        const fechaDevolucion = req.body.fechaDevolucion;
        const diasMora = req.body.diasMora;
        const descripcion = req.body.descripcion;
        const fechaEntrega = req.body.fechaEntrega;
        const idPrestamo = req.body.idPrestamo;
        const idLibro = req.body.idLibro;
        const parametros = [fechaDevolucion, diasMora, descripcion, fechaEntrega, idPrestamo, idLibro];
        DepresControllerCrear.crearDepres(depres_sql_confirmar_1.SQL_DEPRES_CONFIRMAR.CONFIRMAR, depres_sql_crear_1.SQL_DEPRES_CREAR.CREAR, parametros, res);
    }
}
const depresControllerCrear = new DepresControllerCrear();
exports.default = depresControllerCrear;
