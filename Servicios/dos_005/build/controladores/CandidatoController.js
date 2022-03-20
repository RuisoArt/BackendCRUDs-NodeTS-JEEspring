"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CandidatoDao_1 = __importDefault(require("../daos/CandidatoDao"));
const candidatos_sql_1 = require("../respositorios/candidatos_sql");
class CandidatoController extends CandidatoDao_1.default {
    dameCandidatos(req, res) {
        CandidatoController.obtenerCandidatos(candidatos_sql_1.SQL_CANDIDATOS.CANDIDATO, [], res);
    }
}
const candidatoController = new CandidatoController();
exports.default = candidatoController;
