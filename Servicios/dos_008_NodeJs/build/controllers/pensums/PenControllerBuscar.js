"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pensums_sql_Buscar_1 = require("./../../repositories/pensums/pensums_sql_Buscar");
const PenDaoBuscar_1 = __importDefault(require("../../daos/pensums/PenDaoBuscar"));
class PenControllerBuscar extends PenDaoBuscar_1.default {
    buscarPensum(req, res) {
        const codigo = req.params.codigoPensum;
        const parametro = [codigo];
        PenControllerBuscar.encontrarPensum(pensums_sql_Buscar_1.SQL_PENSUMS_BUSCAR.BUSCAR, parametro, res);
    }
}
const penControllerBuscar = new PenControllerBuscar();
exports.default = penControllerBuscar;
