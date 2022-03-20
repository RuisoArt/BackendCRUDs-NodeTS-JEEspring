"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const programas_sql_Borrar_1 = require("./../../repositories/programas/programas_sql_Borrar");
const ProgramasDaoBorrar_1 = __importDefault(require("../../daos/programas/ProgramasDaoBorrar"));
class ProControllerBorrar extends ProgramasDaoBorrar_1.default {
    eliminarPrograma(req, res) {
        const codigo = req.params.codigoPrograma;
        const parametro = [codigo];
        ProControllerBorrar.eliminarPrograma(programas_sql_Borrar_1.SQL_PROGRAMAS_BORRAR.BORRAR, parametro, res);
    }
}
const proControllerBorrar = new ProControllerBorrar();
exports.default = proControllerBorrar;
