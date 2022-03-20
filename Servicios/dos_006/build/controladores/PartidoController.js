"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PartidoDao_1 = __importDefault(require("../daos/PartidoDao"));
const partidos_sql_1 = require("../respositorios/partidos_sql");
class PartidoController extends PartidoDao_1.default {
    damePartidos(req, res) {
        PartidoController.obtenerPartidos(partidos_sql_1.SQL_PARTIDOS.PARTIDO, [], res);
    }
    grabarPartido(req, res) {
        const nombre = req.body.nombrePartido;
        const parametro = [nombre];
        PartidoController.crearPartidos(partidos_sql_1.SQL_PARTIDOS.CONFIRMAR, partidos_sql_1.SQL_PARTIDOS.CREAR, parametro, res);
    }
}
const partidoController = new PartidoController();
exports.default = partidoController;
