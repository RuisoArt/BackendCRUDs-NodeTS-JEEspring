"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const programas_sql_Buscar_1 = require("./../../repositories/programas/programas_sql_Buscar");
const ProgramasDaoBuscar_1 = __importDefault(require("../../daos/programas/ProgramasDaoBuscar"));
class ProControllerBuscar extends ProgramasDaoBuscar_1.default {
    buscarPrograma(req, res) {
        const codigo = req.params.codigoPrograma;
        const parametro = [codigo];
        ProControllerBuscar.encontrarPrograma(programas_sql_Buscar_1.SQL_PROGRAMAS_BUSCAR.CARGAR, parametro, res);
    }
}
const proControllerBuscar = new ProControllerBuscar();
exports.default = proControllerBuscar;
