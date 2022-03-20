"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pensums_sql_Confirmar_1 = require("./../../repositories/pensums/pensums_sql_Confirmar");
const pensums_sql_Crear_1 = require("./../../repositories/pensums/pensums_sql_Crear");
const PenDaoCrear_1 = __importDefault(require("../../daos/pensums/PenDaoCrear"));
class PenControllerCrear extends PenDaoCrear_1.default {
    grabarPensum(req, res) {
        const codigo2 = req.body.codigoPrograma;
        const nombre = req.body.nombrePensum;
        const parametro = [codigo2, nombre];
        PenControllerCrear.crearPensum(pensums_sql_Confirmar_1.SQL_PENSUMS_CONFIRMAR.CONFIRMAR, pensums_sql_Crear_1.SQL_PENSUMS_CREAR.CREAR, parametro, res);
    }
}
const penControllerCrear = new PenControllerCrear();
exports.default = penControllerCrear;
