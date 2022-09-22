"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MateriasDaoBuscar_1 = __importDefault(require("../../daos/materias/MateriasDaoBuscar"));
const materias_sql_Buscar_1 = require("../../repositories/materias/materias_sql_Buscar");
class MateControllerBuscar extends MateriasDaoBuscar_1.default {
    buscarMateria(req, res) {
        const codigo = req.params.codigoMateria;
        const parametro = [codigo];
        MateControllerBuscar.encontrarMateria(materias_sql_Buscar_1.SQL_MATERIAS_BUSCAR.BUSCAR, parametro, res);
    }
}
const mateControllerBuscar = new MateControllerBuscar();
exports.default = mateControllerBuscar;
