"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SemestreDao_1 = __importDefault(require("../daos/SemestreDao"));
const semestres_sql_1 = require("../repositorios/semestres/semestres_sql");
class SemestreController extends SemestreDao_1.default {
    dameSemestres(req, res) {
        SemestreController.obtenerSemestre(semestres_sql_1.SQL_SEMESTRES.TODO, [], res);
    }
    grabarSemestres(req, res) {
        const nombre = req.body.nombreSemestre;
        const parametro = [nombre];
        SemestreController.crearSemestre(semestres_sql_1.SQL_SEMESTRES.CONFIRMAR, semestres_sql_1.SQL_SEMESTRES.CREAR, parametro, res);
    }
}
const semestreController = new SemestreController();
exports.default = semestreController;
