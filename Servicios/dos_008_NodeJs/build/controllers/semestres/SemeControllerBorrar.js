"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const semestres_sql_Borrar_1 = require("./../../repositories/semestres/semestres_sql_Borrar");
const SemestresDaoBorrar_1 = __importDefault(require("../../daos/semestres/SemestresDaoBorrar"));
class SemeControllerBorrar extends SemestresDaoBorrar_1.default {
    eliminarSemestre(req, res) {
        const codigo = req.params.codigoSemestre;
        const parametro = [codigo];
        SemeControllerBorrar.eliminarSemestre(semestres_sql_Borrar_1.SQL_SEMESTRES_BORRAR.BORRAR, parametro, res);
    }
}
const semeControllerBorrar = new SemeControllerBorrar();
exports.default = semeControllerBorrar;
