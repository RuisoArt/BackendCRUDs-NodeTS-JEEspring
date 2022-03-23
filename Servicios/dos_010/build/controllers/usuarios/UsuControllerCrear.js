"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usu_sql_Confirmar_1 = require("./../../repositories/usuarios/usu_sql_Confirmar");
const usu_sql_Crear_1 = require("./../../repositories/usuarios/usu_sql_Crear");
const UsuDaoCrear_1 = __importDefault(require("../../daos/usuarios/UsuDaoCrear"));
class UsuControllerCrear extends UsuDaoCrear_1.default {
    grabarUsuario(req, res) {
        const rol = req.body.codRol;
        const documento = req.body.documentoUsuario;
        const tipo = req.body.tipodocumentoUsuario;
        const nombre = req.body.nombresUsuario;
        const apellido = req.body.apellidosUsuario;
        const telefono = req.body.telefonoUsuario;
        const estado = req.body.estadoUsuario;
        const parametro = [rol, documento, tipo, nombre, apellido, telefono, estado];
        UsuControllerCrear.crearUsuario(usu_sql_Confirmar_1.SQL_USUARIOS_CONFIRMAR.CONFIRMAR, usu_sql_Crear_1.SQL_USUARIOS_CREAR.CREAR, parametro, res);
    }
}
const usuControllerCrear = new UsuControllerCrear();
exports.default = usuControllerCrear;
