"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pensums_sql_Actualizar_1 = require("./../../repositories/pensums/pensums_sql_Actualizar");
const PenDaoActualizar_1 = __importDefault(require("../../daos/pensums/PenDaoActualizar"));
class PenControllerActualizar extends PenDaoActualizar_1.default {
    actualizarPensum(req, res) {
        const codigo = req.body.codigoPensum;
        const codigo2 = req.body.codigoPrograma;
        const nombre = req.body.nombrePensum;
        const parametro = [codigo2, nombre, codigo];
        PenControllerActualizar.refrescarPensum(pensums_sql_Actualizar_1.SQL_PENSUMS_ACTUALIZAR.F5, parametro, res);
    }
}
const penControllerActualizar = new PenControllerActualizar();
exports.default = penControllerActualizar;
