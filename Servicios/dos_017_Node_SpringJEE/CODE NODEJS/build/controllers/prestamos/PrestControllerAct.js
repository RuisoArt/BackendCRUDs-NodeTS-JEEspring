"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prest_sql_actualizar_1 = require("./../../repositories/prestamos/prest_sql_actualizar");
const PrestDaoAct_1 = __importDefault(require("../../daos/prestamos/PrestDaoAct"));
class PrestControllerActualizar extends PrestDaoAct_1.default {
    actualizarPrestamos(req, res) {
        const codigo = req.body.idPrestamo;
        const fechaInicio = req.body.fechaInicio;
        const descripcion = req.body.descripcion;
        const idCliente = req.body.idCliente;
        const prestamos = [codigo, fechaInicio, descripcion, idCliente];
        PrestControllerActualizar.actualizarPrestamo(prest_sql_actualizar_1.SQL_PRESTAMO_ACT.F5, prestamos, res);
    }
}
const prestControllerActualizar = new PrestControllerActualizar();
exports.default = prestControllerActualizar;
