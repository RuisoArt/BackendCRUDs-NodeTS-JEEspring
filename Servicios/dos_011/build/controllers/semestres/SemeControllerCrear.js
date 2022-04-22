"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const semestres_sql_Crear_1 = require("./../../repositories/semestres/semestres_sql_Crear");
const semestres_sql_Confirmar_1 = require("./../../repositories/semestres/semestres_sql_Confirmar");
const SemestresDaoCrear_1 = __importDefault(require("../../daos/semestres/SemestresDaoCrear"));
class SemeControllerCrear extends SemestresDaoCrear_1.default {
    grabarSemestres(req, res) {
        const nombre = req.body.nombreSemestre;
        const parametro = [nombre];
        SemeControllerCrear.crearSemestre(semestres_sql_Confirmar_1.SQL_SEMESTRES_CONFIRMAR.CONFIRMAR, semestres_sql_Crear_1.SQL_SEMESTRES_CREAR.CREAR, parametro, res);
    }
}
const semeControllerCrear = new SemeControllerCrear();
exports.default = semeControllerCrear;
