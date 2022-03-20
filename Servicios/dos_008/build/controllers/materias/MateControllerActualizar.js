"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MateriasDaoActualizar_1 = __importDefault(require("../../daos/materias/MateriasDaoActualizar"));
const materias_sql_Actualizar_1 = require("../../repositories/materias/materias_sql_Actualizar");
class MateControllerActualizar extends MateriasDaoActualizar_1.default {
    actualizarMaterias(req, res) {
        const codigo = req.body.codigoMateria;
        const nombre = req.body.nombreMateria;
        const referencia = req.body.referenciaMateria;
        const parametro = [nombre, referencia, codigo];
        MateControllerActualizar.refrescarMateria(materias_sql_Actualizar_1.SQL_MATERIAS_ACTUALIZAR.F5, parametro, res);
    }
}
const mateControllerActualizar = new MateControllerActualizar();
exports.default = mateControllerActualizar;
