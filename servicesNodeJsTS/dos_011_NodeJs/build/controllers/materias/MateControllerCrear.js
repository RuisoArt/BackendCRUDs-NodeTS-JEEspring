"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MateriasDaoCrear_1 = __importDefault(require("../../daos/materias/MateriasDaoCrear"));
const materias_sql_Crear_1 = require("../../repositories/materias/materias_sql_Crear");
const materias_sql_Confirmar_1 = require("../../repositories/materias/materias_sql_Confirmar");
class MateControllerCrear extends MateriasDaoCrear_1.default {
    grabarMateria(req, res) {
        const nombre = req.body.nombreMateria;
        const referencia = req.body.referenciaMateria;
        const parametro = [nombre, referencia];
        MateControllerCrear.crearMaterias(materias_sql_Confirmar_1.SQL_MATERIAS_CONFIRMAR.CONFIRMAR, materias_sql_Crear_1.SQL_MATERIAS_CREAR.CREAR, parametro, res);
    }
}
const mateControllerCrear = new MateControllerCrear();
exports.default = mateControllerCrear;
