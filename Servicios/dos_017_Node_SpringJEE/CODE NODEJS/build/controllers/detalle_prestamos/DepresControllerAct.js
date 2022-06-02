"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const depres_sql_actualizar_1 = require("../../repositories/detalle_prestamos/depres_sql_actualizar");
const DepresDaoAct_1 = __importDefault(require("../../daos/detalles_prestamos/DepresDaoAct"));
class DepresControllerAct extends DepresDaoAct_1.default {
    actualizarDepres(req, res) {
        const idDetallePrestamos = req.params.idDetallePrestamos;
        const fechaDevolucion = req.body.fechaDevolucion;
        const diasMora = req.body.diasMora;
        const descripcion = req.body.descripcion;
        const fechaEntrega = req.body.fechaEntrega;
        const idPrestamo = req.body.idPrestamo;
        const idLibro = req.body.idLibro;
        const parametros = [idDetallePrestamos, fechaDevolucion, diasMora, descripcion, fechaEntrega, idPrestamo, idLibro];
        DepresControllerAct.actualizarDepres(depres_sql_actualizar_1.SQL_DEPRES_ACTUALIZAR.F5, parametros, res);
    }
}
const depresControllerAct = new DepresControllerAct();
exports.default = depresControllerAct;
