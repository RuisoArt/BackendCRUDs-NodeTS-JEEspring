"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProgramaDao_1 = __importDefault(require("../daos/ProgramaDao"));
const programas_sql_1 = require("../repositorios/programas/programas_sql");
class ProgramaController extends ProgramaDao_1.default {
    dameProgramas(req, res) {
        ProgramaController.obtenerPrograma(programas_sql_1.SQL_PROGRAMAS.TODO, [], res);
    }
    grabarProgramas(req, res) {
        const nombre = req.body.nombrePrograma;
        const parametro = [nombre];
        ProgramaController.crearPrograma(programas_sql_1.SQL_PROGRAMAS.CONFIRMAR, programas_sql_1.SQL_PROGRAMAS.CREAR, parametro, res);
    }
    buscarPrograma(req, res) {
        const codigo = req.params.codigoPrograma;
        const parametro = [codigo];
        ProgramaController.encontrarPrograma(programas_sql_1.SQL_PROGRAMAS.CARGAR, parametro, res);
    }
    eliminarPrograma(req, res) {
        const codigo = req.params.codigoPrograma;
        const parametro = [codigo];
        ProgramaController.eliminarPrograma(programas_sql_1.SQL_PROGRAMAS.BORRAR, parametro, res);
    }
}
const programaController = new ProgramaController();
exports.default = programaController;
