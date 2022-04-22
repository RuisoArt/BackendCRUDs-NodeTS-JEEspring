"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const programas_actualizar_sql_1 = require("./../../repositorios/programas/programas_actualizar_sql");
const ProgramaDao_Actualizar_1 = __importDefault(require("../../daos/programas/ProgramaDao_Actualizar"));
class ProgramaController_Actualizar extends ProgramaDao_Actualizar_1.default {
    actualizarProgramas(req, res) {
        const codigo = req.body.codigoPrograma;
        const nombre = req.body.nombrePrograma;
        const parametro = [nombre, codigo];
        ProgramaController_Actualizar.actualizarPrograma(programas_actualizar_sql_1.SQL_PROGRAMAS_ACTUALIZAR.F5, parametro, res);
    }
}
const programaController_Actualizar = new ProgramaController_Actualizar();
exports.default = programaController_Actualizar;
