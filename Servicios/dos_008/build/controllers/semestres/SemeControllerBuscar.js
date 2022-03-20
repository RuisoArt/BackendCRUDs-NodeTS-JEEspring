"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const semestres_sql_Buscar_1 = require("./../../repositories/semestres/semestres_sql_Buscar");
const SemestresDaoBuscar_1 = __importDefault(require("../../daos/semestres/SemestresDaoBuscar"));
class SemeControllerBuscar extends SemestresDaoBuscar_1.default {
    buscarSemestre(req, res) {
        const codigo = req.params.codigoSemestre;
        const parametro = [codigo];
        SemeControllerBuscar.encontrarSemestre(semestres_sql_Buscar_1.SQL_SEMESTRES_BUSCAR.BUSCAR, parametro, res);
    }
}
const semeControllerBuscar = new SemeControllerBuscar();
exports.default = semeControllerBuscar;
