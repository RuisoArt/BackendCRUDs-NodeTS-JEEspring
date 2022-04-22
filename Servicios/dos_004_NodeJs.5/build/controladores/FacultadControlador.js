"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FacultadDAO_1 = __importDefault(require("../daos/FacultadDAO"));
const facultad_sql_1 = require("../repositorios/facultad_sql");
const docente_sql_1 = require("../repositorios/docente_sql");
class FacultadControlador extends FacultadDAO_1.default {
    dameFacultades(req, res) {
        FacultadControlador.obtenerFacu(facultad_sql_1.SQL_FACULTAD.FACULTADES, [], res);
    }
    dameDocentes(req, res) {
        FacultadControlador.obtenerDoce(docente_sql_1.SQL_DOCENTE.DOCENTE, [], res);
    }
}
const facultadControlador = new FacultadControlador();
exports.default = facultadControlador;
