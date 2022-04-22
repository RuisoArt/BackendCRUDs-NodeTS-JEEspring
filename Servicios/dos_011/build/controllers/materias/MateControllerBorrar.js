"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MateriasDaoBorrar_1 = __importDefault(require("../../daos/materias/MateriasDaoBorrar"));
const materias_sql_Borrar_1 = require("../../repositories/materias/materias_sql_Borrar");
class MateControllerBorrar extends MateriasDaoBorrar_1.default {
    eliminarMateria(req, res) {
        const codigo = req.params.codigoMateria;
        const parametro = [codigo];
        MateControllerBorrar.borrarMateria(materias_sql_Borrar_1.SQL_MATERIAS_BORRAR.BORRAR, parametro, res);
    }
}
const mateControllerBorrar = new MateControllerBorrar();
exports.default = mateControllerBorrar;
