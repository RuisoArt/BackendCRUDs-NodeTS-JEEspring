"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usu_sql_Borrar_1 = require("./../../repositories/usuarios/usu_sql_Borrar");
const UsuDaoBorrar_1 = __importDefault(require("../../daos/usuarios/UsuDaoBorrar"));
class UsuControllerBorrar extends UsuDaoBorrar_1.default {
    eliminarUsuario(req, res) {
        const codigo = req.params.codUsuario;
        const parametro = [codigo];
        UsuControllerBorrar.eliminarUsuario(usu_sql_Borrar_1.SQL_USUARIOS_BORRAR.BORRAR, parametro, res);
    }
}
const usuControllerBorrar = new UsuControllerBorrar();
exports.default = usuControllerBorrar;
