"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const acc_sql_validar_1 = require("./../../repositories/accesos/acc_sql_validar");
const AccessDaoValidar_1 = __importDefault(require("../../daos/accesos/AccessDaoValidar"));
class AccessControllerValidar extends AccessDaoValidar_1.default {
    encontrarUsuario(req, res) {
        const correo = req.body.correoAcceso;
        const clave = req.body.claveAcceso;
        const parametro = [correo, clave];
        AccessControllerValidar.validameAcceso(acc_sql_validar_1.SQL_ACCESO_VALIDAR.VALIDAR, parametro, res);
    }
}
const accessControllerValidar = new AccessControllerValidar();
exports.default = accessControllerValidar;
