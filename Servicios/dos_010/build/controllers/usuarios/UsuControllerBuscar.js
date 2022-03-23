"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usu_sql_Buscar_1 = require("./../../repositories/usuarios/usu_sql_Buscar");
const UsuDaoBuscar_1 = __importDefault(require("../../daos/usuarios/UsuDaoBuscar"));
class UsuControllerBuscar extends UsuDaoBuscar_1.default {
    buscarUsuario(req, res) {
        const codigo = req.params.codUsuario;
        const parametro = [codigo];
        UsuControllerBuscar.encontrarUsuario(usu_sql_Buscar_1.SQL_USUARIOS_BUSCAR.CARGAR, parametro, res);
    }
}
const usuControllerBuscar = new UsuControllerBuscar();
exports.default = usuControllerBuscar;
