"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clientes_sql_crear_1 = require("./../../repositories/clientes/clientes_sql_crear");
const clientes_sql_confirmar_1 = require("../../repositories/clientes/clientes_sql_confirmar");
const ClientesDaoCrear_1 = __importDefault(require("../../daos/clientes/ClientesDaoCrear"));
class ClientesControllerCrear extends ClientesDaoCrear_1.default {
    crearCliente(req, res) {
        const identificacion = req.body.identificacion;
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const direccion = req.body.direccion;
        const telefono = req.body.telefono;
        const parametros = [identificacion, nombre, apellido, direccion, telefono];
        ClientesControllerCrear.crearCliente(clientes_sql_confirmar_1.SQL_CLIENTES_CONFIRMAR.CONFIRMAR, clientes_sql_crear_1.SQL_CLIENTES_CREAR.CREAR, parametros, res);
    }
}
const clientesControllerCrear = new ClientesControllerCrear();
exports.default = clientesControllerCrear;
