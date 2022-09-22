"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prest_sql_crear_1 = require("./../../repositories/prestamos/prest_sql_crear");
const prest_sql_confirmar_1 = require("./../../repositories/prestamos/prest_sql_confirmar");
const PrestDaoCrear_1 = __importDefault(require("../../daos/prestamos/PrestDaoCrear"));
class PrestControllerCrear extends PrestDaoCrear_1.default {
    crearPrestamo(request, response) {
        const fechaInicio = request.body.fechaInicio;
        const descripcion = request.body.descripcion;
        const idCliente = request.body.idCliente;
        const prestamos = [fechaInicio, descripcion, idCliente];
        PrestControllerCrear.crearPrestamo(prest_sql_confirmar_1.SQL_PRESTAMO_CONFIRMAR.CONFIRMAR, prest_sql_crear_1.SQL_PRESTAMO_CREAR.CREAR, prestamos, response);
    }
}
const prestControllerCrear = new PrestControllerCrear();
exports.default = prestControllerCrear;
