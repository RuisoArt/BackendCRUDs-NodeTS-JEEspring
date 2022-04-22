"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const programas_sql_Confirmar_1 = require("./../../repositories/programas/programas_sql_Confirmar");
const programas_sql_Crear_1 = require("./../../repositories/programas/programas_sql_Crear");
const ProgramasDaoCrear_1 = __importDefault(require("../../daos/programas/ProgramasDaoCrear"));
class ProControllerCrear extends ProgramasDaoCrear_1.default {
    grabarProgramas(req, res) {
        const nombre = req.body.nombrePrograma;
        const parametro = [nombre];
        ProControllerCrear.crearPrograma(programas_sql_Confirmar_1.SQL_PROGRAMAS_CONFIRMAR.CONFIRMAR, programas_sql_Crear_1.SQL_PROGRAMAS_CREAR.CREAR, parametro, res);
    }
}
const proControllerCrear = new ProControllerCrear();
exports.default = proControllerCrear;
