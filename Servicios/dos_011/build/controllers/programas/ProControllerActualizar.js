"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const programas_sql_Actualizar_1 = require("./../../repositories/programas/programas_sql_Actualizar");
const ProgramasDaoActualizar_1 = __importDefault(require("../../daos/programas/ProgramasDaoActualizar"));
class ProControllerActualizar extends ProgramasDaoActualizar_1.default {
    actualizarProgramas(req, res) {
        const codigo = req.body.codigoPrograma;
        const nombre = req.body.nombrePrograma;
        const parametro = [nombre, codigo];
        ProControllerActualizar.actualizarPrograma(programas_sql_Actualizar_1.SQL_PROGRAMAS_ACTUALIZAR.F5, parametro, res);
    }
}
const proControllerActualizar = new ProControllerActualizar();
exports.default = proControllerActualizar;
