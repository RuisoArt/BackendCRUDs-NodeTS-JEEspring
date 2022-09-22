"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const semestres_sql_Actualizar_1 = require("./../../repositories/semestres/semestres_sql_Actualizar");
const SemestresDaoActualizar_1 = __importDefault(require("../../daos/semestres/SemestresDaoActualizar"));
class SemeControllerActualizar extends SemestresDaoActualizar_1.default {
    actualizarSemestre(req, res) {
        const codigo = req.body.codigoSemestre;
        const nombre = req.body.nombreSemestre;
        const parametro = [nombre, codigo];
        SemeControllerActualizar.actualizarSemestre(semestres_sql_Actualizar_1.SQL_SEMESTRES_ACTUALIZAR.F5, parametro, res);
    }
}
const semeControllerActualizar = new SemeControllerActualizar();
exports.default = semeControllerActualizar;
