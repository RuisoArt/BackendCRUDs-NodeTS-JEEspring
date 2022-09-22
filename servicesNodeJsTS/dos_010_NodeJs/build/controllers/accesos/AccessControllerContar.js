"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const acc_sql_Contar_1 = require("../../repositories/accesos/acc_sql_Contar");
const AccessDaoContar_1 = __importDefault(require("../../daos/accesos/AccessDaoContar"));
class AccessControllerContar extends AccessDaoContar_1.default {
    conteoIngresos(req, res) {
        AccessControllerContar.contarAccesos(acc_sql_Contar_1.SQL_ACCESO_CONTAR.CONTAR, [], res);
    }
}
const accessControllerContar = new AccessControllerContar();
exports.default = accessControllerContar;
