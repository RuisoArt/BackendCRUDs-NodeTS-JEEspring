"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pensums_sql_Borrar_1 = require("./../../repositories/pensums/pensums_sql_Borrar");
const PenDaoBorrar_1 = __importDefault(require("../../daos/pensums/PenDaoBorrar"));
class PenControllerBorrar extends PenDaoBorrar_1.default {
    eliminarPensum(req, res) {
        const codigo = req.params.codigoPensum;
        const parametro = [codigo];
        PenControllerBorrar.borrarPensum(pensums_sql_Borrar_1.SQL_PENSUMS_BORRAR.BORRAR, parametro, res);
    }
}
const penControllerBorrar = new PenControllerBorrar();
exports.default = penControllerBorrar;
