"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clientes_sql_actualizar_1 = require("../../repositories/clientes/clientes_sql_actualizar");
const ClienteDaoActualizar_1 = __importDefault(require("../../daos/clientes/ClienteDaoActualizar"));
class ClientesControllerActualizar extends ClienteDaoActualizar_1.default {
    actualizarCliente(req, res) {
        const codigo = req.body.idCliente;
        const identificacion = req.body.identificacion;
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const direccion = req.body.direccion;
        const telefono = req.body.telefono;
        const parametro = [codigo, identificacion, nombre, apellido, direccion, telefono];
        ClientesControllerActualizar.actualizarCliente(clientes_sql_actualizar_1.SQL_CLIENTES_ACTUALIZAR.F5, parametro, res);
    }
}
const clienteControllerActualizar = new ClientesControllerActualizar();
exports.default = clienteControllerActualizar;
