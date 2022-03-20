"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const access_sql_Validar_1 = require("./../../repositories/acceso/access_sql_Validar");
const AccessDaoValidar_1 = __importDefault(require("../../daos/accesos/AccessDaoValidar"));
class AccessControllerValidar extends AccessDaoValidar_1.default {
    encontrarUsuario(req, res) {
        const correo = req.body.correoAcceso;
        const clave = req.body.claveAcceso;
        const parametro = [correo, clave];
        AccessControllerValidar.validameAcceso(access_sql_Validar_1.SQL_ACESSO_VALIDAR.VALIDAR, parametro, res);
    }
}
const accessControllerValidar = new AccessControllerValidar();
exports.default = accessControllerValidar;
