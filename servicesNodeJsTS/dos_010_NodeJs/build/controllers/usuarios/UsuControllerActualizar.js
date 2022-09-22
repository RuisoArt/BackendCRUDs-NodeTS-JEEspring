"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usu_sql_Actualizar_1 = require("./../../repositories/usuarios/usu_sql_Actualizar");
const UsuDaoActualizar_1 = __importDefault(require("../../daos/usuarios/UsuDaoActualizar"));
class UsuControllerActualizar extends UsuDaoActualizar_1.default {
    refrescarUsuario(req, res) {
        const codigo = req.body.codUsuario;
        const rol = req.body.codRol;
        const documento = req.body.documentoUsuario;
        const tipo = req.body.tipodocumentoUsuario;
        const nombre = req.body.nombresUsuario;
        const apellido = req.body.apellidosUsuario;
        const telefono = req.body.telefonoUsuario;
        const estado = req.body.estadoUsuario;
        const parametro = [codigo, rol, documento, tipo, nombre, apellido, telefono, estado];
        UsuControllerActualizar.actualizarUsuario(usu_sql_Actualizar_1.SQL_USUARIOS_ACTUALIZAR.F5, parametro, res);
    }
}
const usuControllerActualizar = new UsuControllerActualizar();
exports.default = usuControllerActualizar;
